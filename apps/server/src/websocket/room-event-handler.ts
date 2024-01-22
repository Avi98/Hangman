import { Socket } from 'socket.io';
import { WordBankService } from '../word-bank/word-bank.service';
import RealtimeRoomStore from '../rooms/realtimeRoomStore';
import { EventType } from '../types/event-type';

interface IEventType<P> {
  type: EventType;
  payload: P;
}

export class RoomEventHandler {
  private currentRoomId = null;

  constructor(
    private client: Socket,
    private wordBank: WordBankService,
    private gameStore: RealtimeRoomStore,
  ) {}

  static initializeRoomEventHandler(client: Socket, wordBank: WordBankService) {
    const gameStore = new RealtimeRoomStore();
    const eventHandler = new RoomEventHandler(client, wordBank, gameStore);

    eventHandler.addRoom();
    eventHandler.letterSelected();
  }

  private addEventListener<C extends (...args: any[]) => void>(
    eventName: EventType,
    cb: C,
  ) {
    return this.client.on(eventName, cb);
  }

  private sendEvent<P>({ type, payload }: IEventType<P>) {
    this.client.send(type, payload);
  }

  private broadcastMessage<P>({ type, payload }: IEventType<P>) {
    this.client.to(this.currentRoomId).emit(type, payload);
  }

  private async fetchWord() {
    try {
      return (await this.wordBank.fetchWord()).at(0);
    } catch (error) {
      throw new Error('Failed to fetch word');
    }
  }

  async addRoom() {
    try {
      const word = await this.fetchWord();

      this.addEventListener('JOIN_ROOM', ({ roomId, roomName }) => {
        this.gameStore.createNewRoom({ roomId, word, roomName });

        this.client.join(roomId);
        this.currentRoomId = roomId;

        this.sendEvent({
          type: 'JOIN_SUCCESS',
          payload: `${roomId} joined successfully`,
        });
      });
    } catch (error) {
      //log error
      throw new Error(error);
    }
  }

  async letterSelected() {
    this.addEventListener('SELECTING_LETTER', (letter) => {
      this.broadcastMessage({
        type: 'SELECTED_LETTER',
        payload: letter,
      });
    });
  }
}

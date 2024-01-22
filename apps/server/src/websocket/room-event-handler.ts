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

  static async initializeRoomEventHandler(
    client: Socket,
    wordBank: WordBankService,
  ) {
    const gameStore = new RealtimeRoomStore();
    const eventHandler = new RoomEventHandler(client, wordBank, gameStore);

    await eventHandler.addRoom();
    // eventHandler.letterSelected();
  }

  private addEventListener = (eventName: EventType) => {
    return new Promise((res) => {
      setTimeout(() => {
        this.client.on(eventName, res);
      }, 0);
    });
  };

  private sendEvent<P>({ type, payload }: IEventType<P>) {
    this.client.emit(type, payload);
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
      this.addEventListener('JOIN_ROOM').then(
        async (roomInfo: { roomId: string; roomName: string }) => {
          const word = await this.fetchWord();

          this.currentRoomId = roomInfo.roomId;

          this.gameStore.createNewRoom({
            word,
            roomId: roomInfo.roomId,
            roomName: roomInfo.roomName,
          });

          this.client.join(roomInfo.roomId);
          this.sendEvent({
            type: 'JOIN_SUCCESS',
            payload: this.gameStore.getRoomMetadata(roomInfo.roomId),
          });
        },
      );
    } catch (error) {
      //log error
      throw new Error(error);
    }
  }

  async letterSelected() {
    // this.addEventListener('SELECTING_LETTER', (letter) => {
    //   this.broadcastMessage({
    //     type: 'SELECTED_LETTER',
    //     payload: letter,
    //   });
    // });
  }
}

import { Inject } from '@nestjs/common';
import Room from './room';
import { generateUUID } from './utils';
import { WordBankService } from '../word-bank/word-bank.service';

class RealtimeRoomStore {
  private room = new Map<string, Room>();

  createNewRoom(room: { roomId: string; word: string; roomName: string }) {
    try {
      // const roomId = generateUUID();
      const newRoom = new Room();

      newRoom.setWord(room.word);
      newRoom.setName(room.roomName);

      this.room.set(room.roomId, newRoom);
    } catch (error) {
      throw new Error('Failed to create room');
    }
  }

  getAllRoomsUser(roomId: string) {
    const room = this.room.get(roomId);
    return room.getConnectedUsers();
  }

  addConnection(roomId: string) {}

  removeConnection(roomId: string, connectionId: string) {
    const users = this.getAllRoomsUser(roomId);
    const currentUsers = users.filter((id) => id !== connectionId);
  }

  deleteRoom(roomId) {}

  getRoomMetadata(roomId) {
    return {
      roomId: '',
      users: [''],
      guessWord: '',
    };
  }
}

export default RealtimeRoomStore;

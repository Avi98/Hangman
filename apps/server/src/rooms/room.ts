import { Inject, Injectable } from '@nestjs/common';
import { getAllLetters } from './utils';
import { IUser } from './interface/user';

class Room {
  private alphabets = getAllLetters();
  private users = [];
  private roomName = '';
  private gameState = {
    owner: '',
    word: null,
    remainingLetters: this.alphabets,
    selectedLetters: [],
    skip: 0,
    isCorrect: false,
    incorrect: 0,
    gameOver: false,
  };

  getConnectedUsers() {
    return this.users;
  }

  onSelectLetter() {}

  whoseTurn() {}

  setWord(word) {
    this.gameState.word = word;
  }

  get word() {
    return this.word;
  }

  get game() {
    return this.gameState;
  }

  setName(name: string) {
    this.roomName = name;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }
}

export default Room;

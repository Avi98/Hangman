import { Inject, Injectable } from '@nestjs/common';
import { getAllLetters } from './utils';

class Room {
  private alphabets = getAllLetters();
  private liveUsers = [];
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
    return this.liveUsers;
  }

  onSelectLetter() {}

  whoseTurn() {}

  setWord(word) {
    this.gameState.word = word;
  }
  setName(name: string) {
    this.roomName = name;
  }
}

export default Room;

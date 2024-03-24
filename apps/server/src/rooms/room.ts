import { Inject, Injectable } from '@nestjs/common';
import { getAllLetters } from './utils';
import { IUser } from './interface/user';
import { IGameStore } from '../interface/GameStoreRes';

class Room {
  private static ALL_LETTERS = getAllLetters();
  private static MAX_CHANCE = 5;

  private users = [];
  private roomName = '';
  private gameState: IGameStore = {
    owner: '',
    word: null,
    remainingLetters: [...Room.ALL_LETTERS],
    letters: [...Room.ALL_LETTERS],
    selectedLetters: [],
    skip: 0,
    isCorrect: false,
    incorrect: 0,
    gameOver: false,
  };

  getConnectedUsers() {
    return this.users;
  }

  onSelectLetter(letter: string) {
    if (this.gameState.gameOver) throw new Error('Game Over');

    if (this.gameState.incorrect === Room.MAX_CHANCE)
      throw new Error('Reached max chances Game Over');

    const gameLetters = this.gameState.letters;

    this.gameState.selectedLetters.push(letter);
    this.gameState.letters = gameLetters.filter(
      (letters) => letters !== letter,
    );

    return this.gameState;
  }

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

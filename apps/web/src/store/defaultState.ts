const defaultState = {
  isConnected: false,
  currRoom: {
    roomName: "",
    currUser: {},
    allUsers: [] as any[],
  },

  gameState: {
    owner: {},
    isChoosing: false,
    guessWord: "",
    myTurn: false,
    remainingLetters: [],
    selectedLetters: [],
    turn: {
      name: "",
    },
    isCorrect: false,
    incorrect: 0,
    gameOver: false,
  },
} as const;

export type Store = typeof defaultState;
export default defaultState;

import { create } from "zustand";
import initialState, { Store } from "./defaultState";

type HangmanStoreType = Store & {
  updateSelectedLetters: (letters: string[]) => void;
  addNewUser: (userInfo: any) => void;
};

export const useHangmanStore = create<HangmanStoreType>((set) => ({
  ...initialState,

  addNewUser: (userInfo: any) =>
    set((state) => ({
      ...state,
      currRoom: {
        ...state.currRoom,
        allUsers: [...state.currRoom.allUsers, userInfo],
      },
    })),

  // setGameState: (gameState: Store["gameState"]) =>
  //   set((state: Store) => ({
  //     ...state,
  //     gameState,
  //   })),

  updateSelectedLetters: (updateSelectedLetters: string[]) =>
    set((state: Store) => ({
      ...state,
      gameState: {
        ...state.gameState,
        selectedState: updateSelectedLetters,
      },
    })),
}));

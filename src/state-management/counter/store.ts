import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  rest: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  rest: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;

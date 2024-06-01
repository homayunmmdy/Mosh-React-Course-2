import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
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

if(process.env.NODE_ENV === "dev")
   mountStoreDevtool('Counter Store' , useCounterStore)

export default useCounterStore;

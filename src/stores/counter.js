import create from "zustand"

export const useCounter = create((set) => ({
    counter: 0,
    decreaseCounter: () =>
        set((state) =>
            state.counter ? { counter: state.counter - 1 } : { counter: 0 }
        ),
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    resetCounter: () => set({ counter: 0 }),
}))

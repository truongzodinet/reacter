import React from "react"
import { useCounter } from "~/stores/counter"

const Counter = () => {
    const counter = useCounter((state) => state.counter)
    const decreaseCounter = useCounter((state) => state.decreaseCounter)
    const increaseCounter = useCounter((state) => state.increaseCounter)

    return (
        <section className="flex justify-center items-center gap-12 font-semibold">
            <button
                className={`w-10 h-10 rounded-full shadow-md bg-green-50 ${
                    counter ? "" : "cursor-not-allowed opacity-50"
                }`}
                onClick={decreaseCounter}
            >
                -
            </button>
            <p>Your love: {counter}</p>
            <button
                className="w-10 h-10 rounded-full shadow-md bg-green-50"
                onClick={increaseCounter}
            >
                +
            </button>
        </section>
    )
}

export default Counter

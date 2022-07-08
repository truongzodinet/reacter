import React from "react"
import { useCounter } from "~/stores/counter"

const Counter = () => {

    const counter = useCounter((state) => state.counter)
    const decreaseCounter = useCounter((state) => state.decreaseCounter)
    const increaseCounter = useCounter((state) => state.increaseCounter)

    return (
        <section>
            <button onClick={decreaseCounter}>Down</button>
            <p>{counter}</p>
            <button onClick={increaseCounter}>Up</button>
        </section>
    )
}

export default Counter

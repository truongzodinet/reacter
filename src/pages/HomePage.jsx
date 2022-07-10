import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "/logo.svg"

const HomePage = () => {
    let navigate = useNavigate()

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            navigate(`../${name}`, { replace: true })
        }
    }
    return (
        <section>
            <header className="flex flex-col justify-center">
                <img src={logo} className="max-w-20 max-h-20" alt="logo" />
                <h1>Reacter</h1>
                <q className="italic text-gray-500">The special template for React</q>
            </header>
            <form>
                <input
                    type="text"
                    placeholder="What's your name?"
                    className="py-1 px-4"
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleSubmit} className="bg-teal-700 hover:bg-teal-800 text-gray-200 py-1 px-4">
                    GO
                </button>
                <p>{name}</p>
            </form>
        </section>
    )
}

export default HomePage

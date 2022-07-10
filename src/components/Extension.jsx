import React from "react"
import { Link } from "react-router-dom"

const Extension = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/">Dark/Light mode</Link>
            <Link to="/">Language</Link>
            <Link to="/">About</Link>
            <Link to="/about">Github</Link>
        </nav>
    )
}

export default Extension

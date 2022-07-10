import React from "react"
import { Routes, Route } from "react-router-dom"
import HomeLayout from "~/layouts/HomeLayout"
import DefaultLayout from "~/layouts/DefaultLayout"

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/" element={<HomeLayout />} />
                    <Route path="*" element={<DefaultLayout />} />
                </Routes>
            </main>
        </div>
    )
}

export default App

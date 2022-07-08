import Counter from "~/components/Counter"
import { Routes, Route } from "react-router-dom";
import Home from "~/pages/Home"
import About from "~/pages/About"

// import logo from "/logo.svg"

function App() {
    return (
        <div className="App">
            <header>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>Reacter</h1>
                <p>The special template for React</p>
            </header>
            <main>
                <Counter />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </main>
        </div>
    )
}

export default App

import Counter from "~/components/Counter"

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
            </main>
        </div>
    )
}

export default App

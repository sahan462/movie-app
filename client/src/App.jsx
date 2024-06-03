import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <div className="text-center">
            <header className="bg-blue-500 text-white p-4">
                <h1 className="text-3xl">Welcome to My React App</h1>
            </header>
            <main className="p-4">
                <p className="text-lg">This is a sample React application using Tailwind CSS.</p>
            </main>
        </div>
    );
}

export default App

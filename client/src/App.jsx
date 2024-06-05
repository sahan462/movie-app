import './App.css'
import api from './api/axiosConfig.js'
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";

import Layout from './components/layout.jsx'
import Home from './components/home/home.jsx'

function App() {
    const [count, setCount] = useState(0)
    const[movies, setMovies] = useState([]);

    const getMovies = async () => {

        try{
            const response = await api.get("api/v1/movies")
            setMovies(response.data)
        }catch (err){
            console.log(err)
        }

    }

    useEffect(()=>{
        getMovies();
    }, [])

    return (
        <div className="App p-4">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies = {movies}/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App

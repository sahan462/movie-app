import React from 'react';
import Hero from '../hero/hero.jsx'
const Home = ({movies}) => {
    return (
        <div>
            <Hero movies = {movies}></Hero>
            Welcome!!!!
        </div>
    );
}

export default Home;

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper } from "@mui/material";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Hero = ({ movies }) => {
    return (
        <div className="movie-carousel-container h-screen border-2 border-black">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    movies.map((movie, index) => (
                        <Paper key={index} className="h-full">
                            <div className="movie-card-container h-full w-full p-2">
                                <div className="movie-card h-full flex flex-col items-center">
                                    <div className="movie-poster w-full h-48">
                                        <img src={movie.poster} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="movie-title mt-2">
                                        <h4 className="text-center">{movie.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Hero;

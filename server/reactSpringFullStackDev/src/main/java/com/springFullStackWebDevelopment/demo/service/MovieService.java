package com.springFullStackWebDevelopment.demo.service;

import com.springFullStackWebDevelopment.demo.model.Movie;
import com.springFullStackWebDevelopment.demo.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Movie createNewMovie(String imdbId, String title, String releaseDate, String trailerLink, String poster, List<String> genres, List<String> backdrops) {
        Movie movie = new Movie();
        movie.setImdbId(imdbId);
        movie.setTitle(title);
        movie.setReleaseDate(releaseDate);
        movie.setTrailerLink(trailerLink);
        movie.setPoster(poster);
        movie.setGenres(genres);
        movie.setBackdrops(backdrops);
        return movieRepository.save(movie);
    }


    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }
    public Optional<Movie> getSingleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }





}

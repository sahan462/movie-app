package com.springFullStackWebDevelopment.demo.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springFullStackWebDevelopment.demo.model.Movie;
import com.springFullStackWebDevelopment.demo.model.Review;
import com.springFullStackWebDevelopment.demo.service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping("/newMovie")
    public ResponseEntity<Movie> newMovie(@RequestBody Map<String, Object> payload) {
        ObjectMapper mapper = new ObjectMapper();
        List<String> genres = mapper.convertValue(payload.get("genres"), new TypeReference<List<String>>() {});
        List<String> backdrops = mapper.convertValue(payload.get("backdrops"), new TypeReference<List<String>>() {});

        return new ResponseEntity<Movie>(movieService.createNewMovie(
                payload.get("imdbId").toString(),
                payload.get("title").toString(),
                payload.get("releaseDate").toString(),
                payload.get("trailerLink").toString(),
                payload.get("poster").toString(),
                genres,
                backdrops
        ), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Movie>> allMovies(){
        return new ResponseEntity<List<Movie>>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> singleMovie(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.getSingleMovie(imdbId), HttpStatus.OK);
    }
}
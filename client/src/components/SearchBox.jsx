import React, { Component } from "react";
import axios from "axios";
import { Button, Container, TextField } from "@material-ui/core";
import MovieResults from "./MovieResults";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      results: [],
    };
  }
  handleChangeInputTitle = async (e) => {
    e.preventDefault();
    this.setState({ movie: e.target.value });
  };

  // Movie search

  handleSearchMovieSubmit = async (e) => {
    const movie = encodeURIComponent(`${this.state.movie}`);
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=7a5e08206be3323eb3abdd03cd7b1d8c&language=en-US&query=${movie}&page=1&include_adult=false`
    );
    const results = await res.data;
    console.log(results);
    this.setState({ results });
  };

  // Input in the search bar
  render() {
    return (
      <Container>
        <h1>This</h1>
        <h1>Movie</h1>
        <h1>Changed Me</h1>
        <TextField
          id='outlined-search'
          label='Search field'
          type='search'
          variant='outlined'
          onChange={this.handleChangeInputTitle}
        />
        <Button onClick={this.handleSearchMovieSubmit}>Search</Button>
        <MovieResults results={this.state.results} />
      </Container>
    );
  }
}

export default SearchBox;

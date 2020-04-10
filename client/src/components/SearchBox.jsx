import React, { Component } from "react";
import axios from "axios";
import { Box, Button, Container, TextField } from "@material-ui/core";
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
      <Container style={{ display: "flex" }}>
        <Box
          p={5}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            height: "100vh",
          }}
        >
          <h1>This Movie Changed Me </h1>
          <TextField
            id='outlined-search'
            label='Search field'
            type='search'
            variant='outlined'
            onChange={this.handleChangeInputTitle}
          />
          <Button onClick={this.handleSearchMovieSubmit}>Search</Button>
        </Box>
        <MovieResults results={this.state.results} />
      </Container>
    );
  }
}

export default SearchBox;

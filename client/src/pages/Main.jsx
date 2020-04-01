import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Container,
  GridList,
  GridListTile,
  TextField
} from "@material-ui/core";
import { Dropdown } from "../components";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      result: []
    };
  }

  // Input in the search bar

  handleChangeInputTitle = async e => {
    e.preventDefault();
    this.setState({ movie: e.target.value });
  };

  // Movie search

  handleSearchMovieSubmit = async e => {
    const movie = encodeURIComponent(`${this.state.movie}`);
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=7a5e08206be3323eb3abdd03cd7b1d8c&language=en-US&query=${movie}&page=1&include_adult=false`
    );
    const result = await res.data;
    console.log(result);
    this.setState({ result });
  };

  render() {
    const resultsArray = this.state.result.results || [];

    // Mapping through list of search results and making grid of movie images

    let movieResults = resultsArray.map(function(movie) {
      const srcLink = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
      return (
        <GridListTile key={movie.id}>
          <img alt={movie.title} src={srcLink} />
        </GridListTile>
      );
    });

    return (
      <Container>
        <h1>This</h1>
        <Dropdown />
        <h1>Changed Me</h1>
        <TextField
          id='outlined-search'
          label='Search field'
          type='search'
          variant='outlined'
          onChange={this.handleChangeInputTitle}
        />
        <Button onClick={this.handleSearchMovieSubmit}>Search</Button>
        <GridList cellHeight={160}>
          {!resultsArray ? (
            <>
              <div> No results</div>
            </>
          ) : (
            <> {movieResults} </>
          )}
        </GridList>
      </Container>
    );
  }
}

export default Main;

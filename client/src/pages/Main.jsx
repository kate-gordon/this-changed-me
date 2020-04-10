import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  TextField,
} from "@material-ui/core";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import { Dropdown } from "../components";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movie: "",
      results: [],
    };
  }

  // Input in the search bar

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

  render() {
    const resultsArray = this.state.results.results || [];

    // Filtered by results that have an image to display

    const filteredResults = resultsArray.filter(function (result) {
      return result.backdrop_path != null;
    });

    // Mapping through list of search results and making grid of movie images

    let movieResults = filteredResults.map(function (movie) {
      const srcLink = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
      return (
        <GridListTile key={movie.id}>
          <img alt={movie.title} src={srcLink} />
          <GridListTileBar
            title={movie.title}
            titlePosition='top'
            actionIcon={
              <IconButton aria-label={`add ${movie.title}`}>
                <LibraryAddIcon color='action' />
              </IconButton>
            }
            actionPosition='left'
          />
        </GridListTile>
      );
    });

    return (
      <>
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
          {!resultsArray ? (
            <>
              <div> No results</div>
            </>
          ) : (
            <GridList cellHeight={350} cols={3} spacing={1}>
              {movieResults}
            </GridList>
          )}
        </Container>
      </>
    );
  }
}

export default Main;

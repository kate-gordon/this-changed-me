import React, { Component } from "react";
import api from "../api";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      columns: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllMovies().then(movies => {
      this.setState({
        movies: movies.data.data,
        isLoading: false
      });
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    // console.log("TCL: MoviesList -> render -> movies", movies);

    return (
      <Wrapper>
        {movies.map(movie => {
          return <p key={movie._id}>{movie.name}</p>;
        })}
      </Wrapper>
    );
  }
}

export default MoviesList;

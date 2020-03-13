import React, { Component } from "react";
import api from "../api";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1"
})``;

const Wrapper = styled.div.attrs({
  className: "form-group"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

class MoviesInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      result: ""
    };
  }

  handleChangeInputTitle = async e => {
    e.preventDefault();
    this.setState({ movie: e.target.value });
  };

  handleSearchMovieSubmit = async e => {
    const movie = encodeURIComponent(`${this.state.movie}`);
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=7a5e08206be3323eb3abdd03cd7b1d8c&language=en-US&query=${movie}&page=1&include_adult=false`
    );
    const result = await res.data;
    this.setState({ result });
  };

  //   await api.insertMovie(payload).then(res => {
  //     window.alert(`Movie inserted successfully`);
  //     this.setState({
  //       name: "",
  //       rating: "",
  //       time: ""
  //     });
  //   });
  // };

  render() {
    const { title } = this.state;
    return (
      <Wrapper>
        <Title>Search Movies</Title>
        <Label>Title: </Label>
        <InputText
          type='text'
          value={title}
          onChange={this.handleChangeInputTitle}
        />
        <Button onClick={this.handleSearchMovieSubmit}>Search Movies</Button>
      </Wrapper>
    );
  }
}

export default MoviesInsert;

import React, { Component } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: ""
    };
  }

  render() {
    const handleChange = e => {
      this.setState({ media: e.target.value });
    };

    return (
      <>
        <FormControl style={{ minWidth: "200px" }} className='Dropdown'>
          <Select value={this.state.media} onChange={handleChange}>
            <MenuItem value='Movie'>Movie</MenuItem>
            <MenuItem value='Podcast'>Podcast</MenuItem>
            <MenuItem value='Lyric'>Lyric</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  }
}

export default Dropdown;

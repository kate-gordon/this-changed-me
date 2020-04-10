import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

const MovieResults = (props) => {
  const resultsArray = props.results.results || [];

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
      {!resultsArray ? (
        <>
          <div> No results</div>
        </>
      ) : (
        <GridList cellHeight={350} cols={3} spacing={1}>
          {movieResults}
        </GridList>
      )}
    </>
  );
};

export default MovieResults;

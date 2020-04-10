import React from "react";
import { Container } from "@material-ui/core";
import { SearchBox, Navbar } from "./components";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <SearchBox />
      </Container>
    </>
  );
}

export default App;

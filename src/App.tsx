import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Titillium Web', sans-serif;
    line-height: 1.4;
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 700;
  }

  h1 {
    font-size: clamp(2.5rem, 1.25rem + 2vw, 5rem);
  }

  h2 {
    font-size: clamp(2rem, 1rem + 2vw, 4rem);
  }

  h3 {
    font-size: clamp(1.5rem, 0.75rem + 2vw, 3rem);
  }

  h4 {
    font-size: clamp(1rem, 0.5rem + 2vw, 2rem);
  }

  h5 {
    font-size: clamp(0.75rem, 0.375rem + 2vw, 1.5rem);
  }

  h6 {
    font-size: clamp(0.625rem, 0.312rem + 2vw, 1.25rem);
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <h1>Dima</h1>
      <h2>Dima</h2>
      <h3>Dima</h3>
      <h4>Dima</h4>
      <h5>Dima</h5>
      <h6>Dima</h6>
    </div>
  );
}

export default App;

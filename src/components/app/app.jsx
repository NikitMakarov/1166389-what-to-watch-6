import React from "react";
import MainPage from "../main/render-main-page";

const App = () => {
  return (
    <MainPage
      films={[`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`]}
      title={`The Grand Budapest Hotel`}
      genre={`Comedy`}
      date={2012}
    />
  );
};

export default App;

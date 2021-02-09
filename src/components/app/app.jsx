import React from "react";
import MainPage from "../main/render-main-page";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FilmFullInfo from "../film/film-card";
import MyList from "../list/my-list";
import AddReview from "../review/add-review";
import Player from "../player/player";
import SignIn from "../signin/login";
import PageError from "../error/error-404";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            films={[`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`]}
            title={`The Grand Budapest Hotel`}
            genre={`Comedy`}
            date={2012}
          />
        </Route>
        <Route exact path="/films/:id">
          <FilmFullInfo />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route>
          <PageError />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

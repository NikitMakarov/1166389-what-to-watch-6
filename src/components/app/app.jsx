import React from "react";
import MainPage from "../main/render-main-page";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FilmFullInfo from "../film/film-card";
import MyList from "../list/my-list";
import AddReview from "../review/add-review";
import Player from "../player/player";
import SignIn from "../signin/login";
import PageError from "../error/error-404";

const App = (props) => {
  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            films = {films}
          />
        </Route>
        <Route exact path="/films/:id" exact
          render={(filmProps) => (
            <FilmFullInfo films={films} {...filmProps}/>
          )}
        />
        <Route exact path="/mylist">
          <MyList
          films = {films}
          />
        </Route>
        <Route path="/films/:id/review" exact
          render={(reviewProps) => (
            <AddReview films={films} {...reviewProps}/>
          )}
        />
        <Route exact path="/player/:id">
          <Player
          films = {films}
          />
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

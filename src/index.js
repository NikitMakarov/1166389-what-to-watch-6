import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import mockFilms from "./mocks/films";
// Store
import reducer from "./store/reducer";
import {createStore} from "redux";

import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App
    films = {mockFilms}
    />
  </Provider>,
  document.querySelector(`#root`)
);

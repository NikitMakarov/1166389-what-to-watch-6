import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {CHANGE_GENRE} from "../../store/action";
import genres from "./genres";

const GenreList = ({genre, changeGenre}) => {
  const handleClick = (value, event) => {
    event.preventDefault();
    changeGenre(value);
  };

  return (
    <Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((item) => (
          <li
            className={`catalog__genres-item ${genre === item.value && `catalog__genres-item--active`}`}
            key={`$key-genre-${item.title}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={handleClick.bind(undefined, item.value)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({genre: state.genre});
const mapDispatchToProps = (dispatch) => {
  return {
    changeGenre: (value) => dispatch({type: CHANGE_GENRE, payload: value}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

import React, {useState} from "react";
import FilmCard from "../card/render-film-card";
import PropTypes from "prop-types";
// redux
import {connect} from 'react-redux';

const MainFilmsCards = ({getFilteredFilms}) => {
  const [activeFilm, setActiveFilmId] = useState({id: null});

  const handleActiveFilmChange = (target) => {
    setActiveFilmId({...activeFilm, id: target.dataset.id});
  };

  const filteredFilms = getFilteredFilms();

  return (
    <div className="catalog__movies-list">
      {filteredFilms.map((film) => <FilmCard key={film.id} film={film} onActiveFilmChange={handleActiveFilmChange} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  getFilteredFilms: () => {
    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre);
    }

    return state.films;
  },
});

MainFilmsCards.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};


export default connect(mapStateToProps)(MainFilmsCards);

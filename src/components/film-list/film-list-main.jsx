import React, {useState} from 'react';
import FilmCard from "../card/render-film-card";
import PropTypes from "prop-types";

const MainFilmsCards = (props) => {
  const {films} = props;
  const [activeFilm, setActiveFilmId] = useState({id: null});

  const handleActiveFilmChange = (target) => {
    setActiveFilmId({...activeFilm, id: target.dataset.id});
  };

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <FilmCard key={film.id} film={film} onActiveFilmChange={handleActiveFilmChange} />)}
    </div>
  );
};

MainFilmsCards.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};


export default MainFilmsCards;

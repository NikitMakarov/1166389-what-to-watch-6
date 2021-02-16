import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FilmCard = (props) => {
  const {film} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={film.previewImage} alt={film.name} height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link">{film.name}</Link>
      </h3>
    </article>
  </React.Fragment>;
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;

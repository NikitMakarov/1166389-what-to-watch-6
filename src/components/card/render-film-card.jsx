import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const FilmCard = (props) => {
  const {film} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayer previewVideoLink={film.previewVideoLink} previewImage={film.previewImage}></VideoPlayer>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  </React.Fragment>;
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;

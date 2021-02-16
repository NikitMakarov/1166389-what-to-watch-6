import React, {Fragment, useState} from "react";

const AddReviewForm = () => {
  const [userReview, setReview] = React.useState("");
  const [userRating, setRating] = React.useState(3);

  const rating = new Array(10).fill().map((el, i) =>
    <Fragment key={`ratingStar-${i}`}>
      <input className="rating__input"
        id={`ratingStar-${i}`}
        type="radio" name="rating"
        value={i + 1}
        onClick={() => setRating(i + 1)}
      />
      <label className="rating__label" htmlFor={`ratingStar-${i}`}>Rating {i + 1} </label>
    </Fragment>
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {rating}
          </div>
        </div>

        <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(evt) => setReview(evt.target.value)}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;


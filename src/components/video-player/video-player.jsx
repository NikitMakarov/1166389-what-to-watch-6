import React, {useRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({previewImage, previewVideoLink}) => {
  const videoRef = useRef();
  let timer;

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    videoRef.current.src = previewVideoLink;
  };

  return (
      <video
        ref={videoRef}
        src={previewVideoLink}
        poster={previewImage}
        muted={true}
        width="280"
        height="175"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
  );
};

VideoPlayer.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default VideoPlayer;

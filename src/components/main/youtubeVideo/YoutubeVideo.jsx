import PropTypes from 'prop-types'
import './youtubeVideo.css'

export default function YoutubeVideo({videoId}) {
  return (
    <iframe
      width="560px"
      height="315px"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}

YoutubeVideo.propTypes = {
  videoId: PropTypes.string
}

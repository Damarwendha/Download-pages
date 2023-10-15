import PropTypes from 'prop-types'
import './youtubeVideo.css'

export default function YoutubeVideo({videoId}) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}&amp;controls=0`}
      title="YouTube video player"
      frameBorder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}

YoutubeVideo.propTypes = {
  videoId: PropTypes.string
}

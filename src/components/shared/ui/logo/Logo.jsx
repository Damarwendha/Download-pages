import PropTypes from "prop-types";

export default function Logo({href, img, alt, width = '45px', height='auto'}) {
  return (
    <a href={href}>
      <img src={img} alt={alt} style={{width: width, height: height}} loading="lazy"/>
    </a>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}
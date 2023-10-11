import PropTypes from 'prop-types'
import './button.css'

export default function Button({onClick, children}) {
  return (
    <button onClick={onClick} className="ask">
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
}
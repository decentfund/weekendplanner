import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button className="pure-button" {...props}>
    {props.children}
  </button>
);

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;

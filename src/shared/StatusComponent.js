import React from 'react';
import PropTypes from 'prop-types';
import Blockies from 'react-blockies';

const clipper = address => {
  const arr = address.split('');
  const first = arr.slice(0, 4).join('');
  const last = arr.slice(arr.length - 4).join('');
  return `${first}...${last}`;
};

const StatusComponent = props => (
  <div>
    <Blockies {...props} />
    <div>{clipper(props.address)}</div>
    <div>{props.vote}</div>
    <div>{props.owner}</div>
  </div>
);

StatusComponent.defaultProps = {
  address: null,
  vote: null,
  owner: true,
};

StatusComponent.propTypes = {
  address: PropTypes.string,
  vote: PropTypes.string,
  owner: PropTypes.string,
};

export default StatusComponent;

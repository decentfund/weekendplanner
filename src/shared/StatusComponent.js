import React from 'react';
import PropTypes from 'prop-types';
import Blockies from 'react-blockies';
import validAddress from '../util/validAddress';

export const clipper = address => {
  if (!validAddress(address)) return 'Invalid address';
=======
const clipper = address => {
>>>>>>> 56c8365... refactored
  const arr = address.split('');
  const first = arr.slice(0, 4).join('');
  const last = arr.slice(arr.length - 4).join('');
  return `${first}...${last}`;
};

<<<<<<< HEAD
const StatusComponent = props => (
  <div>
    <Blockies {...props} />
    <div>{clipper(props.address)}</div>
    <div>{props.vote}</div>
    <div>{props.owner}</div>
  </div>
);
=======
>>>>>>> 56c8365... refactored

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

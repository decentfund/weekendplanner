import React from 'react';
import PropTypes from 'prop-types';
import Blockies from 'react-blockies';
// import { connect } from 'react-redux';

import validAddress from '../util/validAddress';

export const clipper = (address) => {
  if (!validAddress(address)) return 'Invalid address';
=======
const clipper = address => {
>>>>>>> 56c8365... refactored
  const arr = address.split('');
  const first = arr.slice(0, 4).join('');
  const last = arr.slice(arr.length - 4).join('');
  return `${first}...${last}`;
};

// const { seed, size, scale, color } = props;
// const { seed, ...otherProps } = props;

const StatusComponent = ({
  seed,
  size,
  scale,
  color,
  bgColor,
  spotColor,
  address,
  vote,
  owner,
}) => (
  <div>
    <Blockies
      seed={seed}
      size={size}
      scale={scale}
      color={color}
      bgColor={bgColor}
      spotColor={spotColor}
    />
    <div>{clipper(address)}</div>
    <div>{vote}</div>
    {owner ? <div>It&apos;s you</div> : null}
  </div>
);
=======
>>>>>>> 56c8365... refactored

StatusComponent.defaultProps = {
  vote: null,
  owner: true,
  seed: 'weekendplanner',
  size: 10,
  scale: 3,
  color: '#dfe',
  bgColor: '#ffe',
  spotColor: '#abc',
};

StatusComponent.propTypes = {
  address: PropTypes.string.isRequired,
  vote: PropTypes.string,
  owner: PropTypes.string,
  seed: PropTypes.string,
  size: PropTypes.number,
  scale: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  spotColor: PropTypes.string,
};

export const mapStateToProps = (state, ownProps) => ({
  owner: state.accounts[0] === ownProps.address,
  // vote:
});

export { StatusComponent };
// import { StatusComponent }
// export default connect(mapStateToProps)(StatusComponent)

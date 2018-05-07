import React from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '../../shared/TextField';
import Button from '../../shared/Button';
import { addAttendeeRequest, removeAttendeeRequest } from '../new';

export const NewEventAttendees = ({
  accounts,
  currentUserAddress,
  onRemoveClick,
  onAddClick,
}) => (
  <div className="pure-g-1-1">
    {Object.keys(accounts).map(account => (
      <div>
        <TextField disabled={account === currentUserAddress} value={account} />
        {account !== currentUserAddress ? (
          <button onClick={() => onRemoveClick(account)}>Remove</button>
        ) : null}
      </div>
    ))}
    <Button onClick={onAddClick}>Add more</Button>
  </div>
);

NewEventAttendees.propTypes = {
  accounts: PropTypes.object.isRequired, // eslint-disable-line
  currentUserAddress: PropTypes.string,
  onRemoveClick: PropTypes.func,
  onAddClick: PropTypes.func,
};

NewEventAttendees.defaultProps = {
  currentUserAddress: null,
  onRemoveClick: () => {},
  onAddClick: () => {},
};

const mapStateToProps = state => ({
  accounts: state.new.accounts,
});

export default connect(mapStateToProps, {
  onAddClick: dispatch => dispatch(addAttendeeRequest(uuidv4())),
  onRemoveClick: removeAttendeeRequest,
})(NewEventAttendees);

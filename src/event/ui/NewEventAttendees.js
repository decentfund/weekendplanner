import React from 'react';
import uuidv4 from 'uuid/v4';
import pick from 'lodash/pick';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '../../shared/TextField';
import Button from '../../shared/Button';
import {
  addAttendeeRequest,
  removeAttendeeRequest,
  changeAttendeeAddress,
} from '../new';

export const NewEventAttendees = ({
  accounts,
  currentUserAddress,
  onRemoveClick,
  onAddClick,
  onChangeAddress,
}) => (
  <div className="pure-g-1-1">
    {Object.keys(accounts).map(account => (
      <div key={account}>
        <TextField
          disabled={accounts[account].address === currentUserAddress}
          value={accounts[account].address}
          onChange={e =>
            onChangeAddress({ id: account, value: e.target.value })
          }
        />
        {accounts[account].address !== currentUserAddress ? (
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
  onChangeAddress: PropTypes.func,
};

NewEventAttendees.defaultProps = {
  currentUserAddress: null,
  onRemoveClick: () => {},
  onAddClick: () => {},
  onChangeAddress: () => {},
};

export const mapStateToProps = state => ({
  accounts: pick(state.new.attendees, state.new.attendeesIDs),
});

export const mapDispatchToProps = dispatch => ({
  onAddClick: () => dispatch(addAttendeeRequest(uuidv4())),
  // dispatch(addAttendeeRequest(uuidv4())),
  onRemoveClick: id => dispatch(removeAttendeeRequest(id)),
  onChangeAddress: props => dispatch(changeAttendeeAddress(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventAttendees);

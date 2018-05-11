import React from 'react';
import { shallow } from 'enzyme';
import { NewEventAttendees, mapStateToProps } from './NewEventAttendees';
import TextField from '../../shared/TextField';
import Button from '../../shared/Button';

const currentUserAddress = '0xabcde';
const newAttendeeAddress = '0xaaaaaa';
const onlyDefaultAttendee = {
  default: {
    address: currentUserAddress,
  },
};

const allAttendees = {
  ...onlyDefaultAttendee,
  '0xaaaaaa': {
    address: newAttendeeAddress,
  },
};

const setupComponent = props => (
  <NewEventAttendees
    accounts={onlyDefaultAttendee}
    currentUserAddress="0xabcde"
    {...props}
  />
);

it('renders NewEventAttendees properly for current user', () => {
  const component = shallow(setupComponent());
  expect(component).toMatchSnapshot();
});

it('renders NewEventAttendees properly for several accounts', () => {
  const component = shallow(
    setupComponent({
      accounts: allAttendees,
    }),
  );
  expect(component).toMatchSnapshot();
});

it('sets proper props for TextField for current user account', () => {
  const component = shallow(
    setupComponent({
      accounts: allAttendees,
    }),
  );

  const currentUserTextField = component.find(TextField).at(0);
  expect(currentUserTextField.prop('disabled')).toBe(true);
  expect(currentUserTextField.prop('value')).toBe(currentUserAddress);
});

it('sets proper props for TextField for new attendee address', () => {
  const onChange = jest.fn();
  const onRemoveClick = jest.fn();
  const component = shallow(
    setupComponent({
      accounts: allAttendees,
      onChangeAddress: onChange,
      onRemoveClick,
    }),
  );

  const currentUserTextField = component.find(TextField).at(1);
  expect(currentUserTextField.prop('disabled')).toBe(false);
  expect(currentUserTextField.prop('value')).toBe(newAttendeeAddress);
  expect(component.contains('Remove')).toBe(true);

  // Handles textfield onChange properly
  const newValue = '123';
  currentUserTextField.simulate('change', { target: { value: newValue } });
  expect(onChange).toBeCalledWith({ id: newAttendeeAddress, value: newValue });

  // Handles remove button click properly
  const removeButtonNewAttendeeAccount = component.find('button').first();
  removeButtonNewAttendeeAccount.simulate('click');
  expect(onRemoveClick).toBeCalledWith(newAttendeeAddress);
});

it('handles onAddClick properly', () => {
  const onAddClick = jest.fn();
  const component = shallow(setupComponent({ onAddClick }));
  const addButton = component.find(Button).first();
  addButton.simulate('click');

  expect(onAddClick).toHaveBeenCalled();
});

// mapStateToProps
it('handles mapStateToProps properly', () => {
  const state = {
    new: {
      attendees: allAttendees,
      attendeesIDs: ['default', newAttendeeAddress],
    },
  };

  expect(mapStateToProps(state)).toEqual({ accounts: allAttendees });
});

// TODO: mapDispatchToProps

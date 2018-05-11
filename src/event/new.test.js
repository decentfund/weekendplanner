import state, {
  defaultState,
  addAttendeeRequest,
  removeAttendeeRequest,
  changeAttendeeAddress,
} from './new';

it('sets default state properly', () => {
  const initialState = state();
  expect(initialState).toEqual({
    attendees: { default: { address: '' } },
    attendeesIDs: ['default'],
  });
});
it('adds new attendee', () => {
  const initialState = state();
  const result = state(initialState, addAttendeeRequest('112233'));
  expect(result).toEqual({
    attendees: { default: { address: '' }, 112233: { address: '' } },
    attendeesIDs: ['default', '112233'],
  });
});
it('removes attendee', () => {
  const initialState = state();

  // adding new attendee
  const addedAttendeeState = state(initialState, addAttendeeRequest('112233'));
  expect(addedAttendeeState).toEqual({
    attendees: { default: { address: '' }, 112233: { address: '' } },
    attendeesIDs: ['default', '112233'],
  });

  // removing attendee
  const removedAttendeeState = state(
    initialState,
    removeAttendeeRequest('112233'),
  );
  expect(removedAttendeeState).toEqual({
    attendees: { default: { address: '' } },
    attendeesIDs: ['default'],
  });
});
it('handles address change', () => {
  const attendeeId = '0001-0002-0003';
  const initialState = state({
    ...defaultState,
    attendees: {
      ...defaultState.attendees,
      [`${attendeeId}`]: '0x3333',
    },
    attendeesIDs: [...defaultState.attendeesIDs, attendeeId],
  });

  // changing attendee address
  const changedAddressState = state(
    initialState,
    changeAttendeeAddress({ id: attendeeId, value: '0x33331' }),
  );

  expect(changedAddressState).toEqual({
    attendees: {
      default: { address: '' },
      [`${attendeeId}`]: { address: '0x33331' },
    },
    attendeesIDs: ['default', attendeeId],
  });
});

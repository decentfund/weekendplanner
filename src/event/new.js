import omit from 'lodash/omit';

const ADD_ATTENDEE_REQUEST = 'event/new/ADD_ATTENDEE_REQUEST';
const REMOVE_ATTENDEE_REQUEST = 'event/new/REMOVE_ATTENDEE_REQUEST';
const CHANGE_ATTENDEE_ADDRESS = 'event/new/CHANGE_ATTENDEE_ADDRESS';

export const defaultState = {
  attendees: {
    default: {
      address: '',
    },
  },
  attendeesIDs: ['default'],
};

function getNewAttendee() {
  return {
    address: '',
  };
}

function attendees(state = defaultState.attendees, action = {}) {
  switch (action.type) {
    case ADD_ATTENDEE_REQUEST:
      return { ...state, [`${action.id}`]: getNewAttendee() };
    case CHANGE_ATTENDEE_ADDRESS:
      return {
        ...state,
        [`${action.id}`]: { address: action.address },
      };
    case REMOVE_ATTENDEE_REQUEST:
      return omit(state, action.id);
    default:
      return state;
  }
}

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_ATTENDEE_REQUEST:
      return {
        ...state,
        attendeesIDs: [...state.attendeesIDs, action.id],
        attendees: attendees(state.attendees, action),
      };
    case REMOVE_ATTENDEE_REQUEST:
      return {
        ...state,
        attendeesIDs: state.attendeesIDs.filter(id => id !== action.id),
        attendees: attendees(state.attendees, action),
      };
    case CHANGE_ATTENDEE_ADDRESS:
      return {
        ...state,
        attendees: attendees(state.attendees, action),
      };
    default:
      return state;
  }
}

// Action Creators
export function addAttendeeRequest(id) {
  return {
    type: ADD_ATTENDEE_REQUEST,
    id,
  };
}

export function removeAttendeeRequest(id) {
  return {
    type: REMOVE_ATTENDEE_REQUEST,
    id,
  };
}

export function changeAttendeeAddress({ id, value }) {
  return {
    type: CHANGE_ATTENDEE_ADDRESS,
    id,
    address: value,
  };
}

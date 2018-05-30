import { defaultState, getUserOptionVote } from './event';

const state = {
  attendees: {
    default: {
      address: '',
    },
  },
  movies: {
    23155: {
      id: '23155',
      votes: ['17690', '8999', '11007'],
    },
  },
  votes: {
    17690: {
      status: 'yes',
      amount: 50,
      attendee: 'default',
    },
    8999: {
      status: 'no',
      amount: 10,
      attendee: '0x111111',
    },
  },
  attendeesIDs: ['default', '0x111111'],
};

it('returns correct status with existring option and user id', () => {
  expect(getUserOptionVote(state, 'default', '23155')).toEqual({
    status: 'yes',
    amount: 50,
    attendee: 'default',
  });
});

it('returns undefined status with wrong user id', () => {
  expect(getUserOptionVote(state, 'default1', '23155')).toEqual({
    status: undefined,
    attendee: 'default1',
  });
});

it('returns undefined status with wrong option id', () => {
  expect(getUserOptionVote(state, 'default', '31545')).toEqual({
    status: undefined,
    attendee: 'default',
  });
});

it('returns undefined status with undefined option id', () => {
  expect(getUserOptionVote(state, 'default', undefined)).toEqual({
    status: undefined,
    attendee: 'default',
  });
});

it('returns undefined status with wrong user and option ids', () => {
  expect(getUserOptionVote(state, 'default1', '31545')).toEqual({
    status: undefined,
    attendee: 'default1',
  });
});

it('returns undefined status with default empty state', () => {
  expect(getUserOptionVote(defaultState, 'default1', '31545')).toEqual({
    status: undefined,
    attendee: 'default1',
  });
});

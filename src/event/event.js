import pick from 'lodash/pick';
import values from 'lodash/values';

export const defaultState = {
  attendees: {},
  movies: {},
  votes: {},
  attendeesIDs: [],
};

const undefinedStatus = userId => ({
  status: undefined,
  attendee: userId,
});

export const getUserOptionVote = (state = defaultState, userId, optionId) => {
  const option = state.movies[optionId];
  if (!option) return undefinedStatus(userId);
  const optionVotesId = option.votes;
  const optionVotes = pick(state.votes, optionVotesId); // = state.votes
  return values(optionVotes).find(el => el.attendee === userId) || undefinedStatus(userId);
};

import { CREATE_MARKER, UPDATE_MARKER, DELETE_MARKER } from '../actions/markers';

const marker = (state, action) => {
  switch (action.type) {
    case CREATE_MARKER:
      return {
        id: action.id,
        latLng: action.latLng
      };
    case UPDATE_MARKER:
      return {
        ...state,
        text: action.text
      };
    default:
      return state
  }
};

const deleteMany = (state, ids) => {
  state = {...state};
  ids.forEach(id => delete state[id]);
  return state;
};

export default (state = {}, action) => {
  const {id} = action;
  if (typeof id === 'undefined') {
    return state;
  }

  if (action.type === DELETE_MARKER) {
    return deleteMany(state, [id]);
  }

  return {
    ...state,
    [id]: marker(state[id], action)
  };
};

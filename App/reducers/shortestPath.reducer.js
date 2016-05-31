import * as ActionType from '../config/action.types';

export default function(state = [], action) {
  switch (action.type) {
    case ActionType.CHANGE_SHORTEST_PATH:
      return [...action.path];
      break;
    default:
      return state;
  }
}

import * as ActionType from '../config/action.types';

export default function(state = [], action) {
  switch (action.type) {
    case ActionType.CHANGE_FORM_DATA:
      return [...action.mazeData];
      break;
    default:
      return state;
  }
}

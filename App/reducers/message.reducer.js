import * as ActionType from '../config/action.types';

export default function(state = {}, action) {
  switch (action.type) {
    case ActionType.CHANGE_MESSAGE:
      return Object.assign({},state,{
        type : action.messageType,
        text : action.text
      });
      break;
    default:
      return state;
  }
}

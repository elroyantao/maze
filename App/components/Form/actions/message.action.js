import * as ActionType from '../../../config/action.types';


export function changeMessage(data){
  return {
    type : ActionType.CHANGE_MESSAGE,
    messageType : data.messageType,
    text : data.text
  };
}

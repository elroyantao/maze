import * as ActionType from '../../../config/action.types';


export function changeFormData(data){
  return {
    type : ActionType.CHANGE_FORM_DATA,
    mazeData : data.mazeData,
    start : data.start,
    end : data.end
  };
}

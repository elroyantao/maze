import * as ActionType from '../../../config/action.types';


export function changePath(path){
  return {
    type : ActionType.CHANGE_SHORTEST_PATH,
    path,
  };
}

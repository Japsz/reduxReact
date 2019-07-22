import {ADD_ELEMENT_LIST, DEL_ELEMENT_LIST, MOD_ELEMENT_LIST} from "./const";

export const addElementAction = todo => dispatch => dispatch({type: ADD_ELEMENT_LIST, payload: todo});
export const delElementAction = idxToDel => dispatch => dispatch({type: DEL_ELEMENT_LIST, payload: idxToDel});
export const modElementAction = objToMod => dispatch => dispatch({type: MOD_ELEMENT_LIST, payload: objToMod});
import {ADD_TAG_LIST, DEL_TAG_LIST} from "./const";

export const addTag = columnInfo => dispatch => dispatch({type: ADD_TAG_LIST, payload: columnInfo});
export const delTag = columnInfo => dispatch => dispatch({type: DEL_TAG_LIST, payload: columnInfo});

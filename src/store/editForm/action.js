import {SET_EDIT_MODAL} from "./const";

export const setEditModal = columnInfo => dispatch => dispatch({type: SET_EDIT_MODAL, payload: columnInfo});

import {initialState} from "./initialState";
import {SET_EDIT_MODAL} from "./const";

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_EDIT_MODAL:
      return {
        ...state,
        columnName: action.payload.name,
        columnValue: action.payload.value,
        arrayId: action.payload.id
      }
    default:
      return {...state}
  }
}
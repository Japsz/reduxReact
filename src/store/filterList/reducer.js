import {initialState} from "./initialState";
import {ADD_TAG_LIST, DEL_TAG_LIST} from "./const";

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TAG_LIST:
      return {
        ...state,
        tagList: state.tagList.concat([action.payload]),
        isFiltered: false
      }
    case DEL_TAG_LIST:
      return {
        ...state,
        tagList: state.tagList.filter((item, idx) => (idx !== parseInt(action.payload))),
        isFiltered: false
      }
    default:
      return {...state}
  }
}
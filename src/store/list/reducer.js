import {initialState} from "./initialState";
import {ADD_ELEMENT_LIST, DEL_ELEMENT_LIST, MOD_ELEMENT_LIST} from "./const";

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT_LIST:
      return {
        ...state,
        elemntList: state.elemntList.concat([action.payload])
      }
    case DEL_ELEMENT_LIST:
      return {
        ...state,
        elemntList: state.elemntList.filter((item, idx) => (idx !== parseInt(action.payload)))
      }
    case MOD_ELEMENT_LIST:
      return {
        ...state,
        elemntList: state.elemntList.map((item,idx) => idx === parseInt(action.payload.arrayId) ? {...item,[action.payload.name]: action.payload.value} : item)
      }
    default:
      return {...state}
  }
}
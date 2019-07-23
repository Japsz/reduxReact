import {combineReducers} from 'redux';
import elementList from './list/reducer';
import editModal from './editForm/reducer';
import tagList from './filterList/reducer';

export default combineReducers({
  elementList,
  editModal,
  tagList
})
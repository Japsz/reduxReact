import {combineReducers} from 'redux';
import elementList from './list/reducer';
import editModal from './editForm/reducer';

export default combineReducers({
  elementList,
  editModal
})
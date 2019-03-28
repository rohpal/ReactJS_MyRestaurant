import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    menu: menuReducer,
    firestore: firestoreReducer
});
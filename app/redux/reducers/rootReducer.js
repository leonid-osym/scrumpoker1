import {combineReducers} from 'redux';
import CardRotateReducer from './cardsRotateReducer';

export default combineReducers({
    rotate: CardRotateReducer
});
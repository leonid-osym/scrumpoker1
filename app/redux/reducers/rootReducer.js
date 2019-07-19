import {combineReducers} from 'redux';
import SettingsReducer from './settingsReducer';

export default combineReducers({
    settings: SettingsReducer
});
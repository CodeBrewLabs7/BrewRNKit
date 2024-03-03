import { combineReducers,Action } from 'redux';
import types from '../types';
import auth, { AuthState } from "./auth";
import settings, { SettingsState } from './settings'

export interface RootState {
    auth: AuthState; 
    settings: SettingsState; // Update with the type of settings state
}
const appReducer = combineReducers({
    auth,
    settings
});
const rootReducer = (state:  RootState | undefined, action: Action<any>) => {

  
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;
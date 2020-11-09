import {combineReducers} from 'redux';
import positionsReducer from './positions/positionsReducer';
import usersReducer from "./users/usersReducer";



const rootReducer = combineReducers({
    users: usersReducer,
    positions: positionsReducer

})

export default rootReducer;

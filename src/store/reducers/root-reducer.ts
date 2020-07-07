import { combineReducers } from 'redux';
import objectsReducer from './objects-reducer/objects-reducer';

const rootReducer = () => combineReducers({ objects: objectsReducer });

export default rootReducer;

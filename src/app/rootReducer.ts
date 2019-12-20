import { combineReducers } from 'redux';
import poemsReducer from 'features/poems/poemsSlice';

const rootReducer = combineReducers({
  poems: poemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

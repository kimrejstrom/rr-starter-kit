import { combineReducers } from 'redux';
import poemsReducer from 'features/poems/poemsSlice';
import jokesReducer from 'features/jokes/jokesSlice';
import themeReducer from 'features/theme/themeSlice';

const rootReducer = combineReducers({
  poems: poemsReducer,
  jokes: jokesReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

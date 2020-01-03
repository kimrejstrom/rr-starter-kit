import { combineReducers } from 'redux';
import jokesReducer from 'features/jokes/jokesSlice';
import themeReducer from 'features/theme/themeSlice';

const rootReducer = combineReducers({
  jokes: jokesReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

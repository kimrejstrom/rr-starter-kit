import { combineReducers } from 'redux';
import poemsReducer from 'features/poems/poemsSlice';
import themeReducer from 'features/theme/themeSlice';

const rootReducer = combineReducers({
  poems: poemsReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';
import { Joke, getRandomJokes, Jokes } from 'api/jokesApi';

interface JokesState {
  jokes: Joke[];
  isLoading: boolean;
  error: string | null;
}

const jokesInitialState: JokesState = {
  jokes: [],
  isLoading: false,
  error: null,
};

function startLoading(state: JokesState) {
  state.isLoading = true;
}

function loadingFailed(state: JokesState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const jokesSlice = createSlice({
  name: 'jokes',
  initialState: jokesInitialState,
  reducers: {
    getJokesStart: startLoading,
    getJokesSuccess(state, { payload }: PayloadAction<Jokes>) {
      const { jokes } = payload;
      state.jokes = jokes;
      state.isLoading = false;
      state.error = null;
    },
    getJokesFailure: loadingFailed,
  },
});

export const {
  getJokesStart,
  getJokesSuccess,
  getJokesFailure,
} = jokesSlice.actions;

export default jokesSlice.reducer;

export const fetchJokes = (): AppThunk => async dispatch => {
  try {
    dispatch(getJokesStart());
    const randomJokes = await getRandomJokes();
    dispatch(getJokesSuccess(randomJokes));
  } catch (err) {
    dispatch(getJokesFailure(err.toString()));
  }
};

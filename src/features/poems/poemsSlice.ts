import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Poem,
  getPoemsByAuthor,
  getRandomAuthor,
  PoemsResult,
} from 'api/poemAPI';
import { AppThunk } from 'app/store';

interface PoemsState {
  poems: Poem[];
  isLoading: boolean;
  error: string | null;
}

const poemsInitialState: PoemsState = {
  poems: [],
  isLoading: false,
  error: null,
};

function startLoading(state: PoemsState) {
  state.isLoading = true;
}

function loadingFailed(state: PoemsState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const poemsSlice = createSlice({
  name: 'poems',
  initialState: poemsInitialState,
  reducers: {
    getPoemsStart: startLoading,
    getPoemsSuccess(state, { payload }: PayloadAction<PoemsResult>) {
      const { poems } = payload;
      state.poems = poems;
      state.isLoading = false;
      state.error = null;
    },
    getPoemsFailure: loadingFailed,
  },
});

export const {
  getPoemsStart,
  getPoemsSuccess,
  getPoemsFailure,
} = poemsSlice.actions;

export default poemsSlice.reducer;

export const fetchPoems = (): AppThunk => async dispatch => {
  try {
    dispatch(getPoemsStart());
    const randomAuthor = await getRandomAuthor();
    const poemsByRandomAuthor = await getPoemsByAuthor(randomAuthor);
    dispatch(getPoemsSuccess(poemsByRandomAuthor));
  } catch (err) {
    dispatch(getPoemsFailure(err.toString()));
  }
};

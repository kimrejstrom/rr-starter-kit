import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/rootReducer';
import { fetchPoems } from 'features/poems/poemsSlice';
import { PoemsList } from 'features/poems/PoemsList';
import Button from 'components/Button/Button';

export const PoemsListPage = () => {
  const dispatch = useDispatch();

  // Use React hooks useState to toggle display setting
  enum DISPLAY_TYPES {
    SINGLE = 'SINGLE',
    ALL = 'ALL',
  }
  const [display, setDisplay] = useState(DISPLAY_TYPES.SINGLE);

  // Handle change of input (toggle display setting)
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setDisplay(e.target.value as DISPLAY_TYPES);
  }

  // Get poems from Redux
  const { poems, isLoading, error: poemsError } = useSelector(
    (state: RootState) => state.poems,
  );

  // Handle errors
  if (poemsError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{poemsError.toString()}</div>
      </div>
    );
  }

  // Handle loading
  let renderedList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <PoemsList
      poems={display === DISPLAY_TYPES.ALL ? poems : poems.slice(0, 1)}
    />
  );

  // Render
  return (
    <div id="poems-list-page">
      <label>
        Show:
        <select value={display} onChange={handleChange}>
          <option value={DISPLAY_TYPES.ALL}>All</option>
          <option value={DISPLAY_TYPES.SINGLE}>One</option>
        </select>
      </label>
      {renderedList}
      <Button
        title={poems.length ? 'Get Another' : 'Get Poem'}
        onClick={() => dispatch(fetchPoems())}
      />
    </div>
  );
};

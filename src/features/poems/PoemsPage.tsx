import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/rootReducer';
import { fetchPoems } from 'features/poems/poemsSlice';
import { PoemsList } from 'features/poems/PoemsList';
import Button from 'components/Button/Button';

// interface OwnProps {
//   org: string;
//   repo: string;
//   page: number;ff
//   setJumpToPage: (page: number) => void;
//   showIssueComments: (issueId: number) => void;
// }

export const PoemsListPage = () => {
  const dispatch = useDispatch();

  const { poems, isLoading, error: poemsError } = useSelector(
    (state: RootState) => state.poems,
  );

  if (poemsError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{poemsError.toString()}</div>
      </div>
    );
  }

  let renderedList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <PoemsList poems={poems} />
  );

  return (
    <div id="poems-list-page">
      <Button
        title={poems.length ? 'Get Another' : 'Get Poem'}
        onClick={_ => dispatch(fetchPoems())}
      />

      {renderedList}
    </div>
  );
};

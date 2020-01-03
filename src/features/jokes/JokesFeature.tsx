import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/rootReducer';
import { fetchJokes } from 'features/jokes/jokesSlice';
import { JokesList } from 'features/jokes/JokesList';
import Button from 'components/Button/Button';
import { Alert } from 'components/Alert/Alert';

export const JokesListPage = () => {
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

  // Get jokes from Redux
  const { jokes, isLoading, error: jokesError } = useSelector(
    (state: RootState) => state.jokes,
  );

  // Handle errors
  if (jokesError) {
    return (
      <div className="m-auto w-2/3 mb-6">
        <Alert title={'Something went wrong'} body={jokesError.toString()} />
      </div>
    );
  }

  // Handle loading
  let renderedList = isLoading ? (
    <div className="mx-auto my-6 spinner"></div>
  ) : (
    <>
      {jokes.length ? (
        <div className="m-auto flex flex-col w-2/3">
          <div className="m-4 mr-0 flex self-end inline-block relative">
            <select
              value={display}
              onChange={handleChange}
              className="block appearance-none w-full bg-white dark:bg-gray-800 dark:text-gray-100 border border-indigo-200 dark:border-indigo-800 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value={DISPLAY_TYPES.ALL}>All</option>
              <option value={DISPLAY_TYPES.SINGLE}>One</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        undefined
      )}
      <JokesList
        jokes={display === DISPLAY_TYPES.ALL ? jokes : jokes.slice(0, 1)}
      />
    </>
  );

  // Render
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center">
        <Button
          title={jokes.length ? 'Get Another' : 'Get Joke'}
          onClick={() => dispatch(fetchJokes())}
          className="flex bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        />
      </div>
      {renderedList}
    </div>
  );
};

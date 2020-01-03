import React from 'react';
import { Joke } from 'api/jokesApi';

interface Props {
  jokes: Joke[];
}

export const JokesList = ({ jokes }: Props) => {
  const renderedJokes = jokes.map((joke, index) => (
    <li key={index}>
      <div className="m-auto w-2/3 mb-6">
        <div className="border-r border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-b p-4 flex flex-col justify-between leading-normal rounded">
          <div className="mb-8">
            {index === 0 ? (
              <p className="text-sm text-gray-600 dark:text-gray-500 flex items-center">
                Joke of the day
              </p>
            ) : (
              undefined
            )}
            <div className="capitalize text-gray-900 dark:text-gray-400 font-bold text-xl mb-2">
              {joke.type}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base italic">
              <span key={index}>{`– "${joke.setup}"`}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base italic">
              <span key={index}>{`– "${joke.punchline}"`}</span>
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 dark:text-gray-400 leading-none">
                Unknown Author
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return <ul>{renderedJokes}</ul>;
};

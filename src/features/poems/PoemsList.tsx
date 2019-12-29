import React from 'react';
import { Poem } from 'api/poemAPI';

interface Props {
  poems: Poem[];
}

export const PoemsList = ({ poems }: Props) => {
  const renderedPoems = poems.map((poem, index) => (
    <li key={index}>
      <div className="m-auto w-2/3 mb-6">
        <div className="border-r border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-b p-4 flex flex-col justify-between leading-normal rounded">
          <div className="mb-8">
            {index === 0 ? (
              <p className="text-sm text-gray-600 dark:text-gray-500 flex items-center">
                Poem of the day
              </p>
            ) : (
              undefined
            )}
            <div className="text-gray-900 dark:text-gray-400 font-bold text-xl mb-2">
              {poem.title}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base italic">
              {poem.lines
                .slice(0, 5)
                .filter(line => line)
                .map(line => (
                  <span>
                    {`– "${line}"`}
                    <br />
                  </span>
                ))}
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 dark:text-gray-400 leading-none">
                {poem.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return <ul>{renderedPoems}</ul>;
};

import React from 'react';
import { Poem } from 'api/poemAPI';

interface Props {
  poems: Poem[];
}

export const PoemsList = ({ poems }: Props) => {
  const renderedPoems = poems.map((poem, index) => (
    <li key={index}>
      <div className="m-auto w-3/4 lg:w-1/2 mb-6">
        <div className="border-r border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal rounded">
          <div className="mb-8">
            {index === 0 ? (
              <p className="text-sm text-gray-600 flex items-center">
                Poem of the day
              </p>
            ) : (
              undefined
            )}
            <div className="text-gray-900 font-bold text-xl mb-2">
              {poem.title}
            </div>
            <p className="text-gray-700 text-base italic">
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
              <p className="text-gray-900 leading-none">{poem.author}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  return <ul>{renderedPoems}</ul>;
};

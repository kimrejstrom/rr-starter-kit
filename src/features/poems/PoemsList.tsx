import React from 'react';
import { Poem } from 'api/poemAPI';

interface Props {
  poems: Poem[];
}

export const PoemsList = ({ poems }: Props) => {
  const renderedPoems = poems.map((poem, index) => (
    <li key={index}>
      <h3>{poem.title}</h3>
      <p>{poem.lines[0]}</p>
      <h4>{`– ${poem.author}`}</h4>
    </li>
  ));

  return <ul>{renderedPoems}</ul>;
};

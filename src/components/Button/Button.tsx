import React from 'react';

interface IButton {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButton> = ({ title, onClick }) => (
  <button onClick={e => onClick(e)}>{title}</button>
);

export default Button;

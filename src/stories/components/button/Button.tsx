import React from 'react';
import { STATE } from '../../constants/propsType';
import './button.scss';

interface ButtonProps {
  state: STATE;

  label: string;

  onClick?: () => void;
}

export const Button = ({ state, label }: ButtonProps) => {
  return (
    <button type="button" className={['button', `button--${state}`].join(' ')}>
      {label}
    </button>
  );
};

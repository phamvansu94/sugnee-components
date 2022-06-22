import React from 'react';
import './iconButton.scss';
import add from '../../assets/add.svg';
import call from '../../assets/call.svg';
import before from '../../assets/before.svg';
import close from '../../assets/close.svg';
import next from '../../assets/next.svg';
import edit from '../../assets/edit.svg';
import { ICON, SIZE, STATE } from '../../constants/propsType';

interface IconButtonProps {
  state: STATE;

  size: SIZE;

  icon: ICON;

  onClick?: () => void;
}

export const IconButton = ({ state, size, icon }: IconButtonProps) => {
  const icons = {
    close: close,
    add: add,
    call: call,
    edit: edit,
    before: before,
    next: next,
  };

  return (
    <button type="button" className={['icon-button', `icon-button--${state}`, `icon-button--${size}`].join(' ')}>
      <img src={icons[icon]} className={`img-${size}`} />
    </button>
  );
};

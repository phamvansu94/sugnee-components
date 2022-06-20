import React from 'react';
import './buttonIcon.scss';

interface ButtonIconProps {
  /**
   * Button state
   */
  state?: 'enabled' | 'hovere' | 'pressed' | 'disabled';
  /**
   * Button size
   */
  size?: 'large' | 'small';
  /**
   * Button contents
   */
  icon: 'closse' | 'add' | 'call' | 'edit' | 'before' | 'next';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonIcon = ({ state, size, icon }: ButtonIconProps) => {
  return (
    <button type="button" className={['button-icon', `button-icon--${state}`, `button-icon--${size}`].join(' ')}>
      <i className={['fa', `fa-${icon}`].join(' ')}></i>
    </button>
  );
};

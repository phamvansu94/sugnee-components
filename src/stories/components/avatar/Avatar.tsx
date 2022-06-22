import React from 'react';
import './avatar.scss';
import avatar_01 from '../../assets/avatar_01.svg';
import avatar_02 from '../../assets/avatar_02.svg';
import avatar_03 from '../../assets/avatar_03.svg';
import avatar_04 from '../../assets/avatar_04.svg';
import avatar_05 from '../../assets/avatar_05.svg';
import avatar_06 from '../../assets/avatar_06.svg';
import avatar_07 from '../../assets/avatar_07.svg';
import avatar_08 from '../../assets/avatar_08.svg';
import avatar_09 from '../../assets/avatar_09.svg';
import avatar_10 from '../../assets/avatar_10.svg';
import { IMAGE, SIZE, STATE } from '../../constants/propsType';

interface AvatarProps {
  state: STATE;

  size: SIZE;

  image: IMAGE;
}

const images = {
  avatar_01: avatar_01,
  avatar_02: avatar_02,
  avatar_03: avatar_03,
  avatar_04: avatar_04,
  avatar_05: avatar_05,
  avatar_06: avatar_06,
  avatar_07: avatar_07,
  avatar_08: avatar_08,
  avatar_09: avatar_09,
  avatar_10: avatar_10,
};

export const Avatar = ({ state, size, image }: AvatarProps) => {
  return <img src={images[image]} className={[`avatar--${state}`, `avatar--${size}`].join(' ')} />;
};

import React from 'react';
import { Image } from '@chakra-ui/react';

export interface Iprops {
  src: string;
  minH: any;
  minW: any;
}
const HomePageCardImage = (props: Iprops) => {
  const { src, minW, minH } = props;
  return <Image src={src} minW={minW} minH={minH} />;
};
export default HomePageCardImage;

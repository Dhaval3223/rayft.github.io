import React from 'react';
import { Image } from '@chakra-ui/react';

export interface Iprops {
  src: string;
}
const HomePageCardImage = (props: Iprops) => {
  const { src } = props;
  return <Image src={src} minW={['24em', '200px']} maxH="200px" />;
};
export default HomePageCardImage;

import React from 'react';
import { Button } from '@chakra-ui/react';

export interface Iprops {
  label?: string;
  //colorScheme?:string,
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
}
const ProfileButton = (props: Iprops) => {
  return (
    <Button variant={props.variant} mx="1" borderRadius="full">
      {props.label}
    </Button>
  );
};

export default ProfileButton;

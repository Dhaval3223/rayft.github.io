import React from 'react';
import {Text} from '@chakra-ui/react';

export interface Iprops
{
    label?:string,
    //size?:string,
    //fontWeight:'xs'|'sm'|'md'|'lg'|'xl'|'2xl',
    //as:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    color?:string
}
const ProfileTitle = (props:Iprops) =>
{
    return(
        <Text color={props.color}>{props.label}</Text>
    )
}

export default ProfileTitle;
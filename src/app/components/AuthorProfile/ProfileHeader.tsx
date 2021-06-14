import React from 'react';
import {Heading} from '@chakra-ui/react';

export interface Iprops
{
    label?:string,
    size?:'xs'|'sm'|'md'|'lg'|'xl'|'2xl',
    //fontWeight:'xs'|'sm'|'md'|'lg'|'xl'|'2xl',
    as:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
}
const ProfileHeader = (props:Iprops) =>
{
    return(
        <Heading as={props.as} size={props.size}>{props.label}</Heading>
    )
}

export default ProfileHeader;
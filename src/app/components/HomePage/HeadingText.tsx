import React from 'react';
import {Heading} from '@chakra-ui/react';

export interface Iprops{
    label:string,
    as:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    size:'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'
}
const HeadingText = (props:Iprops) =>
{
    const {label,as,size} = props;
    return <Heading as={as} _after={ {content: `" here is a personalized feed for you…"`}} size={size}>{label}</Heading>
}
export default HeadingText;
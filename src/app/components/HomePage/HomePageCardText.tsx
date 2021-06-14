import React from 'react';
import {Text} from '@chakra-ui/react';

export interface Iprops{
    label:string,
    fontWeight:string
}
const HomePageCardText = (props:Iprops) =>
{
    const {label,fontWeight} = props;
    return <Text fontWeight={fontWeight} opacity="60%">{label}</Text>
}
export default HomePageCardText;
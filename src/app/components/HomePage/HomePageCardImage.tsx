import React from 'react';
import {Image} from '@chakra-ui/react';

export interface Iprops{
    minW:string,
    minH:string,
    src:string
}
const HomePageCardImage = (props:Iprops) =>
{
    const {src,minW,minH} = props;
    return <Image minH={minH} minW={minW} src={src}/>
}
export default HomePageCardImage;
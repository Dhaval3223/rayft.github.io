import React , {useState} from 'react';
import {IconButton} from '@chakra-ui/react';
import {FaRegBookmark} from 'react-icons/fa';

export interface Iprops
{
    id:string,
}
const HomePageCardBookmark = (props:Iprops) =>
{
    const [bookmark,setBookmark] = useState([]);
    const handleClicked = event =>
    {
        //setBookmark();
        event.preventDefault();
        console.log(event.target.id);
    }
    return(
        <IconButton
        aria-label={'Bookmark Button'}
        variant={'ghost'}
        _hover={{ bg: 'transparent' }}
        icon={<FaRegBookmark id={props.id}/>}
        size={'lg'}
        color={'white'}
        position={'absolute'}
        right={'2%'}
        top={'10%'}
        zIndex={2}
        transform={'translateX(-50%) translateY(-50%)'}
        id={props.id}
        onClick={handleClicked}
        border="none"
        />
    )
}
export default HomePageCardBookmark;
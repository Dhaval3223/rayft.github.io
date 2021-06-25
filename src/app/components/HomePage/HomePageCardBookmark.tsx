import React , {useState} from 'react';
import {IconButton} from '@chakra-ui/react';
import {FaRegBookmark,FaBookmark} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../types';
import {
    initialState,
    useBookmarkSlice,
  } from './slice/index';

export interface Iprops
{
    id:string
}
const HomePageCardBookmark = (props:Iprops) =>
{
    const { bookmarks } = useSelector(
        (state: RootState) => state?.bookmark || initialState,
      );
    const { actions } = useBookmarkSlice();
    const dispatch = useDispatch();
    const [bookmark,setBookmark] = useState<boolean>(false);
    const handleClicked = event =>
    {
        event.preventDefault()
        console.log(event.target.id);
        setBookmark(bookmark ? false : true);
        console.log(bookmark);
        // console.log(bookmark);
        dispatch(actions.bookmark(event.target.id));
    }
    return(
        <IconButton
            aria-label={'Bookmark Button'}
            variant={'ghost'}
            _hover={{ bg: 'transparent' }}
            icon={ bookmark ? <FaBookmark id={props.id}/> : <FaRegBookmark id={props.id}/>}
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
            >
                </IconButton>
    )
}
export default HomePageCardBookmark;

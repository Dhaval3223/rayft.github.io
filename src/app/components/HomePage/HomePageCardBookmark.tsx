import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {FaRegBookmark} from 'react-icons/fa';

const HomePageCardBookmark = () =>
{
    return(
        <IconButton
              aria-label={'Bookmark Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<FaRegBookmark/>}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              right={'2%'}
              top={'10%'}
              zIndex={2}
              transform={'translateX(-50%) translateY(-50%)'}
            />
    )
}
export default HomePageCardBookmark;
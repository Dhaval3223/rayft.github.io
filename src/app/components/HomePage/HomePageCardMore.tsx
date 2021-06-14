import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {BsThreeDotsVertical} from 'react-icons/bs';

const HomePageCardMore = () =>
{
    return(
        <IconButton
              aria-label={'More Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<BsThreeDotsVertical/>}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              right={'-4%'}
              top={'10%'}
              zIndex={1}
              transform={'translateX(-50%) translateY(-50%)'}
            />
    )
}
export default HomePageCardMore;
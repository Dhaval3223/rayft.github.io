import React from 'react';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Icon,
  DrawerCloseButton,
  WrapItem,
  Wrap,
  Flex,
  Avatar,
  Link,
} from '@chakra-ui/react';

import {
  MdMenu,
  MdHome,
  MdExplore,
  MdAccountBalanceWallet,
  MdBookmark,
} from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { IoMdLogOut } from 'react-icons/io';
import { HiOutlineDocumentReport, HiOutlinePencilAlt } from 'react-icons/hi';

import { IconWithText } from '../IconWithText/index';
import { MainLogo } from '../Logo/index';

export interface Props {}

export function BurgerMenu(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = React.useState("left")

  return (
    <Box>
      <Icon as={MdMenu} color="#fff" w="24px" h="24px" onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent background="#183380" color="rgba(255, 255, 255, 0.87)">
          <DrawerCloseButton />
          <DrawerHeader bg="#122661" h="56px">
            <MainLogo />
          </DrawerHeader>
          <DrawerBody>
            <Box
              h="78px"
              w="260px"
              borderBottom="1px solid rgba(255, 255, 255, 0.1)"
            >
              <Wrap>
                <WrapItem>
                  <Avatar
                    m="12px"
                    name="Dhaval Mulashiya"
                    src="https://bit.ly/tioluwani-kolawole"
                  />
                </WrapItem>
              </Wrap>
            </Box>
            <Box h="40px" mt="15px">
              <Link>Explore More</Link>
            </Box>
            <Link>
              <IconWithText name={'home'} iconName={MdHome} />
            </Link>
            <Link>
              <IconWithText name={'Explore'} iconName={MdExplore} />
            </Link>
            <Link>
              <IconWithText name={'Wallet'} iconName={MdAccountBalanceWallet} />
            </Link>
            <Link>
              <IconWithText name={'Bookmarks'} iconName={MdBookmark} />
            </Link>
            <Link>
              <IconWithText
                name={'Start Writing'}
                iconName={HiOutlinePencilAlt}
              />
            </Link>
            <Link>
              <IconWithText name={'Analysis'} iconName={IoAnalyticsSharp} />
            </Link>
            <Link>
              <IconWithText
                name={'Reports'}
                iconName={HiOutlineDocumentReport}
              />
            </Link>
            <Link>
              <Flex mt="13px">
                <Icon
                  as={IoMdLogOut}
                  h="28px"
                  w="28px"
                  color="rgba(255, 255, 255, 0.87)"
                />
                <Box
                  h="40px"
                  w="100%"
                  ml="12px"
                  color="rgba(255, 255, 255, 0.87)"
                >
                  Log out
                </Box>
              </Flex>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

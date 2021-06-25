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
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

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
              <Flex>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      m="12px"
                      name="Dhaval Mulashiya"
                      src="https://bit.ly/tioluwani-kolawole"
                    />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>
            <Box h="40px" mt="15px">
              <NavLink to="/profile">Explore More</NavLink>
            </Box>
            <NavLink
              to="/homepage"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText name={'home'} iconName={MdHome} />
            </NavLink>
            <NavLink
              to="/explore"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText name={'Explore'} iconName={MdExplore} />
            </NavLink>
            <NavLink
              to="/All_Transactions"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText name={'Wallet'} iconName={MdAccountBalanceWallet} />
            </NavLink>
            <NavLink
              to="/bookmark"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText name={'Bookmarks'} iconName={MdBookmark} />
            </NavLink>
            <NavLink
              to="/writing"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText
                name={'Start Writing'}
                iconName={HiOutlinePencilAlt}
              />
            </NavLink>
            <NavLink
              to="/analysis"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText name={'Analysis'} iconName={IoAnalyticsSharp} />
            </NavLink>
            <NavLink
              to="/reports"
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <IconWithText
                name={'Reports'}
                iconName={HiOutlineDocumentReport}
              />
            </NavLink>
            <NavLink
              to=""
              activeStyle={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
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
            </NavLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Icon, Text, Flex, Center, Link } from '@chakra-ui/react';
import {
  MdExplore,
  MdBookmark,
  MdAccountBalanceWallet,
  MdNotifications,
} from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';

export interface Props {}

export function IconsPanel(props: Props) {
  return (
    <Box bg="#183380" w="490px" p="10px" color="white">
      <Flex>
        <Link
          to="/ExplorePage"
          color="white"
        >
          <Center>
            <Icon as={MdExplore} w="24px" h="24px" />
            <Text ml="6px" fontSize="12px" opacity="0.55" as="b">
              Explore
            </Text>
          </Center>
        </Link>
        <NavLink
        to=""
          activeStyle={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Center ml="22px">
            <Icon as={MdBookmark} w="24px" h="24px" />
            <Text ml="6px" fontSize="13px" opacity="0.55" as="b">
              Bookmarks
            </Text>
          </Center>
        </NavLink>
        <NavLink
          to=""
          activeStyle={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Center ml="22px">
            <Icon as={HiOutlinePencilAlt} w="24px" h="24px" />
            <Text ml="6px" fontSize="13px" opacity="0.55" as="b">
              Start Writing
            </Text>
          </Center>
        </NavLink>
        <NavLink
          to=""
          activeStyle={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Center ml="22px">
            <Icon as={MdAccountBalanceWallet} w="24px" h="24px" />
          </Center>
        </NavLink>
        <NavLink
          to="/loginpage"
          activeStyle={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Center ml="22px">
            <Icon as={MdNotifications} w="24px" h="24px" />
          </Center>
        </NavLink>
        <NavLink
          to="/login"
          activeStyle={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <Center ml="22px">
            <Icon as={FaUserCircle} w="24px" h="24px" />
          </Center>
        </NavLink>
      </Flex>
    </Box>
  );
}

import * as React from 'react';
import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export interface Props {}

export function Inputsearch(props: Props) {
  return (
    <FormControl>
      <Box bg="#fff" width="420px" height="24px">
        <InputGroup>
          <Input
            width="420px"
            height="24px"
            borderRadius="2px"
            pr="4.5rem"
            p="1rem"
            bg="#fff"
            type="search"
            placeholder="Search article, authoer, stocks, topics..."
          />
          <InputRightElement width="24px" height="15px" p="1rem">
            <SearchIcon
              opacity="0.5"
              width="16px"
              height="16px"
              cursor="pointer"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </FormControl>
  );
}

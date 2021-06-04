/**
 *
 * PageButton
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Button, VStack, StackDivider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  label: string;
  color: any;
  fontcolor: any;
}

export function PageButton(props: Props) {
  const { label, color, fontcolor } = props;
  return (
    <Div>
      <VStack divider={<StackDivider />} spacing={2} align="stretch">
        <Button
          bg={color}
          p="1.2em"
          color={fontcolor}
          borderRadius="22.5px"
          minW="10em"
          fontWeight="700"
          mt="1.5em"
          _hover={{ background: { color } }}
          fontSize="1.3em"
          letterSpacing="1px"
        >
          {label}
        </Button>
      </VStack>
    </Div>
  );
}

const Div = styled.div``;

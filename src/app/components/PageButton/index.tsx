/**
 *
 * PageButton
 *
 */
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import styled from 'styled-components/macro';
import { Button, VStack, StackDivider, Link } from '@chakra-ui/react';

interface Props {
  label: string;
  color: any;
  fontcolor: any;
  size: any;
  to: string;
}

export function PageButton(props: Props) {
  const { push } = useHistory();
  const { label, color, fontcolor, size, to } = props;
  return (
    <Div>
      <VStack divider={<StackDivider />} spacing={2} align="stretch">
        <Button
          bg={color}
          p="1.5em"
          color={fontcolor}
          borderRadius="22.5px"
          minW={size}
          fontWeight="700"
          _hover={{ background: { color } }}
          fontSize="1em"
          letterSpacing="1px"
          onClick={() => push(to)}
        >
          {label}
        </Button>
      </VStack>
    </Div>
  );
}

const Div = styled.div``;

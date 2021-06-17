/**
 *
 * Title
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Heading } from '@chakra-ui/react';

interface Props {
  title: string;
}

export const Title = memo((props: Props) => {
  const { title } = props;
  return (
    <Div>
      <Heading mb="0.5em" textAlign="center" mt="1em" color="#242a41">
        {title}
      </Heading>
    </Div>
  );
});

const Div = styled.div``;

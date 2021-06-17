/**
 *
 * InputFiled
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Input, FormControl, Text } from '@chakra-ui/react';

interface Props {
  label: string;
  text: string;
}

export const InputFiled = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { label, text } = props;

  return (
    <Div>
      {t('')}

      <Text
        fontSize="xs"
        color="gray.300"
        mt="1em"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        {label}{' '}
      </Text>
      <Input variant="flushed" type={text} size="lg" fontWeight="bold" />
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;

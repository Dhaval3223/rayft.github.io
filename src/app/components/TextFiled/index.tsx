/**
 *
 * TextFiled
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Text } from '@chakra-ui/react';

interface Props {
  label: string;
}

export const TextFiled = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { label } = props;

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Text
        fontSize="xs"
        color="gray.300"
        mt="1em"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        {label}{' '}
      </Text>
    </Div>
  );
});

const Div = styled.div``;

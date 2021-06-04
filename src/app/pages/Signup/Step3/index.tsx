/**
 *
 * Step3
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Stack, Text, Box } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';
import { TextFiled } from '../../../components/TextFiled/index';

interface Props {}

export const Step3 = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div style={{ overflowX: 'hidden' }}>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div className="row justify-content-center ">
        <div className="col-12 m-3 ">
          <Title title="Your experience…" />
        </div>
        <div className="col-sm-5 col-md-6 col-lg-6 col-xl-4  m-3 ">
          <Box
            boxShadow={{
              sm: '0 2px 5px 0 rgba(0, 0, 0, 0.2);',
            }}
            borderRadius="4px"
          >
            <Stack
              spacing={4}
              padding={{ sm: '1em', md: '3em' }}
              backgroundColor="whiteAlpha.900"
            >
              <TextFiled label="Work experience" />
              <Text color="#242a41" fontSize="1.2em" fontWeight="600">
                Manager at IBM
              </Text>
              <Stack borderBottom="1px solid" opacity="0.06" />
              <Text color="#242a41" fontSize="1.2em" fontWeight="600">
                Market analyst in Bloomberg
              </Text>
              <Stack borderBottom="1px solid" opacity="0.06" />

              <button
                type="button"
                className="btn btn-lg w-50 text-left pl-0"
                style={{ color: 'rgba(0, 0, 0, 0.2)' }}
              >
                {' '}
                <b> + Add more</b>
              </button>
              <TextFiled label="Your education" />
              <Text color="#242a41" fontSize="1.2em" fontWeight="600">
                MBA form california university
              </Text>
              <Stack borderBottom="1px solid" opacity="0.06" />
              <Text color="#242a41" fontSize="1.2em" fontWeight="600">
                BBA from UGCA college
              </Text>
              <Stack borderBottom="1px solid" opacity="0.06" />
              <button
                type="button"
                className="btn btn-lg w-50 text-left pl-0"
                style={{ color: 'rgba(0, 0, 0, 0.2)' }}
                onClick={() => {
                  alert('hello');
                }}
              >
                {' '}
                <b> + Add more</b>
              </button>

              <PageButton label="Next" color="#20cdbb" fontcolor="white" />
            </Stack>
          </Box>
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;

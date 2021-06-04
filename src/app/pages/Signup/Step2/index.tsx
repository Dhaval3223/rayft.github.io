/**
 *
 * Step2
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Stack, Image, Box, Link, Input } from '@chakra-ui/react';
import { PageButton } from '../../../components/PageButton/index';
import { Title } from '../../../components/Title/index';
import upload from '../../../../../src/upload.png';

interface Props {}

export const Step2 = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      <div className="row justify-content-center ">
        <div className="col-12 m-3 ">
          <Title title="Tell us more about yourself" />
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
              justifyContent="center"
              alignItems="center"
            >
              <Input
                type="file"
                opacity="0"
                position="absolute"
                top="16em"
                w="8em"
                h="7em"
                borderRadius="50%"
              />

              <Image boxSize="120px" src={upload} alt="Segun Adebayo" />
              <PageButton label="Next" color="#20cdbb" fontcolor="white" />
            </Stack>
          </Box>

          <Stack m="1em 0em 0em 0em">
            <Link fontWeight="700">Skip this step</Link>
          </Stack>
        </div>
      </div>
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
});

const Div = styled.div``;

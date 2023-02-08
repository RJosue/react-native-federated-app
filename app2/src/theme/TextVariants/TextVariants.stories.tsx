import React from 'react';
import { storiesOf } from '@storybook/react-native';

import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import Headline from './Headline';

storiesOf('TextVariants', module)
  .add('Primary Color', () => (
    <>
      <Headline>This is the headline text</Headline>
      <H1>This is the H1 text</H1>
      <H2>This is the H2 text</H2>
      <H3>This is the H3 text</H3>
      <H4>This is the H4 text</H4>
      <H5>This is the H5 text</H5>
      <H6>This is the H6 text</H6>
    </>
  ))
  .add('Secondary color', () => (
    <>
      <Headline variant="secondary">This is the headline text</Headline>
      <H1 variant="secondary">This is the H1 text</H1>
      <H2 variant="secondary">This is the H2 text</H2>
      <H3 variant="secondary">This is the H3 text</H3>
      <H5 variant="secondary">This is the H5 text</H5>
      <H4 variant="secondary">This is the H4 text</H4>
      <H6 variant="secondary">This is the H6 text</H6>
    </>
  ));

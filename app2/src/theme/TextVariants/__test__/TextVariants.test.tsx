import React from 'react';
import { render } from '@testing-library/react-native';

import H1 from '../H1';
import H2 from '../H2';
import H3 from '../H3';
import H4 from '../H4';
import H5 from '../H5';
import H6 from '../H6';
import Headline from '../Headline';

it('correctly renders h1', () => {
  const { queryByText } = render(
    <>
      <H1>regular h1</H1>
      <H1 variant="secondary">secondary h1</H1>
      <H1 variant="link">link h1</H1>
    </>,
  );
  expect(queryByText('regular h1')).toBeTruthy();
  expect(queryByText('secondary h1')).toBeTruthy();
  expect(queryByText('link h1')).toBeTruthy();
});

it('correctly renders h2', () => {
  const { queryByText } = render(
    <>
      <H2>regular h2</H2>
      <H2 variant="secondary">secondary h2</H2>
      <H2 variant="link">link h2</H2>
    </>,
  );
  expect(queryByText('regular h2')).toBeTruthy();
  expect(queryByText('secondary h2')).toBeTruthy();
  expect(queryByText('link h2')).toBeTruthy();
});

it('correctly renders h3', () => {
  const { queryByText } = render(
    <>
      <H3>regular h3</H3>
      <H3 variant="secondary">secondary h3</H3>
      <H3 variant="link">link h3</H3>
    </>,
  );
  expect(queryByText('regular h3')).toBeTruthy();
  expect(queryByText('secondary h3')).toBeTruthy();
  expect(queryByText('link h3')).toBeTruthy();
});

it('correctly renders h4', () => {
  const { queryByText } = render(
    <>
      <H4>regular h4</H4>
      <H4 variant="secondary">secondary h4</H4>
      <H4 variant="link">link h4</H4>
    </>,
  );
  expect(queryByText('regular h4')).toBeTruthy();
  expect(queryByText('secondary h4')).toBeTruthy();
  expect(queryByText('link h4')).toBeTruthy();
});

it('correctly renders h5', () => {
  const { queryByText } = render(
    <>
      <H5>regular h5</H5>
      <H5 variant="secondary">secondary h5</H5>
      <H5 variant="link">link h5</H5>
    </>,
  );
  expect(queryByText('regular h5')).toBeTruthy();
  expect(queryByText('secondary h5')).toBeTruthy();
  expect(queryByText('link h5')).toBeTruthy();
});

it('correctly renders h6', () => {
  const { queryByText } = render(
    <>
      <H6>regular h6</H6>
      <H6 variant="secondary">secondary h6</H6>
      <H6 variant="link">link h6</H6>
    </>,
  );
  expect(queryByText('regular h6')).toBeTruthy();
  expect(queryByText('secondary h6')).toBeTruthy();
  expect(queryByText('link h6')).toBeTruthy();
});

it('correctly renders Headline', () => {
  const { queryByText } = render(
    <>
      <Headline>regular headline</Headline>
      <Headline variant="secondary">secondary headline</Headline>
      <Headline variant="link">link headline</Headline>
    </>,
  );
  expect(queryByText('regular headline')).toBeTruthy();
  expect(queryByText('secondary headline')).toBeTruthy();
  expect(queryByText('link headline')).toBeTruthy();
});

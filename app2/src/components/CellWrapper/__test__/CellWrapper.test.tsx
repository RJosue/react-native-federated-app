import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import { getContainerRoot } from '../../../__mocks__/helpers';

import CellWrapper from '../CellWrapper';

it('correctly renders with no props', () => {
  const { container } = render(<CellWrapper />);
  const root = getContainerRoot(container);
  expect(root.props.testID).toBeUndefined();
  expect(root.props.accessibilityLabel).toBeUndefined();
});

it('correctly renders with accessibilityLabel and testID', () => {
  const { container } = render(
    <CellWrapper testID="test-id" accessibilityLabel="label" />,
  );
  const root = getContainerRoot(container);
  expect(root.props.testID).toBe('test-id');
  expect(root.props.accessibilityLabel).toBe('label');
  expect(root.props.style.paddingBottom).toBe(10);
});

it('correctly renders with children', () => {
  const mockText = 'mock-text';
  const { queryByText } = render(
    <CellWrapper>
      <Text>{mockText}</Text>
    </CellWrapper>,
  );
  expect(queryByText(mockText)).toBeTruthy();
});

it('correctly applies custom padding bottom if defined as the final element', () => {
  const { container } = render(<CellWrapper isFinalElement />);
  const root = getContainerRoot(container);
  expect(root.props.style.paddingBottom).toBe(20);
});

it('correctly applies custom padding horizontal with no enablePaddingHorizontal prop', () => {
  const { container } = render(
    <CellWrapper
      testID="test-id"
      accessibilityLabel="label"
      enablePaddingHorizontal={false}
    />,
  );
  const root = getContainerRoot(container);
  expect(root.props.style.paddingHorizontal).toBe(0);
});

it('correctly applies custom padding horizontal with enablePaddingHorizontal prop', () => {
  const { container } = render(
    <CellWrapper
      testID="test-id"
      accessibilityLabel="label"
      enablePaddingHorizontal
    />,
  );
  const root = getContainerRoot(container);
  expect(root.props.style.paddingHorizontal).toBe(20);
});

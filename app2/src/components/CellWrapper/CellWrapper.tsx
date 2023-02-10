/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { View } from 'react-native';

interface Props {
  children?: React.ReactNode;
  isFinalElement?: boolean;
  enablePaddingHorizontal?: boolean;
}

const CellWrapper = ({
  children,
  isFinalElement = false,
  enablePaddingHorizontal = true,
}: Props): React.ReactElement => {
  const styles = useMemo(
    () => ({
      root: {
        paddingHorizontal: enablePaddingHorizontal ? 20 : 0,
        paddingVertical: 10,
      },
    }),
    [enablePaddingHorizontal],
  );

  return (
    <View
      style={{
        ...styles.root,
        paddingBottom: isFinalElement ? 20 : 10,
      }}>
      {children}
    </View>
  );
};

export default CellWrapper;

import React from 'react';
import { StyleSheet, Text } from 'react-native';

import TextVariantProps from './TextVariantProps';

// import fonts from '../fonts';
import getColorForVariant from './getColorForVariant';

const styles = StyleSheet.create({
  root: {
    // fontFamily: fonts.bold700,
    fontSize: 16,
    lineHeight: 20,
  },
});

const H6 = ({
  style,
  children,
  variant = 'primary',
  ...other
}: TextVariantProps): React.ReactElement => (
  <Text
    {...other}
    style={[{ color: getColorForVariant(variant) }, styles.root, style]}
    allowFontScaling={false}>
    {children}
  </Text>
);

export default H6;

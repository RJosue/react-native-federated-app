import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const styles = StyleSheet.create({
  root: {
    width: 44,
    height: 44,
    borderRadius: 22,
    padding: 10,
  },
});

interface Props {
  children?: React.ReactNode;
  style?: Record<string, unknown>;
  onPress?: () => void;
  disabled?: boolean;
  rippleColor?: string;
}

const PressableIconWrapper = ({
  children,
  style,
  onPress,
  disabled,
  rippleColor,
}: Props): React.ReactElement => (
  <TouchableRipple
    onPress={onPress}
    style={[styles.root, style]}
    borderless
    accessible
    disabled={disabled}
    rippleColor={rippleColor}>
    <View>{children}</View>
  </TouchableRipple>
);

export default PressableIconWrapper;

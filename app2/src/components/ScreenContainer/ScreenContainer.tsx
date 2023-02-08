import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../theme';

type ScreenContainerProps = {
  testID?: string;
  children?: React.ReactNode;
  style?: Record<string, unknown>;
  screenContainerStyle?: Record<string, unknown>;
  useTopInset?: boolean;
  useBottomInset?: boolean;
  applyGradient?: boolean;
};

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  safeGradientContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
});

export default function ScreenContainer({
  testID,
  children,
  screenContainerStyle = {},
  useTopInset = false,
  useBottomInset = false,
  applyGradient = false,
}: ScreenContainerProps): React.ReactElement {
  const insets = useSafeAreaInsets();

  if (applyGradient) {
    return (
      <LinearGradient
        colors={['#CEE8FF', '#FFFFFF']}
        style={{
          ...styles.safeGradientContainer,
          ...screenContainerStyle,
          paddingTop: useTopInset
            ? insets.top || StatusBar.currentHeight
            : undefined,
          paddingBottom: useBottomInset ? insets.bottom : undefined,
        }}>
        {children}
      </LinearGradient>
    );
  }

  return (
    <View
      testID={testID}
      style={{
        ...styles.safeContainer,
        ...screenContainerStyle,
        paddingTop: useTopInset
          ? insets.top || StatusBar.currentHeight
          : undefined,
        paddingBottom: useBottomInset ? insets.bottom : undefined,
      }}>
      {children}
    </View>
  );
}

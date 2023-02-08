import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as NativeButton } from 'react-native-elements';
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme';

export type ButtonVariant =
  | 'default'
  | 'outlined'
  | 'outlinedWhite'
  | 'wihtoutBorder'
  | 'differentColorWithoutBorder';

export type FloatMode = 'none' | 'bottom-right';

interface Props {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: IconProp;
  fullWidth?: boolean;
  floatMode?: FloatMode;
  onPress?: () => void;
  isFormSubmit?: boolean;
  textLeft?: boolean;
}
/** Modifiers */
export const outlinedStyles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: colors.bright_turquoise,
    borderWidth: 1,
  },
  buttonText: {
    color: colors.bright_turquoise,
  },
  icon: {
    color: colors.bright_turquoise,
  },
});

export const outlinedWhiteStyles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'white',
  },
});

export const wihtoutBorderStyles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: colors.bright_turquoise,
  },
  icon: {
    color: colors.bright_turquoise,
  },
});

export const differentColorWithoutBorder = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: colors.madison,
  },
  icon: {
    color: colors.madison,
  },
});

export const styleFullWith = StyleSheet.create({
  buttonBackground: {
    width: 'auto',
  },
  buttonText: {
    width: 'auto',
  },
});

type PositionProps = {
  bottom?: number;
  right?: number;
};
type MakeBaseStyleProps = {
  fullWidth: boolean;
  floatMode: FloatMode;
  bottomAdditionalSpace: number;
  textLeft?: boolean;
};
function makeBaseStyle({
  fullWidth,
  floatMode,
  bottomAdditionalSpace,
  textLeft,
}: MakeBaseStyleProps): ReturnType<typeof StyleSheet.create> {
  const usedWidth = fullWidth && floatMode === 'none' ? '100%' : 'auto';
  const usedPosition = floatMode === 'none' ? 'relative' : 'absolute';
  const usedTextAlign = textLeft ? 'left' : 'center';
  const usedTextLeftWidth = textLeft ? '95%' : 'auto';
  const usedfontSize = textLeft ? 14 : 16;
  const positionProps: PositionProps =
    floatMode === 'bottom-right'
      ? { bottom: 20 + bottomAdditionalSpace, right: 20 }
      : {};

  return StyleSheet.create({
    buttonContainer: {
      height: 50,
      borderRadius: 100,
      position: usedPosition,
      ...positionProps,
    },
    buttonBackground: {
      padding: 14,
      backgroundColor: colors.bright_turquoise,
      borderRadius: 100,
      width: usedWidth,
      height: 50,
    },
    buttonText: {
      textTransform: 'uppercase',
      // fontFamily: fonts.bold700,
      lineHeight: 21,
      textAlign: usedTextAlign,
      width: usedTextLeftWidth,
      fontSize: usedfontSize,
    },
    icon: {
      color: 'white',
      marginRight: 10,
    },
  });
}

const Button = ({
  title,
  variant = 'default',
  loading,
  disabled,
  iconLeft,
  fullWidth = true,
  floatMode = 'none',
  onPress,
  textLeft,
}: Props): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  const styles = useMemo(
    () =>
      makeBaseStyle({
        fullWidth,
        floatMode,
        bottomAdditionalSpace: bottom,
        textLeft,
      }),
    [fullWidth, floatMode, bottom, textLeft],
  );

  const usedButtonStyle = useMemo(() => {
    let usedStyle = styles.buttonBackground;
    if (variant === 'outlined') {
      usedStyle = {
        ...usedStyle,
        ...outlinedStyles.buttonBackground,
        borderColor: disabled
          ? colors.silver
          : outlinedStyles.buttonBackground.borderColor,
      };
    } else if (variant === 'outlinedWhite') {
      usedStyle = {
        ...usedStyle,
        ...outlinedStyles.buttonBackground,
        ...outlinedWhiteStyles.buttonBackground,
      };
    } else if (variant === 'wihtoutBorder') {
      usedStyle = {
        ...usedStyle,
        ...wihtoutBorderStyles.buttonBackground,
      };
    } else if (variant === 'differentColorWithoutBorder') {
      usedStyle = {
        ...usedStyle,
        ...differentColorWithoutBorder.buttonBackground,
      };
    }
    return usedStyle;
  }, [variant, styles, disabled]);

  const disabledStyle = useMemo(() => {
    let usedDisabledStyle = {};
    if (variant === 'outlined') {
      usedDisabledStyle = {
        backgroundColor: 'transparent',
      };
    }
    return usedDisabledStyle;
  }, [variant]);

  const usedTextStyle = useMemo(() => {
    let usedStyle = styles.buttonText;
    if (variant === 'outlined' || variant === 'outlinedWhite') {
      usedStyle = {
        ...usedStyle,
        ...outlinedStyles.buttonText,
      };
    } else if (variant === 'wihtoutBorder') {
      usedStyle = {
        ...usedStyle,
        ...wihtoutBorderStyles.buttonText,
      };
    } else if (variant === 'differentColorWithoutBorder') {
      usedStyle = {
        ...usedStyle,
        ...differentColorWithoutBorder.buttonText,
      };
    }
    return usedStyle;
  }, [variant, styles]);

  const usedIconStyle = useMemo(() => {
    let usedStyle = styles.icon;
    if (variant === 'outlined' || variant === 'outlinedWhite') {
      usedStyle = {
        ...usedStyle,
        ...outlinedStyles.icon,
      };
    } else if (variant === 'wihtoutBorder') {
      usedStyle = {
        ...usedStyle,
        ...wihtoutBorderStyles.icon,
      };
    } else if (variant === 'differentColorWithoutBorder') {
      usedStyle = {
        ...usedStyle,
        ...differentColorWithoutBorder.icon,
      };
    }
    return usedStyle;
  }, [variant, styles]);

  return (
    <NativeButton
      title={title}
      loading={loading}
      disabled={disabled}
      disabledStyle={disabledStyle}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      buttonStyle={usedButtonStyle}
      titleStyle={usedTextStyle}
      containerStyle={styles.buttonContainer}
      icon={
        iconLeft && (
          <FontAwesomeIcon
            icon={iconLeft}
            size={24}
            style={usedIconStyle as FontAwesomeIconStyle}
          />
        )
      }
      titleProps={{
        allowFontScaling: false,
      }}
    />
  );
};

export default Button;

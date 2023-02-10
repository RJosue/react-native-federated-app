/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { TouchableRipple, ActivityIndicator } from 'react-native-paper';
import { adormentStar, major } from '../../../../host/src/svg';
import { colors, H2, H5 } from '../../theme';

import setContainerBackgroundColor from './setContainerBackgroundColor';
import setContainerBorderColor from './setContainerBorderColor';
import setSubTitleColor from './setSubTitleColor';
import setTitleColor from './setTitleColor';
import { SvgXml } from 'react-native-svg';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export type ButtonVariant = 'lightblue' | 'white' | 'lightbluesecondary';

type MakeStyleProps = {
  variant: ButtonVariant;
  imageBackgroundColor: string;
  imageSize: number;
};

const makeStyles = ({
  variant,
  imageBackgroundColor,
  imageSize,
}: MakeStyleProps) => {
  const {
    containerBorderColor,
    containerBackgroundColor,
    titleColor,
    subTitleColor,
  } = {
    containerBorderColor: setContainerBorderColor(variant),
    containerBackgroundColor: setContainerBackgroundColor(variant),
    titleColor: setTitleColor(variant),
    subTitleColor: setSubTitleColor(variant),
  };

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      minHeight: 100,
      padding: 20,
      borderWidth: 1,
      borderColor: containerBorderColor,
      backgroundColor: containerBackgroundColor,
      borderRadius: 10,
      alignItems: 'center',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    containerRipple: {
      borderRadius: 10,
    },
    imageContainer: {
      width: 64,
      height: 64,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: imageBackgroundColor,
    },
    image: {
      width: imageSize,
      height: imageSize,
    },
    title: {
      color: titleColor,
    },
    subTitle: {
      color: subTitleColor,
      marginTop: 6,
    },
    icon: {
      padding: 0,
    },
    content: {
      flex: 1,
      paddingHorizontal: 7,
      paddingTop: 0,
      margin: 0,
    },
  });
};

interface DashboardButtonProps {
  title: string;
  subTitle: string;
  onPress: () => void;
  variant?: ButtonVariant;
  imageBackgroundColor?: string;
  iconColor?: string;
  iconSize?: number;
  icon: IconProp;
  imageSize?: number;
  loading?: boolean;
  showAdornment?: boolean;
}

const DashboardButton = ({
  title,
  subTitle,
  onPress,
  variant = 'lightblue',
  imageBackgroundColor = 'transparent',
  imageSize = 64,
  iconColor = '#FFF',
  iconSize = 32,
  icon,
  loading = false,
  showAdornment = false,
}: DashboardButtonProps) => {
  const styles = useMemo(
    () => makeStyles({ variant, imageBackgroundColor, imageSize }),
    [variant, imageBackgroundColor, imageSize],
  );

  const content = useMemo(() => {
    if (loading) {
      return (
        <ActivityIndicator
          testID="activityIndicator"
          style={{ width: '100%' }}
          size="small"
          color={colors.madison}
        />
      );
    }
    return (
      <View
        testID="content"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View testID="imageContainer" style={{ ...styles.imageContainer }}>
          <FontAwesomeIcon
            style={{ color: iconColor }}
            icon={icon}
            size={iconSize}
          />
        </View>
        <View style={styles.content}>
          <H2 testID="title" style={styles.title}>
            {title}
          </H2>
          {typeof subTitle === 'string' ? (
            <H5 testID="subtitle" style={styles.subTitle}>
              {subTitle}
            </H5>
          ) : (
            subTitle
          )}
        </View>
        <View style={styles.icon}>
          <SvgXml xml={major} width={12} height={55} />
        </View>
      </View>
    );
  }, [
    icon,
    iconColor,
    iconSize,
    loading,
    styles.content,
    styles.icon,
    styles.imageContainer,
    styles.subTitle,
    styles.title,
    subTitle,
    title,
  ]);

  return (
    <TouchableRipple
      borderless
      onPress={onPress}
      style={styles.containerRipple}>
      <>
        {showAdornment && (
          <View
            style={{
              position: 'absolute',
              elevation: 3,
              zIndex: 3,
            }}>
            <SvgXml testID="illustration" xml={adormentStar} />
          </View>
        )}
        <View style={styles.container}>{content}</View>
      </>
    </TouchableRipple>
  );
};

export default DashboardButton;

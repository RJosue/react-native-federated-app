/* eslint-disable react/no-array-index-key */
import React, { useMemo, useCallback } from 'react';
import { View, StyleSheet, ImageSourcePropType, StatusBar } from 'react-native';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faBars } from '@fortawesome/pro-light-svg-icons/faBars';
import { faArrowCircleLeft } from '@fortawesome/pro-light-svg-icons/faArrowCircleLeft';
import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons/faQuestionCircle';
import { faTimesCircle } from '@fortawesome/pro-light-svg-icons/faTimesCircle';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import PressableIconWrapper from '../PressableIconWrapper';

import { colors, H2 } from '../../theme';

import makeStyles from './makeStyles';

const styles = StyleSheet.create({
  uperSection: {
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  rightSection: {
    height: 44,
    flex: 1,
    alignItems: 'flex-end',
  },
  rightSectionContent: {
    flexDirection: 'row',
  },
  rightSectionDivision: {
    height: 24,
    width: 1,
    backgroundColor: colors.madison,
    marginVertical: 10,
    marginHorizontal: 2,
  },
});

function intercalateWithSeparator(
  sourceArray: React.ReactNode[],
): React.ReactNode[] {
  const filteredSourceArray = sourceArray.filter(
    (element) => typeof element !== 'undefined',
  );
  const intercalatedArray: React.ReactNode[] = [];
  filteredSourceArray.forEach((element, index) => {
    intercalatedArray.push(element);
    if (index < filteredSourceArray.length - 1) {
      intercalatedArray.push(
        <View
          key={`separator-${index}`}
          testID="separator"
          style={styles.rightSectionDivision}
        />,
      );
    }
  });
  return intercalatedArray;
}

export interface Props {
  /** Related to the "profile picture" that acts as the current helper */
  helperImage?: ImageSourcePropType;
  hideHelperImage?: boolean;
  helperImageStyle?: Record<string, unknown>;

  /** Aux properties */
  backgroundColor?: string;
  iconColor?: string;
  messageColor?: string;

  /** Overwrites the default "back" action (left button) */
  backAction?: () => void;

  /** If true, the back button will not be displayed */
  hideBackButton?: boolean;

  /** Whether to display the main menu icon or not */
  showMenu?: boolean;

  /**
   * Will probably remain unused once all additional actions are mapped to the
   * new menu instance
   */
  helpAction?: () => void;
  closeAction?: () => void;
  hideHelperButton?: boolean;
  hideCloseButton?: boolean;

  titleOverwrite?: string | React.ReactElement;
  navigation: NavigationProp<ParamListBase>;
}

const AssistantHeader = ({
  backgroundColor = 'white',
  iconColor = colors.madison,
  messageColor = colors.madison,
  backAction,
  helpAction,
  closeAction,
  hideHelperImage = false,
  hideBackButton = false,
  hideHelperButton = false,
  hideCloseButton = false,
  showMenu = false,
  titleOverwrite,
  navigation,
}: Props): React.ReactElement => {
  const insets = useSafeAreaInsets();

  const usedMessage = titleOverwrite;

  /**
   * Change background, icon color or hide button depending on prop
   */
  const headerCustomStyles = useMemo(
    () =>
      makeStyles({
        messageColor,
        iconColor,
        backgroundColor,
        hideBackButton,
        hideHelperImage,
      }),
    [messageColor, iconColor, backgroundColor, hideBackButton, hideHelperImage],
  );

  /**
   * Called when the "Back" button is pressed
   */
  const onBackPressed = useCallback(() => {
    if (backAction) {
      backAction();
    } else {
      navigation.goBack();
    }
  }, [backAction, navigation]);

  const helpButton = useMemo(
    () =>
      helpAction && !hideHelperButton ? (
        <PressableIconWrapper key="helpButton" onPress={helpAction}>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={headerCustomStyles.iconStyle}
            size={24}
          />
        </PressableIconWrapper>
      ) : undefined,
    [helpAction, hideHelperButton, headerCustomStyles],
  );

  const menuButton = useMemo(
    () =>
      showMenu ? (
        <PressableIconWrapper
          key="menuButton"
          onPress={(): void => navigation.navigate('MainMenu')}>
          <FontAwesomeIcon
            icon={faBars}
            style={headerCustomStyles.iconStyle}
            size={24}
          />
        </PressableIconWrapper>
      ) : undefined,
    [showMenu, headerCustomStyles, navigation],
  );

  const closeButton = useMemo(
    () =>
      closeAction && !hideCloseButton ? (
        <PressableIconWrapper onPress={closeAction} key="closeButton">
          <FontAwesomeIcon
            icon={faTimesCircle}
            style={headerCustomStyles.iconStyle}
            size={24}
          />
        </PressableIconWrapper>
      ) : undefined,
    [closeAction, hideCloseButton, headerCustomStyles],
  );

  /**
   * The right section
   */
  const rightSectionContent = useMemo(
    () => intercalateWithSeparator([helpButton, closeButton, menuButton]),
    [helpButton, closeButton, menuButton],
  );

  return (
    <SafeAreaProvider>
      <View
        style={{
          backgroundColor,
          paddingTop: insets.top || StatusBar.currentHeight,
        }}>
        <View style={headerCustomStyles.root}>
          <View style={styles.uperSection}>
            {/* Left Section */}
            <View style={headerCustomStyles.leftSection}>
              <PressableIconWrapper
                onPress={onBackPressed}
                disabled={hideBackButton}>
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  style={headerCustomStyles.iconStyle}
                  size={24}
                />
              </PressableIconWrapper>
            </View>

            {hideHelperImage && (
              <View style={{ flex: 3 }}>
                {typeof usedMessage === 'string' && (
                  <H2
                    style={[
                      headerCustomStyles.helperMessage,
                      { paddingTop: 10 },
                    ]}>
                    {usedMessage}
                  </H2>
                )}
                {typeof usedMessage === 'object' && (
                  <View style={{ paddingTop: 10 }}>{usedMessage}</View>
                )}
              </View>
            )}

            {/* Right Section */}
            <View style={styles.rightSection}>
              <View style={styles.rightSectionContent}>
                {rightSectionContent}
              </View>
            </View>
          </View>

          {/* Message section */}
          {!!usedMessage && !hideHelperImage && (
            <View>
              {typeof usedMessage === 'string' && (
                <H2 style={headerCustomStyles.helperMessage}>{usedMessage}</H2>
              )}
              {typeof usedMessage === 'object' && (
                <View testID="helperMessageObject">{usedMessage}</View>
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default AssistantHeader;

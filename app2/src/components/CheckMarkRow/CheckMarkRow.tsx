import React from 'react';
import { View, StyleSheet } from 'react-native';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCircle } from '@fortawesome/pro-solid-svg-icons/faCircle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import ColorVariant from '../../theme/TextVariants/ColorVariant';
import { H4, colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

interface Props {
  text: string | React.ReactElement;
  textVariant?: ColorVariant;
  point?: boolean;
}

const CheckMarkRow = ({
  text,
  textVariant = 'secondary',
  point = false,
}: Props): React.ReactElement => {
  const icon = point ? faCircle : faCheck;
  const sizeIcon = point ? 4 : 17;
  const color = point ? colors.abbey : colors.madison;

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer} testID="containerIcon">
        <FontAwesomeIcon icon={icon} size={sizeIcon} color={color} />
      </View>
      <H4 style={styles.text} variant={textVariant}>
        {text}
      </H4>
    </View>
  );
};

export default CheckMarkRow;

import { StyleSheet } from 'react-native';

type MakeStylesProps = {
  backgroundColor: string;
  iconColor: string;
  messageColor: string;
  hideBackButton: boolean;
  hideHelperImage: boolean;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const makeStyles = ({
  messageColor,
  iconColor,
  backgroundColor,
  hideBackButton,
}: MakeStylesProps) => {
  const opacity = hideBackButton ? 0 : 1;

  return StyleSheet.create({
    root: {
      padding: 20,
      paddingHorizontal: 10,
      flexDirection: 'column',
      backgroundColor,
    },
    leftSection: {
      height: 44,
      flex: 1,
      alignItems: 'flex-start',
      opacity,
    },
    iconStyle: {
      color: iconColor,
    },
    helperMessage: {
      color: messageColor,
      textAlign: 'center',
    },
  });
};

export default makeStyles;

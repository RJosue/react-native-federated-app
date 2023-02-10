import { TextProps } from 'react-native';

import ColorVariant from './ColorVariant';

export default interface Props extends TextProps {
  variant?: ColorVariant;
  children?: React.ReactNode;
}

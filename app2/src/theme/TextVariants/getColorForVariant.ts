import ColorVariant from './ColorVariant';
import colors from '../colors';

export default function getColorForVariant(color: ColorVariant): string {
  switch (color) {
    case 'secondary':
      return colors.abbey;
    case 'link':
      return colors.bright_turquoise;
    case 'white':
      return colors.white;
    case 'error':
      return colors.bright_pink;
    default:
      return colors.madison;
  }
}

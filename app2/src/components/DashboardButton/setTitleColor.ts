import { colors } from '../../theme';

export default function setTitleColor(variant: string): string {
  switch (variant) {
    case 'lightblue':
      return colors.blue_text;
    case 'lightbluesecondary':
      return colors.madison;
    default:
      return colors.madison;
  }
}

import { colors } from '../../theme';

export default function setSubTitleColor(variant: string): string {
  switch (variant) {
    case 'lightblue':
      return colors.blue_text;
    case 'lightbluesecondary':
      return colors.abbey;
    default:
      return colors.abbey;
  }
}

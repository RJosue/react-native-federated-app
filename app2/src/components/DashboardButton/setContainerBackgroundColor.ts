import { colors } from '../../theme';

export default function setContainerBackgroundColor(variant: string): string {
  switch (variant) {
    case 'lightblue':
      return colors.cloud;
    case 'lightbluesecondary':
      return colors.light_blue_secondary;
    default:
      return colors.white;
  }
}

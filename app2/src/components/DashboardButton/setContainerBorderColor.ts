import { colors } from '../../theme';

export default function setContainerBorderColor(variant: string): string {
  switch (variant) {
    case 'lightblue':
      return colors.onahau;
    case 'lightbluesecondary':
      return colors.gallery;
    default:
      return colors.gallery;
  }
}

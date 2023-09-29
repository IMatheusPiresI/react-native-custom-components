import { IButtonSizes, ISizesOptions } from '../../../@types/sizes';

export const getButtonSize = (
  size: ISizesOptions | number | 'auto' | `${number}%`,
) => {
  switch (size) {
    case 'small':
      return IButtonSizes.small;
    case 'medium':
      return IButtonSizes.medium;
    case 'large':
      return IButtonSizes.large;
    default:
      return size;
  }
};

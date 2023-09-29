import { ISizesOptions, ITextSizes } from '../../../@types/sizes';

export const getFontSize = (size: ISizesOptions | number) => {
  switch (size) {
    case 'small':
      return ITextSizes.small;
    case 'medium':
      return ITextSizes.medium;
    case 'large':
      return ITextSizes.large;
    default:
      return size;
  }
};

import { IFont, IFontOptions } from '../../../@types/fonts';

export const getFontFamily = (font: IFontOptions | number) => {
  switch (font) {
    case 'regular':
      return IFont.regular;
    case 'medium':
      return IFont.medium;
    case 'bold':
      return IFont.bold;
    case 'neue':
      return IFont.neue;
  }
};

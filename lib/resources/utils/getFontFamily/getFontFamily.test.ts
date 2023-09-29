import { IFont, IFontOptions } from '../../../@types/fonts';
import { getFontFamily } from './getFontFamily';

describe('Tests function helper getFontFamily', () => {
  it('should be render the correct regular fontFamily', () => {
    const font: IFontOptions = 'regular';

    expect(getFontFamily(font)).toBe(IFont.regular);
  });

  it('should be render the correct medium fontFamily', () => {
    const font: IFontOptions = 'medium';

    expect(getFontFamily(font)).toBe(IFont.medium);
  });

  it('should be render the correct bold fontFamily', () => {
    const font: IFontOptions = 'bold';

    expect(getFontFamily(font)).toBe(IFont.bold);
  });

  it('should be render the correct neue fontFamily', () => {
    const font: IFontOptions = 'neue';

    expect(getFontFamily(font)).toBe(IFont.neue);
  });
});

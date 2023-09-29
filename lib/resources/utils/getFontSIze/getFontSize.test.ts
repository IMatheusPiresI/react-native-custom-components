import { ISizesOptions, ITextSizes } from '../../../@types/sizes';
import { getFontSize } from './getFontSize';

describe('Tests function helper getFontSize', () => {
  it('should be render the correct small fontSize', () => {
    const fontSizeOption: ISizesOptions = 'small';

    expect(getFontSize(fontSizeOption)).toBe(ITextSizes.small);
  });

  it('should be render the correct medium fontSize', () => {
    const fontSizeOption: ISizesOptions = 'medium';

    expect(getFontSize(fontSizeOption)).toBe(ITextSizes.medium);
  });

  it('should be render the correct large fontSize', () => {
    const fontSizeOption: ISizesOptions = 'large';

    expect(getFontSize(fontSizeOption)).toBe(ITextSizes.large);
  });

  it('should be render the correct large fontSize', () => {
    const customValueSize: number = 32;

    expect(getFontSize(customValueSize)).toBe(customValueSize);
  });
});

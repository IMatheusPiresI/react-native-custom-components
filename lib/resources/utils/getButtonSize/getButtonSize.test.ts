import { IButtonSizes, ISizesOptions } from '../../../@types/sizes';
import { getButtonSize } from './getButtonSize';

describe('Tests function helper getButtonSize', () => {
  it('should be render the correct small button size', () => {
    const buttonSizeOption: ISizesOptions = 'small';

    expect(getButtonSize(buttonSizeOption)).toBe(IButtonSizes.small);
  });

  it('should be render the correct medium button size', () => {
    const buttonSizeOption: ISizesOptions = 'medium';

    expect(getButtonSize(buttonSizeOption)).toBe(IButtonSizes.medium);
  });

  it('should be render the correct large button size', () => {
    const buttonSizeOption: ISizesOptions = 'large';

    expect(getButtonSize(buttonSizeOption)).toBe(IButtonSizes.large);
  });

  it('should be render the correct large button size', () => {
    const customValueSizeButton = 40;

    expect(getButtonSize(customValueSizeButton)).toBe(customValueSizeButton);
  });
});

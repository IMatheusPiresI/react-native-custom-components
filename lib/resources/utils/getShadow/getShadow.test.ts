import { ISizesOptions } from '../../../@types/sizes';
import { getShadow } from './getShadow';

describe('Tests function helper getShadow', () => {
  it('should be render the correct small shadow', () => {
    const shadowOption: ISizesOptions = 'small';

    expect(getShadow(shadowOption)).toEqual({
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    });
  });

  it('should be render the correct medium shadow', () => {
    const shadowOption: ISizesOptions = 'medium';

    expect(getShadow(shadowOption)).toEqual({
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    });
  });

  it('should be render the correct large shadow', () => {
    const shadowOption: ISizesOptions = 'large';

    expect(getShadow(shadowOption)).toEqual({
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    });
  });

  it('should be render the correct large shadow', () => {
    const shadowOption: ISizesOptions = 'large';

    expect(
      getShadow({
        shadowColor: '#000000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,
      }),
    ).toEqual({
      shadowColor: '#000000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
    });
  });
});

import { IShadowObject } from '../../../@types/shadow';
import { ISizesOptions } from '../../../@types/sizes';

export const getShadow = (
  shadow?: ISizesOptions | IShadowObject,
  shadowColor?: string,
): IShadowObject => {
  if (!shadow) return;

  switch (shadow) {
    case 'small':
      return {
        shadowColor: shadowColor ?? '#000000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      };
    case 'medium':
      return {
        shadowColor: shadowColor ?? '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      };
    case 'large':
      return {
        shadowColor: shadowColor ?? '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      };

    default:
      return {
        shadowColor: shadowColor ?? '#000000',
        shadowOffset: {
          width: shadow.shadowOffset.width,
          height: shadow.shadowOffset.height,
        },
        shadowOpacity: shadow.shadowOpacity,
        shadowRadius: shadow.shadowRadius,
        elevation: shadow.elevation,
      };
  }
};

import { TouchableOpacityProps } from 'react-native';
import { IFontOptions } from '../../@types/fonts';
import { IShadowObject } from '../../@types/shadow';
import { ISizesOptions, ITextSizes } from '../../@types/sizes';

type IProps = {
  title: string;
  bgColor?: string;
  width?: number | `${number}%`;
  height?: ISizesOptions | number | `${number}%` | 'auto';
  titleColor?: string;
  disabledColor?: string;
  fontSize?: ITextSizes | number;
  radius?: number;
  shadow?: ISizesOptions | IShadowObject;
  shadowColor?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  font: IFontOptions;
} & TouchableOpacityProps;

export type { IProps };

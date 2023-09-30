import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IFontOptions } from '../../@types/fonts';
import { IShadowObject } from '../../@types/shadow';
import { ISizesOptions } from '../../@types/sizes';

export type ICardQuickAccessProps = {
  width?: number;
  height?: number;
  bgColor?: string;
  disabledColor?: string;
  icon: ReactNode;
  title: string;
  font?: IFontOptions;
  fontSize?: number;
  color?: string;
  numberOfLines?: number;
  shadow?: ISizesOptions | IShadowObject;
} & TouchableOpacityProps;

import { ReactNode } from 'react';
import { FlexAlignType, TextProps } from 'react-native';
import { IFontOptions } from '../../@types/fonts';
import { ISpacesTypes, ITextSizes } from '../../@types/sizes';
export declare type ITypographProps = {
    children: ReactNode;
    font?: IFontOptions;
    fontSize?: ITextSizes | number;
    color?: string;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    alignSelf?: 'auto' | FlexAlignType | undefined;
    lineHeight?: number;
    underline?: boolean;
    underlineColor?: string;
} & ISpacesTypes & TextProps;

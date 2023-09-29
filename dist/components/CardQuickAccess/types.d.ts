import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IFontOptions } from '../../@types/fonts';
export declare type ICardQuickAccessProps = {
    width?: number;
    height?: number;
    bgColor: string;
    disabledColor?: string;
    icon: ReactNode;
    title: string;
    font?: IFontOptions;
    fontSize?: number;
    color?: string;
    numberOfLines?: number;
} & TouchableOpacityProps;

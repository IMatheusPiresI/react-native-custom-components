import { ReactNode } from 'react';
import { IFontOptions } from '../../@types/fonts';
export declare type IProps = {
    icon: ReactNode;
    title: string;
    font?: IFontOptions;
    fontSize?: number;
    color?: string;
};

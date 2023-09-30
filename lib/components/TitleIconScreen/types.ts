import { ReactNode } from 'react';
import { IFontOptions } from '../../@types/fonts';

export type IProps = {
  icon: ReactNode;
  title: string;
  font?: IFontOptions;
  fontSize?: number;
  color?: string;
};

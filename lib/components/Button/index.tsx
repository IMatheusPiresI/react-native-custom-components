import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getButtonSize } from '../../resources/utils/getButtonSize/getButtonSize';
import { getFontFamily } from '../../resources/utils/getFontFamily/getFontFamily';
import { getShadow } from '../../resources/utils/getShadow/getShadow';

import { IProps } from './types';

export const Button: React.FC<IProps> = ({
  title,
  bgColor,
  disabledColor,
  fontSize,
  width,
  height,
  font,
  titleColor,
  shadow,
  shadowColor,
  radius,
  padding,
  paddingHorizontal,
  paddingVertical,
  ...rest
}) => {
  const styles = StyleSheet.create({
    container: {
      width: width || '100%',
      height: height ? getButtonSize(height) : 'auto',
      backgroundColor: rest.disabled ? disabledColor ?? '#B0AFAF' : bgColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: paddingVertical || 6,
      paddingHorizontal: paddingHorizontal || 6,
      padding: padding,
      shadowColor: shadowColor || '#000000',
      borderRadius: radius || 12,
      ...getShadow(shadow, shadowColor),
    },
    title: {
      fontSize: fontSize || 12,
      color: titleColor,
      fontFamily: getFontFamily(font),
    },
  });

  return (
    <TouchableOpacity style={styles.container} {...rest} testID="button">
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

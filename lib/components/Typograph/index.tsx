import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { getFontFamily } from '../../resources/utils/getFontFamily/getFontFamily';
import { getFontSize } from '../../resources/utils/getFontSIze/getFontSize';
import { ITypographProps } from './types';

export const Typograph: React.FC<ITypographProps> = ({
  font,
  fontSize,
  children,
  color,
  textAlign,
  alignSelf,
  underline,
  underlineColor,
  lineHeight,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  m,
  ...rest
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: getFontSize(fontSize ?? 'medium'),
      fontFamily: getFontFamily(font ?? 'regular'),
      color: color || '#000000',
      textAlign,
      alignSelf,
      lineHeight,
      textDecorationLine: underline ? 'underline' : undefined,
      textDecorationColor: underlineColor ?? color ?? '#000000',
      padding: p,
      paddingHorizontal: px,
      paddingVertical: py,
      paddingLeft: pl,
      paddingRight: pr,
      paddingBottom: pb,
      paddingTop: pt,
      margin: m,
      marginLeft: ml,
      marginRight: mr,
      marginTop: mt,
      marginBottom: mb,
      marginHorizontal: mx,
      marginVertical: my,
    },
  });
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

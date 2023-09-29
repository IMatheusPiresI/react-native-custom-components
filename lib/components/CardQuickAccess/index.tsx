import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Typograph } from '../Typograph';
import { ICardQuickAccessProps } from './types';

export const CardQuickAccess: React.FC<ICardQuickAccessProps> = ({
  icon,
  title,
  width,
  height,
  bgColor,
  disabledColor,
  font,
  fontSize,
  color,
  numberOfLines,
  ...rest
}) => {
  const styles = StyleSheet.create({
    container: {
      width: width ?? 80,
      height: height ?? 80,
      backgroundColor: rest.disabled ? disabledColor ?? '#B0AFAF' : bgColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      paddingHorizontal: 2,
      paddingVertical: 2,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
      testID="CardQuickAccess"
    >
      {icon}
      <Typograph
        font={font ?? 'medium'}
        fontSize={fontSize ?? 12}
        color={color ?? '#ffffff'}
        numberOfLines={numberOfLines ?? 2}
      >
        {title}
      </Typograph>
    </TouchableOpacity>
  );
};

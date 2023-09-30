import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getShadow } from '../../resources/utils/getShadow/getShadow';
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
  shadow,
  ...rest
}) => {
  const styles = StyleSheet.create({
    container: {
      width: width ?? 80,
      height: height ?? 80,
      backgroundColor: rest.disabled ? disabledColor ?? '#B0AFAF' : bgColor ?? "#000fff",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      paddingHorizontal: 2,
      paddingVertical: 2,
      ...getShadow(shadow),
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
        fontSize={fontSize ?? 10}
        color={color ?? '#ffffff'}
        numberOfLines={numberOfLines}
        mt={6}
      >
        {title}
      </Typograph>
    </TouchableOpacity>
  );
};

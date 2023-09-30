import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Typograph } from '../Typograph';
import { IProps } from './types';

export const TitleIconScreen: React.FC<IProps> = ({
  title,
  font,
  fontSize,
  icon,
  color,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {icon}
      <Typograph
        font={font ?? 'medium'}
        fontSize={fontSize ?? 20}
        ml={14}
        color={color ?? '#000000'}
      >
        {title}
      </Typograph>
    </View>
  );
};

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import {Color} from '../../Constant';

const AppButton = ({
  title,
  marginTop,
  onPress,
  marginBottom,
  backgroundColor = Color.SUCCESS,
  titleStyle,
  width,
  flex,
  marginRight,
  borderRadius = 10,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.continer,
        {marginTop, marginBottom, backgroundColor, width, flex, marginRight, borderRadius},
      ]}>
      <AppText style={[styles.label, titleStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continer: {
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.SUCCESS,
  },
  label: {
    fontSize: 16,
    color: Color.LIGHT,
    fontWeight: 'bold',
  },
});

export default AppButton;

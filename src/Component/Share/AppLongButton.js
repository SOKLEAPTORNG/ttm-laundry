import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import {Color} from '../../Constant';

const AppLongButton = ({
  title,
  marginTop,
  onPress,
  marginBottom,
  position,
  bottom,
  alignSelf,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.continer,
        {marginTop, marginBottom, position, bottom, alignSelf},
      ]}>
      <AppText style={styles.label}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.SUCCESS,
  },
  label: {
    fontSize: 18,
    color: Color.LIGHT,
    fontWeight: 'bold',
  },
});

export default AppLongButton;

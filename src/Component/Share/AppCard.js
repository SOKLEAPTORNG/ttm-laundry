import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../Constant';

const AppCard = ({
  children,
  marginTop,
  marginBottom,
  activeOpacity = 1,
  padding = 15,
  paddingHorizontal,
  paddingVertical,
  isShowShadow = false,
  paddingTop,
  paddingBottom,
  onPress,
  borderRadius = 10,
  backgroundColor = Color.LIGHT,
  flexDirection,
  marginLeft,
  marginRight,
  width = '100%',
  alignSelf,
  justifyContent,
  multiStyle,
  alignItems
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        multiStyle,
        {
          marginTop,
          marginBottom,
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingTop,
          paddingBottom,
          borderRadius,
          backgroundColor,
          flexDirection,
          marginLeft,
          marginRight,
          width,
          alignSelf,
          justifyContent,
          alignItems
        },
        isShowShadow ? styles.shadow : null,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Color.DARK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default AppCard;

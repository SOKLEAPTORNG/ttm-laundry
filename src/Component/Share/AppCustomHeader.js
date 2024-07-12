import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '../../Constant';

const AppCustomHeader = ({
  children,
  flexDirection,
  justifyContent,
  paddingHorizontal = 15,
  backgroundColor = Color.LIGHT,
  height = 56,
  position,
  top,
  zIndex
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection,
          justifyContent,
          paddingHorizontal,
          backgroundColor,
          height,
          position,
          top,
          zIndex
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
});

export default AppCustomHeader;

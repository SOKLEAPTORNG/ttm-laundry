import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';

const AppInput = ({
  placeholder,
  marginTop,
  children,
  marginBottom,
  isShowShadow = false,
  backgroundColor = Color.PLACEHOLDER,
  placeholderTextColor,
}) => {
  return (
    <View style={[styles.container, {marginTop, marginBottom}]}>
      <TextInput
        style={[
          styles.input,
          isShowShadow ? styles.shadow : null,
          {backgroundColor},
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    position: 'relative',
  },
  input: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: Color.DARK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default AppInput;

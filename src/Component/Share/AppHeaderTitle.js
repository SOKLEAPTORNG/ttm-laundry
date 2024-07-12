import React from 'react';
import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';
import AppText from './AppText';

const AppHeaderTitle = ({title, textAlign}) => {
  return <AppText style={[styles.headerTitle, {textAlign}]}>{title}</AppText>;
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
  },
});

export default AppHeaderTitle;

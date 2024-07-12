import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import images from '../../Common/images';

const EditButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.editIcon} source={images.EditIcon()} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});

export default EditButton;

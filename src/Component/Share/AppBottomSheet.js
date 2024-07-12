import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Modal, Animated} from 'react-native';
import {Color} from '../../Constant';
import AppText from './AppText';

const AppBottomSheet = ({
  visible,
  children,
  paddinBottom,
  width = '100%',
  height,
  paddingHorizontal,
}) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  const toggleModal = () => {
    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const modalAnimatedStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.bottomSheet, modalAnimatedStyle]}>
          <View
            style={[
              styles.screen,
              {paddinBottom, width, height, paddingHorizontal},
            ]}>
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  screen: {
    width: '100%',
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
});

export default AppBottomSheet;

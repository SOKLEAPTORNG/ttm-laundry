import React, {useCallback} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../../src/Component/Share/AppText';
import images from '../../Common/images';
import AppLongButton from '../../Component/Share/AppLongButton';
import {Color} from '../../Constant';

export default function ChangePassword() {
  const navigation = useNavigation();

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.screen}>
          <AppText style={styles.descriptionText}>
            Enter your old password, New Password and Confirm.
          </AppText>
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Color.GRAY}
              placeholder={'Old Password'}
            />
            <TouchableOpacity style={styles.eyeIconContainer}>
              <Image style={styles.eyeIcon} source={images.EyeIcon()} />
            </TouchableOpacity>
          </View>
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Color.GRAY}
              placeholder={'New Password'}
            />
            <TouchableOpacity style={styles.eyeIconContainer}>
              <Image style={styles.eyeIcon} source={images.EyeIcon()} />
            </TouchableOpacity>
          </View>
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Color.GRAY}
              placeholder={'Confirm Password'}
            />
            <TouchableOpacity style={styles.eyeIconContainer}>
              <Image style={styles.eyeIcon} source={images.EyeIcon()} />
            </TouchableOpacity>
          </View>
          <AppLongButton
            position={'absolute'}
            bottom={15}
            title={'Change Password'}
            onPress={() => navigation.goBack()}
          />
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}

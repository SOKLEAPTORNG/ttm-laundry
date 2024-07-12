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
import AppInput from '../../Component/Share/AppInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../../Constant';
import images from '../../Common/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppLongButton from '../../Component/Share/AppLongButton';

export default function EditProfile() {
  const navigation = useNavigation();

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout paddingHorizontal={0}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={130}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <View style={styles.screen}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={images.MaleStaticImage()} />
              <TouchableOpacity style={styles.editLogoContainer}>
                <Image style={styles.editIcon} source={images.EditIcon()} />
              </TouchableOpacity>
            </View>

            <AppText style={styles.infoLabel}>Contact information</AppText>
            <AppInput
              placeholder={'Enter First Name'}
              isShowShadow={true}
              backgroundColor={Color.LIGHT}
              placeholderTextColor={Color.GRAY}
              marginTop={10}
            />
            <AppInput
              placeholder={'Enter Last Name'}
              isShowShadow={true}
              backgroundColor={Color.LIGHT}
              placeholderTextColor={Color.GRAY}
              marginTop={10}
            />
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.flagSideContainer}>
                <Image style={styles.khFlag} source={images.KhmerFlag()} />
                <AppText style={styles.codeLabel}>+855</AppText>
                <Ionicons style={styles.downIcon} name="caret-down-sharp" />
              </TouchableOpacity>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder={'Enter Phone Number'}
                placeholderTextColor={Color.GRAY}
              />
            </View>
            <AppInput
              placeholder={'Enter Email'}
              isShowShadow={true}
              backgroundColor={Color.LIGHT}
              placeholderTextColor={Color.GRAY}
              marginTop={10}
            />
            <View style={styles.phoneInputContainer}>
              <TextInput
                style={styles.input}
                placeholderTextColor={Color.GRAY}
                placeholder={'Enter Password'}
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
              title={'Save'}
              alignSelf={'center'}
              marginTop={15}
              marginBottom={15}
              onPress={() => navigation.goBack()}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
}

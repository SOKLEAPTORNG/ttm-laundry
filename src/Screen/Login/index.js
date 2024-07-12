import React, {useCallback} from 'react';
import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppInput from '../../Component/Share/AppInput';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={210}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Color.APPBACKGROUND,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <View style={styles.screen}>
            <Image style={styles.splashImage} source={images.SplashImage()} />
            <AppText style={styles.loginLabel}>Login</AppText>
            <View style={styles.phoneNumContainer}>
              <TouchableOpacity style={styles.flagContent}>
                <Image style={styles.khFlag} source={images.KhmerFlag()} />
                <AppText style={styles.numType}>+855</AppText>
                <Icon style={styles.downIcon} name="sort-down" />
              </TouchableOpacity>
              <TextInput style={styles.input} placeholder="Phone Number" />
            </View>
            <AppInput
              backgroundColor={Color.PLACEHOLDER}
              placeholder={'Password'}
            />
            <AppLongButton
              marginTop={60}
              title={'Login'}
              onPress={() => navigation.navigate('HOME_STACK')}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default LoginScreen;

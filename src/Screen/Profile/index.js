import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../Component/Layout';
import AppText from '../../Component/Share/AppText';
import images from '../../Common/images';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import {useNavigation} from '@react-navigation/core';

const Profile = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTurnOnNotification, setIsTurnOnNotification] = useState(false);

  const translateXDarkMode = new Animated.Value(0);
  const backgroundColorDarkMode = new Animated.Value(isDarkMode ? 1 : 0);

  const translateXNotification = new Animated.Value(0);
  const backgroundColorNotification = new Animated.Value(
    isTurnOnNotification ? 1 : 0,
  );

  const handleDarkLightMode = () => {
    setIsDarkMode(!isDarkMode);

    Animated.parallel([
      Animated.timing(translateXDarkMode, {
        toValue: isDarkMode ? 200 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(backgroundColorDarkMode, {
        toValue: isDarkMode ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleNotification = () => {
    setIsTurnOnNotification(!isTurnOnNotification);

    Animated.parallel([
      Animated.timing(translateXNotification, {
        toValue: isTurnOnNotification ? 200 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(backgroundColorNotification, {
        toValue: isTurnOnNotification ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleListButtonClick = labelText => {
    if (labelText.toLowerCase() === 'sign out') {
      Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          {
            text: 'NO',
            style: 'cancel',
          },
          {
            text: 'YES',
            onPress: () => {
              console.log('Sign Out clicked');
            },
          },
        ],
        {cancelable: false},
      );
    } else if (labelText.toLowerCase() === 'delete account') {
      Alert.alert(
        'Delete Account',
        'Are you sure you want to delete your account?',
        [
          {
            text: 'NO',
            style: 'cancel',
          },
          {
            text: 'YES',
            onPress: () => {
              console.log('Deleting account clicked');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      navigation.navigate(labelText);
    }
  };

  const ListButton = (
    iconSource,
    labelText,
    navigateToScreen,
    isDeleteAccount,
  ) => (
    <AppCard
      isShowShadow={true}
      marginTop={10}
      flexDirection={'row'}
      alignItems={'center'}
      activeOpacity={0.2}
      width={'99%'}
      alignSelf={'center'}
      marginBottom={isDeleteAccount ? 15 : 0}
      onPress={() => handleListButtonClick(labelText)}>
      <Image style={styles.defaultIcon} source={iconSource} />
      <AppText
        style={[styles.defaultLabel, isDeleteAccount && {color: Color.DANGER}]}>
        {labelText}
      </AppText>
    </AppCard>
  );

  return (
    <Layout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          width: '100%',
          backgroundColor: Color.APPBACKGROUND,
        }}>
        <View style={styles.screen}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={images.MaleStaticImage()}
            />
          </View>
          <AppText style={styles.userName}>Ser Hann</AppText>
          <AppText style={styles.phoneNumber}>+855 15 155 156</AppText>
          <AppCard
            isShowShadow={true}
            marginTop={10}
            flexDirection={'row'}
            alignItems={'center'}
            activeOpacity={0.2}
            width={'99%'}
            alignSelf={'center'}
            onPress={() => navigation.navigate('ReturnScreen')}>
            <Image style={styles.defaultIcon} source={images.DarkLightIcon()} />
            <AppText style={styles.defaultLabel}>dark mode</AppText>
            <TouchableOpacity
              style={styles.darkLightButton}
              onPress={handleDarkLightMode}>
              <Animated.View
                style={[
                  styles.darkLightContainer,
                  {
                    backgroundColor: backgroundColorDarkMode.interpolate({
                      inputRange: [0, 1],
                      outputRange: [Color.GRAY, Color.GOLD],
                    }),
                    transform: [
                      {
                        translateX: translateXDarkMode.interpolate({
                          inputRange: [0, 200],
                          outputRange: [0, 200],
                        }),
                      },
                    ],
                  },
                ]}>
                {isDarkMode ? (
                  <View
                    style={[
                      styles.switchButton,
                      {position: 'absolute', right: 5},
                    ]}
                  />
                ) : (
                  <View
                    style={[
                      styles.switchButton,
                      {position: 'absolute', left: 5},
                    ]}
                  />
                )}
              </Animated.View>
            </TouchableOpacity>
          </AppCard>
          <AppCard
            isShowShadow={true}
            marginTop={10}
            flexDirection={'row'}
            alignItems={'center'}
            activeOpacity={0.2}
            width={'99%'}
            alignSelf={'center'}>
            <Image style={styles.defaultIcon} source={images.BellIcon()} />
            <AppText style={styles.defaultLabel}>notifications</AppText>
            <TouchableOpacity
              style={styles.darkLightButton}
              onPress={handleNotification}>
              <Animated.View
                style={[
                  styles.darkLightContainer,
                  {
                    backgroundColor: backgroundColorNotification.interpolate({
                      inputRange: [0, 1],
                      outputRange: [Color.GRAY, Color.GOLD],
                    }),
                    transform: [
                      {
                        translateX: translateXNotification.interpolate({
                          inputRange: [0, 200],
                          outputRange: [0, 200],
                        }),
                      },
                    ],
                  },
                ]}>
                {isTurnOnNotification ? (
                  <View
                    style={[
                      styles.switchButton,
                      {position: 'absolute', right: 5},
                    ]}
                  />
                ) : (
                  <View
                    style={[
                      styles.switchButton,
                      {position: 'absolute', left: 5},
                    ]}
                  />
                )}
              </Animated.View>
            </TouchableOpacity>
          </AppCard>
          {ListButton(images.LanguageIcon(), 'languages', 'LanguageScreen')}
          {ListButton(images.EditIcon(), 'edit profile', 'EditProfile')}
          {ListButton(
            images.ChangePasswordIcon(),
            'change password',
            'ChangePassword',
          )}
          {ListButton(images.ContactUsIcon(), 'contact us', 'HelpCenter')}
          {ListButton(images.AboutUsIcon(), 'about us', 'AboutUs')}
          {ListButton(images.SignOutIcon(), 'sign out')}
          {ListButton(
            images.DeleteIcon(),
            'Delete Account',
            'DeleteAlert',
            true,
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Profile;

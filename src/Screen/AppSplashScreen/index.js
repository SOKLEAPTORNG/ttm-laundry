import React from 'react';
import {Image} from 'react-native';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import images from '../../Common/images';
import {styles} from './styles';

export default function AppSplashScreen() {
  return (
    <Layout
      backgroundColor={Color.LIGHT}
      justifyContent={'center'}
      alignItems={'center'}>
      <Image style={styles.splashImage} source={images.SplashImage()} />
    </Layout>
  );
}

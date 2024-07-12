import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import {Color} from '../../Constant';
import AppLongButton from '../../Component/Share/AppLongButton';
import {useNavigation} from '@react-navigation//core';

export default function LanguageScreen() {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState('English');

  const handlePress = buttonText => {
    setActiveButton(buttonText);
  };

  return (
    <Layout>
      <TouchableOpacity
        style={[
          styles.languageButton,
          {marginTop: 5},
          activeButton === 'Khmer' && {borderBlockColor: Color.GOLD},
        ]}
        onPress={() => handlePress('Khmer')}>
        <AppText
          style={[
            styles.languageLabel,
            activeButton === 'Khmer' && {color: Color.GOLD},
          ]}>
          Khmer
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageButton,
          activeButton === 'English' && {borderBlockColor: Color.GOLD},
        ]}
        onPress={() => handlePress('English')}>
        <AppText
          style={[
            styles.languageLabel,
            activeButton === 'English' && {color: Color.GOLD},
          ]}>
          English
        </AppText>
      </TouchableOpacity>
      <AppLongButton
        position={'absolute'}
        alignSelf={'center'}
        bottom={15}
        title={'Submit'}
        onPress={() => navigation.goBack()}
      />
    </Layout>
  );
}

import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';

const ListButton = [
  {icon: images.GlobalIcon(), label: 'www.info@ttmlaundry.com'},
  {icon: images.FacebookIcon(), label: 'TTM Commercial Laundry'},
  {icon: images.EmailIcon(), label: 'bunhuy@ttmlaundry.com'},
  {icon: images.TelegramIcon(), label: '+855 12 955 002'},
  {icon: images.MainCallIcon(), label: '+855 12 955 002'},
];

export default function HelpCenter() {
  return (
    <Layout paddingHorizontal={0}>
      <Image style={styles.coverImage} source={images.HelpCenterCover()} />
      <View style={styles.contentScreen}>
        <AppText style={styles.contactLabel}>Contact info</AppText>
        {ListButton.map((info, index) => (
          <TouchableOpacity key={index} style={styles.rowContainer}>
            <Image style={styles.defaultIcon} source={info.icon} />
            <AppText style={styles.defaultLabel}>{info.label}</AppText>
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  );
}

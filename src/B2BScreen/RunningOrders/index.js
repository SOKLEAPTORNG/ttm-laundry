import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import AppText from '../../Component/Share/AppText';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function B2BRunningOrders() {
  const data = [
    {
      id: '1',
      image: images.StaticHotel1(),
      itemLabel: 'KK Hotel',
      location: 'Siem Reap, Cambodia',
      date: '20 Mar 2023 04:56 PM',
      price: '$ 50.59',
    },
    {
      id: '2',
      image: images.StaticHotel2(),
      itemLabel: 'KP Hotel',
      location: 'Siem Reap, Cambodia',
      date: '21 Mar 2023 05:30 PM',
      price: '$ 60.99',
    },
    {
      id: '3',
      image: images.StaticHotel3(),
      itemLabel: 'Bush.T Hotel',
      location: 'Siem Reap, Cambodia',
      date: '21 Mar 2023 05:30 PM',
      price: '$ 60.99',
    },
  ];

  const renderItem = ({item, index}) => (
    <AppCard
      activeOpacity={0.2}
      flexDirection={'row'}
      paddingVertical={5}
      paddingHorizontal={10}
      marginTop={10}
      marginBottom={index === data.length - 1 ? 15 : 0}
      isShowShadow={true}
      width="99%"
      alignSelf={'center'}>
      <Image style={styles.imageItem} source={item.image} />
      <View style={styles.cardItem}>
        <AppText style={styles.itemLabel}>{item.itemLabel}</AppText>
        <AppText style={styles.locationLabel}>{item.location}</AppText>
        <View style={styles.rowContainer}>
          <Icon style={styles.clockIcon} name="clock" />
          <AppText style={styles.dateLabel}>{item.date}</AppText>
        </View>
      </View>
    </AppCard>
  );

  return (
    <Layout>
      <View style={styles.screen}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
}

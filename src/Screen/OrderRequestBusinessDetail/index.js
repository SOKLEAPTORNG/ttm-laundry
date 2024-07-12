import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import AppText from '../../Component/Share/AppText';
import AppCustomHeader from '../../Component/Share/AppCustomHeader';
import AppHeaderTitle from '../../Component/Share/AppHeaderTitle';
import {useNavigation} from '@react-navigation/core';

const data = [
  {
    id: '1',
    image: images.StaticHotel3(),
    itemID: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    pickUp: 'Pick up time: 3:00 PM - 4:00 PM',
    amount: 'New',
  },
  {
    id: '2',
    image: images.StaticHotel3(),
    itemID: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    pickUp: 'Pick up time: 3:00 PM - 4:00 PM ',
    amount: 'New',
  },
];

export default function OrderRequestBusinessDetail({route}) {
  const navigation = useNavigation();
  const {itemLabel} = route.params;

  const renderItem = ({item, index}) => (
    <AppCard
      padding={0}
      activeOpacity={0.2}
      flexDirection={'row'}
      marginTop={10}
      marginBottom={index === data.length - 1 ? 15 : 0}
      isShowShadow={true}
      width="99%"
      alignSelf={'center'}>
      <Image style={styles.imageItem} source={item.image} />
      <View style={styles.cardItem}>
        <AppText style={styles.itemID}>{item.itemID}</AppText>
        <AppText style={styles.itemLocation}>{item.itemLocation}</AppText>
        <AppText style={styles.pickUpLabel}>{item.pickUp}</AppText>
        <View style={styles.itemRadius}>
          <AppText style={styles.itemRadiusLabel}>COD</AppText>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <AppText style={styles.itemAmount}>{item.amount}</AppText>
      </View>
    </AppCard>
  );

  return (
    <Layout>
      <AppCustomHeader justifyContent={'center'}>
        <AppHeaderTitle title={itemLabel} />
      </AppCustomHeader>
      <FlatList
        style={styles.screen}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
}

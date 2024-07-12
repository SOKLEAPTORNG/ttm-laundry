import React, {useState} from 'react';
import {
  FlatList,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import AppText from '../../Component/Share/AppText';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Color} from '../../Constant';
import {useNavigation} from '@react-navigation/core';

const data = [
  {
    id: '1',
    image: images.StaticHotel3(),
    itemLabel: 'KK Hotel',
    itemLocation: 'Siem Reap, Cambodia',
    date: '3:00 PM - 4:00 PM ',
    amount: '2',
  },
  {
    id: '2',
    image: images.StaticHotel2(),
    itemLabel: 'KP Hotel',
    itemLocation: 'Siem Reap, Cambodia',
    date: '20 Mar 2023 04:56 PM',
    amount: '10',
  },
  {
    id: '3',
    image: images.StaticHotel1(),
    itemLabel: 'Bush.T Hotel',
    itemLocation: 'Siem Reap, Cambodia',
    date: '20 Mar 2023 04:56 PM',
    amount: '3',
  },
];

export default function B2BOrderRequest() {
  const navigation = useNavigation();
  const [activeDay, setActiveDay] = useState('Tuesday');

  const selectDay = day => {
    setActiveDay(day);
  };

  const renderItem = ({item, index}) => (
    <AppCard
      padding={0}
      activeOpacity={0.2}
      flexDirection={'row'}
      marginTop={10}
      marginBottom={index === data.length - 1 ? 15 : 0}
      isShowShadow={true}
      width="99%"
      alignSelf={'center'}
      onPress={() =>
        navigation.navigate('OrderRequestBusinessDetail', {
          itemLabel: item.itemLabel,
        })
      }>
      <Image style={styles.imageItem} source={item.image} />
      <View style={styles.cardItem}>
        <AppText style={styles.itemLabel}>{item.itemLabel}</AppText>
        <AppText style={styles.itemLocation}>{item.itemLocation}</AppText>
        <View style={styles.rowContainer}>
          <Icon style={styles.clockIcon} name="clock" />
          <AppText style={styles.dateLabel}>{item.date}</AppText>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <AppText style={styles.itemAmount}>{item.amount}</AppText>
      </View>
    </AppCard>
  );

  return (
    <Layout paddingHorizontal={0}>
      <View style={styles.scollHorizontalWrapper}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            height: 40,
            backgroundColor: Color.LIGHT,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ].map(day => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayContainer,
                {
                  backgroundColor:
                    activeDay === day ? Color.SUCCESS : Color.LIGHT,
                },
              ]}
              onPress={() => selectDay(day)}>
              <AppText
                style={[
                  styles.dayLabel,
                  {color: activeDay === day ? Color.LIGHT : Color.DARK},
                ]}>
                {day}
              </AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {activeDay === 'Sunday' && (
        <View style={styles.emptyScreen}>
          <AppText>Sunday Item</AppText>
        </View>
      )}
      {activeDay === 'Monday' && (
        <View style={styles.emptyScreen}>
          <AppText>Monday Item</AppText>
        </View>
      )}
      {activeDay === 'Tuesday' && (
        <View style={styles.screen}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {activeDay === 'Wednesday' && (
        <View style={styles.emptyScreen}>
          <AppText>Wednesday Item</AppText>
        </View>
      )}
      {activeDay === 'Thursday' && (
        <View style={styles.emptyScreen}>
          <AppText>Thursday Item</AppText>
        </View>
      )}
      {activeDay === 'Friday' && (
        <View style={styles.emptyScreen}>
          <AppText>Friday Item</AppText>
        </View>
      )}
      {activeDay === 'Saturday' && (
        <View style={styles.emptyScreen}>
          <AppText>Saturday Item</AppText>
        </View>
      )}
    </Layout>
  );
}

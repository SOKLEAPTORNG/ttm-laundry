import React, {useState} from 'react';
import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import AppText from '../../Component/Share/AppText';
import {useNavigation} from '@react-navigation/core';
import {Color} from '../../Constant';

const TabButton = ({label, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.tabBar, isActive && styles.activeTabBar]}
    onPress={onPress}>
    <AppText style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
      {label}
    </AppText>
  </TouchableOpacity>
);

const TabScreen = ({isActive, children}) => (
  <View style={[isActive && styles.tabScreen]}>
    {isActive && <View style={{flex: 1}}>{children}</View>}
  </View>
);

const data = [
  {
    id: '1',
    image: images.StaticHotel3(),
    itemCode: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    date: 'Pick up time: 3:00 PM - 4:00 PM ',
  },
  {
    id: '2',
    image: images.StaticHotel3(),
    itemCode: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    date: 'Pick up time: 3:00 PM - 4:00 PM ',
  },
  {
    id: '3',
    image: images.StaticHotel3(),
    itemCode: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    date: 'Pick up time: 3:00 PM - 4:00 PM ',
  },
  {
    id: '4',
    image: images.StaticHotel3(),
    itemCode: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    date: 'Pick up time: 3:00 PM - 4:00 PM ',
  },
  {
    id: '5',
    image: images.StaticHotel3(),
    itemCode: 'ORDER ID #100021',
    itemLocation: 'Siem Reap, Cambodia',
    date: 'Pick up time: 3:00 PM - 4:00 PM ',
  },
];

const B2BMyOrder = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveLabel] = useState('firstTab');

  const handleLabelClick = label => {
    setActiveLabel(label);
  };

  const renderNewOrder = ({item, index}) => (
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
        <AppText style={styles.itemCode}>{item.itemCode}</AppText>
        <AppText style={styles.itemLocation}>{item.itemLocation}</AppText>
        <AppText style={styles.dateLabel}>{item.date}</AppText>
        <View style={styles.itemRadius}>
          <AppText style={styles.radiusLabe}>COD</AppText>
        </View>
      </View>
      <View style={styles.statusItemContainer}>
        <AppText style={styles.statusText}>New</AppText>
      </View>
    </AppCard>
  );

  const renderIndebtedOrder = ({item, index}) => (
    <AppCard
      padding={0}
      activeOpacity={0.2}
      flexDirection={'row'}
      marginTop={10}
      marginBottom={index === data.length - 1 ? 15 : 0}
      isShowShadow={true}
      width="99%"
      alignSelf={'center'}
      onPress={() => navigation.navigate('B2BMyOrderDetail')}>
      <Image style={styles.imageItem} source={item.image} />
      <View style={styles.cardItem}>
        <AppText style={styles.itemCode}>{item.itemCode}</AppText>
        <AppText style={styles.itemLocation}>{item.itemLocation}</AppText>
        <AppText style={styles.dateLabel}>{item.date}</AppText>
        <View style={styles.itemRadius}>
          <AppText style={styles.radiusLabe}>COD</AppText>
        </View>
      </View>
      <View
        style={[
          styles.statusItemContainer,
          {backgroundColor: Color.PLACEHOLDER},
        ]}>
        <AppText style={[styles.statusText, {color: Color.GOLD}]}>
          Owe Orders
        </AppText>
      </View>
    </AppCard>
  );

  const renderOldOrder = ({item, index}) => (
    <AppCard
      padding={0}
      activeOpacity={0.2}
      flexDirection={'row'}
      marginTop={10}
      marginBottom={index === data.length - 1 ? 15 : 0}
      isShowShadow={true}
      width="99%"
      alignSelf={'center'}
      onPress={() => navigation.navigate('MyOrderDetailOldOrder')}>
      <Image style={styles.imageItem} source={item.image} />
      <View style={styles.cardItem}>
        <AppText style={styles.itemCode}>{item.itemCode}</AppText>
        <AppText style={styles.itemLocation}>{item.itemLocation}</AppText>
        <AppText style={styles.dateLabel}>{item.date}</AppText>
        <View style={styles.itemRadius}>
          <AppText style={styles.radiusLabe}>COD</AppText>
        </View>
      </View>
      <View
        style={[styles.statusItemContainer, {backgroundColor: Color.SUCCESS}]}>
        <AppText style={styles.statusText}>Completed</AppText>
      </View>
    </AppCard>
  );

  return (
    <Layout paddingHorizontal={0}>
      <View style={styles.rowContainer}>
        <TabButton
          label="New Orders"
          isActive={activeTab === 'firstTab'}
          onPress={() => handleLabelClick('firstTab')}
        />
        <TabButton
          label="Indebted Orders"
          isActive={activeTab === 'secondTab'}
          onPress={() => handleLabelClick('secondTab')}
        />
        <TabButton
          label="Old Orders"
          isActive={activeTab === 'thirdTab'}
          onPress={() => handleLabelClick('thirdTab')}
        />
      </View>

      <TabScreen isActive={activeTab === 'firstTab'}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderNewOrder}
          showsVerticalScrollIndicator={false}
        />
      </TabScreen>

      <TabScreen isActive={activeTab === 'secondTab'}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderIndebtedOrder}
          showsVerticalScrollIndicator={false}
        />
      </TabScreen>

      <TabScreen isActive={activeTab === 'thirdTab'}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderOldOrder}
          showsVerticalScrollIndicator={false}
        />
      </TabScreen>
      <View style={styles.totalWrapper}>
        <AppCard
          isShowShadow={true}
          justifyContent={'space-between'}
          flexDirection={'row'}>
          <AppText style={styles.totalLabel}>Total</AppText>
          <AppText style={styles.totalAmount}>$ 250.50</AppText>
        </AppCard>
      </View>
    </Layout>
  );
};

export default B2BMyOrder;

import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppStroke from '../../Component/Share/AppStroke';
import AppCard from '../../Component/Share/AppCard';
import Icon from 'react-native-vector-icons/Feather';
import SwipeButton from 'rn-swipe-button';
import DeliverySuccess from '../../Screen/DeliverySuccess';
import {useNavigation} from '@react-navigation/core';

export default function RunningOrderDetail() {
  const navigation = useNavigation();
  const itemData = [
    {
      id: '1',
      image: images.StaticHoodie(),
      label: 'Hoodie',
      price: '$ 10.59',
      qty: 3,
    },
    {
      id: '2',
      image: images.StaticDress(),
      label: 'Dress',
      price: '$ 10.59',
      qty: 2,
    },
    {
      id: '3',
      image: images.StaticTShirt(),
      label: 'T-Shirt',
      price: '$ 10.59',
      qty: 4,
    },
    {
      id: '4',
      image: images.StaticCoat(),
      label: 'Winter Coat',
      price: '$ 10.59',
      qty: 1,
    },
  ];

  const renderCardItem = ({item, index}) => (
    <AppCard
      width="99%"
      alignSelf={'center'}
      isShowShadow={true}
      flexDirection={'row'}
      marginBottom={index === itemData.length - 1 ? 30 : 0}
      marginTop={10}>
      <Image style={styles.itemImage} source={item.image} />
      <View style={styles.columnItem}>
        <AppText style={styles.itemLabel}>{item.label}</AppText>
        <AppText style={styles.itemPrice}>{item.price}</AppText>
      </View>
      <AppText style={styles.qty}>QTY: {item.qty}</AppText>
    </AppCard>
  );

  const AppSwipeButton = () => {
    return (
      <TouchableOpacity style={styles.actionSwipeButton}>
        <Image style={styles.swipeRightIcon} source={images.SwipeRightIcon()} />
      </TouchableOpacity>
    );
  };

  return (
    <Layout paddingHorizontal={0}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Color.APPBACKGROUND,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.besideSwipeContent}>
          <View style={[styles.rowContainer, {marginTop: 10}]}>
            <AppText style={styles.defaulText}>ORDER ID #100021</AppText>
            <AppText style={styles.defaulText}>Accept</AppText>
          </View>
          <View style={styles.rowContainer}>
            <AppText style={styles.defaulText}>Item: 10</AppText>
            <View style={styles.itemRadius}>
              <AppText style={[styles.defaulText, {color: Color.LIGHT}]}>
                COD
              </AppText>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <AppText style={styles.defaulText}>Orders Price</AppText>
            <AppText style={[styles.defaulText, {color: Color.GOLD}]}>
              $ 50.00
            </AppText>
          </View>
          <AppStroke marginVertical={15} />
          <AppCard isShowShadow={true} width="99%" alignSelf={'center'}>
            <AppText style={styles.appCardLabel}>customer contact info</AppText>
            <View style={styles.rowContainer}>
              <Image
                style={styles.appCardImage}
                source={images.MaleStaticImage()}
              />
              <View style={styles.appCardInfoContent}>
                <AppText style={styles.defaulText}>Sothearith</AppText>
                <AppText style={styles.infoGrayText}>
                  Pick Up: No. 02, Street 07, Siem Reap, Cambodia
                </AppText>
                <AppText style={styles.infoGrayText}>
                  Delivery: No. 02, Street 07, Siem Reap, Cambodia
                </AppText>
                <View style={[styles.rowContainer, {alignSelf: 'flex-start'}]}>
                  <TouchableOpacity style={styles.rowButton}>
                    <Icon style={styles.callIcon} name="phone-call" />
                    <AppText style={styles.successInfoText}>Call</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowButton}>
                    <Image
                      style={styles.imageButtonIcon}
                      source={images.MessageIcon()}
                    />
                    <AppText style={styles.successInfoText}>Call</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rowButton}>
                    <Image
                      style={styles.imageButtonIcon}
                      source={images.DirectionIcon()}
                    />
                    <AppText style={[styles.defaulText, {color: Color.DANGER}]}>
                      Call
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </AppCard>
          <FlatList
            data={itemData}
            keyExtractor={item => item.id}
            renderItem={renderCardItem}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity
            style={styles.orderTrackingContainer}
            onPress={() => navigation.navigate('OrderTrackingDetail')}>
            <AppText style={styles.orderTrackingLabel}>Order Tracking</AppText>
            <Icon style={styles.righArrowIcon} name="chevron-right" />
          </TouchableOpacity>
        </View>

        <View style={styles.swipeWrapper}>
          <SwipeButton
            height={50}
            title="Swipe to pick up order"
            titleStyles={styles.swipeText}
            containerStyles={{borderRadius: 10}}
            railStyles={styles.swipeContainer}
            railBackgroundColor={Color.PLACEHOLDER}
            railBorderColor={Color.PLACEHOLDER}
            thumbIconComponent={AppSwipeButton}
            thumbIconImageSource={images.SwipeRightIcon}
            thumbIconStyles={{borderRadius: 10}}
            thumbIconWidth={60}
          />
        </View>
        {/* handle DeliverySuccess BottomSheet - Display smaple*/}
        {/* <DeliverySuccess/> */}
      </ScrollView>
    </Layout>
  );
}

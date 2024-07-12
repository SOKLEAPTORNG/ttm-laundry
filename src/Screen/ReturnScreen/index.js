import React, {useState} from 'react';
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/core';
import AppLongButton from '../../Component/Share/AppLongButton';

export default function ReturnScreen() {
  const navigation = useNavigation();
  const [itemData, setItemData] = useState([
    {
      id: '1',
      image: images.Metress(),
      label: 'Metress Cover',
      price: '$ 10.59',
      qty: 1,
    },
    {
      id: '2',
      image: images.Curtain(),
      label: 'Curtrains',
      price: '$ 10.59',
      qty: 2,
    },
    {
      id: '3',
      image: images.Tower(),
      label: 'Tower',
      price: '$ 10.59',
      qty: 4,
    },
    {
      id: '4',
      image: images.Bartrobe(),
      label: 'Bartrobe',
      price: '$ 10.59',
      qty: 5,
    },
  ]);

  const increaseQty = index => {
    const updatedItemData = [...itemData];
    updatedItemData[index].qty += 1;
    setItemData(updatedItemData);
  };

  const decreaseQty = index => {
    const updatedItemData = [...itemData];
    if (updatedItemData[index].qty > 0) {
      updatedItemData[index].qty -= 1;
      setItemData(updatedItemData);
    }
  };

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
      <View style={styles.qtyRowContainer}>
        <TouchableOpacity
          style={styles.qtyButton}
          onPress={() => increaseQty(index)}>
          <FontAwesome6 style={styles.qtyIcon} name="plus" />
        </TouchableOpacity>
        <AppText style={styles.qtyAmount}>{item.qty}</AppText>
        <TouchableOpacity
          style={styles.qtyButton}
          onPress={() => decreaseQty(index)}>
          <FontAwesome6 style={styles.qtyIcon} name="minus" />
        </TouchableOpacity>
      </View>
    </AppCard>
  );

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Color.APPBACKGROUND,
        }}
        showsVerticalScrollIndicator={false}>
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
          <AppText style={styles.appCardLabel}>Business Contact info</AppText>
          <View style={styles.rowContainer}>
            <Image style={styles.appCardImage} source={images.StaticHotel3()} />
            <View style={styles.appCardInfoContent}>
              <AppText style={styles.defaulText}>KK Hotel</AppText>
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
        <AppLongButton
          title={'Submit'}
          marginBottom={15}
          onPress={() => navigation.navigate('ReturnDetailScreen')}
        />
      </ScrollView>
    </Layout>
  );
}

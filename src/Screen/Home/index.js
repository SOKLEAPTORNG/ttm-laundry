import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Color} from '../../Constant';
import {Layout} from '../../Component';
import AppCustomHeader from '../../Component/Share/AppCustomHeader';
import images from '../../Common/images';
import AppText from '../../Component/Share/AppText';
import AppCard from '../../Component/Share/AppCard';
import AppButton from '../../Component/Share/AppButton';

export default function Home() {
  const navigation = useNavigation();
  const [isOnline, setIsOnline] = useState(false);
  const translateX = new Animated.Value(0);
  const backgroundColor = new Animated.Value(isOnline ? 1 : 0);

  // following prototype
  // useEffect(() => {
  //   navigation.navigate('LoginScreen');
  // });

  const handleButtonPress = () => {
    setIsOnline(!isOnline);

    Animated.parallel([
      Animated.timing(translateX, {
        toValue: isOnline ? 200 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(backgroundColor, {
        toValue: isOnline ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Color.APPBACKGROUND,
        }}
        showsVerticalScrollIndicator={false}>
        <AppCustomHeader
          justifyContent={'space-between'}
          paddingHorizontal={0}
          flexDirection={'row'}>
          <Image style={styles.appLogo} source={images.AppLogo()} />
          <View style={styles.rowContainer}>
            <TouchableOpacity>
              <Image style={styles.bellIcon} source={images.BellIcon()} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleButtonPress}>
              <Animated.View
                style={[
                  styles.swipeContainer,
                  {
                    backgroundColor: backgroundColor.interpolate({
                      inputRange: [0, 1],
                      outputRange: [Color.GRAY, Color.SUCCESS],
                    }),
                    transform: [
                      {
                        translateX: translateX.interpolate({
                          inputRange: [0, 200],
                          outputRange: [0, 200],
                        }),
                      },
                    ],
                  },
                ]}>
                {isOnline ? (
                  <>
                    <AppText style={styles.offOnLineText}>Online</AppText>
                    <View style={[styles.swipeButton, {marginLeft: 6}]} />
                  </>
                ) : (
                  <>
                    <View style={[styles.swipeButton, {marginRight: 6}]} />
                    <AppText style={styles.offOnLineText}>Offline</AppText>
                  </>
                )}
              </Animated.View>
            </TouchableOpacity>
          </View>
        </AppCustomHeader>
        <View
          style={[
            styles.rowContainer,
            {justifyContent: 'space-between', marginVertical: 10},
          ]}>
          <AppText style={styles.boldLabel}>Active Order</AppText>
          <TouchableOpacity
            onPress={() => navigation.navigate('RunningOrders')}>
            <AppText style={styles.defaultText}>View All</AppText>
          </TouchableOpacity>
        </View>
        <AppCard backgroundColor={Color.PLACEHOLDER}>
          <AppText style={styles.defaultText}>ORDER ID #100021</AppText>
          <View style={[styles.rowContainer, {marginTop: 5}]}>
            <Image style={styles.defaultIcon} source={images.ProfileIcon()} />
            <AppText style={styles.defaultText}>Customer Loation</AppText>
          </View>
          <View style={[styles.rowContainer, {marginTop: 5}]}>
            <Image
              style={[styles.defaultIcon, {marginLeft: -1}]}
              source={images.LocationIcon()}
            />
            <AppText style={styles.defaultText}>
              Pick Up: No.02, Street 03, Siem Reap, Cambodia
            </AppText>
          </View>
          <View style={[styles.rowContainer, {marginTop: 5}]}>
            <Image
              style={[styles.defaultIcon, {marginLeft: -1}]}
              source={images.LocationIcon()}
            />
            <AppText style={styles.defaultText}>
              Delivery: No.02, Street 03, Siem Reap, Cambodia
            </AppText>
          </View>
          <View style={[styles.rowContainer, {marginTop: 15}]}>
            <AppButton
              flex={1}
              backgroundColor={Color.LIGHT}
              titleStyle={{color: Color.SUCCESS}}
              title={'Detail'}
              marginRight={15}
              onPress={() => navigation.navigate('EditOrderDetail')}
            />
            <AppButton
              flex={1}
              title={'Direction'}
              onPress={() => navigation.navigate('OrderTrackingDetail')}
            />
          </View>
        </AppCard>
        <AppText style={[styles.boldLabel, {marginVertical: 10}]}>
          Earnings
        </AppText>
        <AppCard backgroundColor={Color.SUCCESS}>
          <View style={styles.rowContainer}>
            <Image style={styles.walletIcon} source={images.WalletIcon()} />
            <View style={styles.columnContent}>
              <AppText style={[styles.earningDefaultText, {textAlign: 'left'}]}>
                Balance
              </AppText>
              <AppText
                style={[
                  styles.earningDefaultText,
                  {marginTop: 5, textAlign: 'left'},
                ]}>
                $ 1,638.68
              </AppText>
            </View>
          </View>
          <View
            style={[
              styles.rowContainer,
              {marginTop: 10, justifyContent: 'space-between'},
            ]}>
            <View style={styles.columnContent}>
              <AppText style={styles.earningDefaultText}>Today</AppText>
              <AppText style={[styles.earningDefaultText, {marginTop: 5}]}>
                $ 1,638.68
              </AppText>
            </View>
            <View
              style={[
                styles.columnContent,
                {
                  borderLeftWidth: 1,
                  borderLeftColor: Color.LIGHT,
                  borderRightWidth: 1,
                  borderRightColor: Color.LIGHT,
                  paddingHorizontal: 20,
                },
              ]}>
              <AppText style={styles.earningDefaultText}>This Week</AppText>
              <AppText style={[styles.earningDefaultText, {marginTop: 5}]}>
                $ 0.00
              </AppText>
            </View>
            <View style={styles.columnContent}>
              <AppText style={styles.earningDefaultText}>This Month</AppText>
              <AppText style={[styles.earningDefaultText, {marginTop: 5}]}>
                $ 0.00
              </AppText>
            </View>
          </View>
        </AppCard>
        <AppText style={[styles.boldLabel, {marginVertical: 10}]}>
          Orders
        </AppText>
        <View style={[styles.rowContainer, {height: 184, width: '100%'}]}>
          <View
            style={[
              styles.dashBoard,
              {marginRight: 15, backgroundColor: '#8DB02A'},
            ]}>
            <AppText style={styles.orderAmount}>10</AppText>
            <AppText style={styles.dashboardText}>Today’s Orders</AppText>
          </View>
          <View style={[styles.dashBoard, {backgroundColor: '#E6AE0E'}]}>
            <AppText style={styles.orderAmount}>20</AppText>
            <AppText style={styles.dashboardText}>This Week Orders</AppText>
          </View>
        </View>
        <View
          style={[
            styles.dashBoard,
            {height: 120, backgroundColor: '#D2D2CB', marginVertical: 15},
          ]}>
          <AppText style={styles.orderAmount}>10</AppText>
          <AppText style={styles.dashboardText}>Total Orders</AppText>
        </View>
        <View
          style={[
            styles.dashBoard,
            {height: 120, backgroundColor: Color.SUCCESS, marginBottom: 15},
          ]}>
          <AppText style={styles.orderAmount}>4540.37</AppText>
          <AppText style={styles.dashboardText}>Cash In Your Hand</AppText>
        </View>
      </ScrollView>
    </Layout>
  );
}

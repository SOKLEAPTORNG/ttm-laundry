import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppCustomHeader from '../../Component/Share/AppCustomHeader';
import Back from '../../Component/Back';
import AppHeaderTitle from '../../Component/Share/AppHeaderTitle';
import AppText from '../../Component/Share/AppText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../../Constant';
import MapView from 'react-native-maps';

export default function OrderTrackingDetail() {
  return (
    <Layout paddingHorizontal={0} backgroundColor="pink">
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <AppCustomHeader
        paddingHorizontal={0}
        justifyContent={'flex-end'}
        height={60}
        position={'absolute'}
        top={0}
        zIndex={999}
        backgroundColor="transparent">
        <Back position={'absolute'} left={15} alignSelf={'center'} />
        <AppHeaderTitle title={'Order Details'} />
      </AppCustomHeader>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
      </View>
      <View style={styles.screen}>
        <View style={styles.listItem}>
          <Image style={styles.listItemIcon} source={images.OrderPlaceIcon()} />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>Order Place</AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={[styles.checkContainer, {borderColor: Color.GOLD}]}>
            <Icon
              style={[styles.checkIcon, {color: Color.GOLD}]}
              name="check"
            />
          </View>
          <Image
            style={[styles.dashLine, {tintColor: Color.GOLD}]}
            source={images.DashLine()}
          />
        </View>
        <View style={styles.listItem}>
          <Image style={styles.listItemIcon} source={images.AcceptIcon()} />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>Accept</AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={styles.checkContainer}>
            <Icon style={styles.checkIcon} name="check" />
          </View>
          <Image style={styles.dashLine} source={images.DashLine()} />
        </View>
        <View style={styles.listItem}>
          <Image style={styles.listItemIcon} source={images.PickUpIcon()} />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>Pick up</AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={styles.checkContainer}>
            <Icon style={styles.checkIcon} name="check" />
          </View>
          <Image style={styles.dashLine} source={images.DashLine()} />
        </View>
        <View style={styles.listItem}>
          <Image style={styles.listItemIcon} source={images.WashingIcon()} />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>Washing</AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={styles.checkContainer}>
            <Icon style={styles.checkIcon} name="check" />
          </View>
          <Image style={styles.dashLine} source={images.DashLine()} />
        </View>
        <View style={styles.listItem}>
          <Image style={styles.listItemIcon} source={images.DeliverIcon()} />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>
              Delivery is on the way
            </AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={styles.checkContainer}>
            <Icon style={styles.checkIcon} name="check" />
          </View>
          <Image style={styles.dashLine} source={images.DashLine()} />
        </View>
        <View style={styles.listItem}>
          <Image
            style={styles.listItemIcon}
            source={images.DeliverMoneyIcon()}
          />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>Delivered</AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={styles.checkContainer}>
            <Icon style={styles.checkIcon} name="check" />
          </View>
          <Image style={styles.dashLine} source={images.DashLine()} />
        </View>
        <View style={styles.listItem}>
          <Image style={styles.listItemIcon} source={images.ReturnItemIcon()} />
          <View style={styles.listItemInfo}>
            <AppText style={styles.listItemLabel}>Return Item</AppText>
            <AppText style={styles.dateLebel}>
              07 December 2022/ 02:00PM
            </AppText>
          </View>
          <View style={styles.checkContainer}>
            <Icon style={styles.checkIcon} name="check" />
          </View>
        </View>
      </View>
    </Layout>
  );
}

import React from 'react';
import {Image, View} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import AppText from '../../Component/Share/AppText';
import AppButton from '../../Component/Share/AppButton';
import {Color} from '../../Constant';

export default function OrderRequest() {
  return (
    <Layout>
      <AppCard
        borderRadius={0}
        marginTop={10}
        paddingHorizontal={10}
        isShowShadow={true}>
        <View style={styles.rowContainer}>
          <Image
            style={styles.appCardImage}
            source={images.MaleStaticImage()}
          />
          <View style={styles.appCardInfoContent}>
            <AppText style={styles.nameLabel}>Sothearith</AppText>
            <View style={styles.rowContainer}>
              <View style={styles.columnItem}>
                <AppText
                  style={styles.locationLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Pick Up: No. 02, Street 07, Siem Reap, Cambodia
                </AppText>
                <AppText
                  style={styles.locationLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  Delivery: No. 02, Street 07, Siem Reap, Cambodia
                </AppText>
              </View>
              <View style={styles.paidContainer}>
                <AppText style={styles.paidText}>$ 1,337.10</AppText>
                <AppText style={styles.paidText}>Digitally Paid</AppText>
              </View>
            </View>
          </View>
        </View>
        <AppText style={styles.itemLabel}>Item</AppText>
        <AppText style={styles.minuteLabel}>10 mins ago</AppText>
        <View style={styles.rowContainer}>
          <AppButton
            flex={1}
            title={'Ignore'}
            titleStyle={{fontSize: 16, color: Color.SUCCESS}}
            marginRight={5}
            backgroundColor={Color.LIGHT}
            borderRadius={5}
          />
          <AppButton
            flex={1}
            title={'Accept'}
            titleStyle={{fontSize: 16, color: Color.LIGHT}}
            borderRadius={5}
          />
        </View>
      </AppCard>
    </Layout>
  );
}

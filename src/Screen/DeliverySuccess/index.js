import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import AppLongButton from '../../Component/Share/AppLongButton';

export default function DeliverySuccess() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    setIsBottomSheetVisible(true);
  });

  const handleShowBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  return (
    <Layout paddingHorizontal={0}>
      <AppBottomSheet
        paddingHorizontal={15}
        visible={isBottomSheetVisible}
        closeModal={() => setIsBottomSheetVisible(false)}>
        <Image
          style={styles.successDollarImage}
          source={images.SuccessDollar()}
        />
        <AppText style={styles.bottomSheetDescription}>
          Collect money from customer
        </AppText>
        <AppText style={styles.orderAmountLabel}>
          Order Amount:
          <AppText style={{color: Color.GOLD}}> $ 42.36</AppText>
        </AppText>
        <AppLongButton
          title={'OK'}
          marginTop={20}
          marginBottom={15}
          onPress={handleCloseBottomSheet}
        />
      </AppBottomSheet>
    </Layout>
  );
}

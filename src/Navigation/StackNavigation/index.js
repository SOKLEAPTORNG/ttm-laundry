import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';
import {Color, Screen} from '../../Constant';
import EditButton from '../../Component/EditButton';
import {useNavigation} from '@react-navigation/native';
import AppSplashScreen from '../../Screen/AppSplashScreen';
import RunningOrders from '../../Screen/RunningOrders';
import Back from '../../Component/Back';
import AppHeaderTitle from '../../Component/Share/AppHeaderTitle';
import LoginScreen from '../../Screen/Login';
import RunningOrderDetail from '../../Screen/RunningOrderDetail';
import EditOrderDetail from '../../Screen/EditOrderDetail';
import OrderTrackingDetail from '../../Screen/OrderTrackingDetail';
import MyOrderDetail from '../../Screen/MyOrderDetail';
import MyOrderDetailEdit from '../../Screen/MyOrderDetailEdit';
import MyOrderDetailPickup from '../../Screen/MyOrderDetailPickup';
import EditProfile from '../../Screen/EditProfile';
import ChangePassword from '../../Screen/ChangePassword';
import AboutUs from '../../Screen/AboutUs';
import HelpCenter from '../../Screen/HelpCenter';
import LanguageScreen from '../../Screen/LanguageScreen';

// B2B Import
import B2BRunningOrders from '../../B2BScreen/RunningOrders';
import B2BOrderRequest from '../../B2BScreen/OrderRequest';
import OrderRequestBusinessDetail from '../../Screen/OrderRequestBusinessDetail';
import OrderRequestDetail from '../../Screen/OrderRequestDetail';
import EditOrderRequestDetail from '../../Screen/EditOrderRequestDetail';
import B2BMyOrderDetail from '../../B2BScreen/MyOrderDetail';
import MyOrderDetailOldOrder from '../../Screen/MyOrderDetailOldOrder';
import ReturnScreen from '../../Screen/ReturnScreen';
import ReturnDetailScreen from '../../Screen/ReturnDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Color.LIGHT,
        },
        headerLeft: function () {
          return <Back />;
        },
      }}>
      <Stack.Screen
        name={Screen.HOME}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'AppSplashScreen'}
        component={AppSplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'RunningOrders'}
        component={RunningOrders}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Running Orders'} />,
        }}
      />
      <Stack.Screen
        name={'RunningOrderDetail'}
        component={RunningOrderDetail}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
          headerRight: () => (
            <EditButton
              onPress={() => navigation.navigate('EditOrderDetail')}
            />
          ),
        }}
      />
      <Stack.Screen
        name={'EditOrderDetail'}
        component={EditOrderDetail}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'OrderTrackingDetail'}
        component={OrderTrackingDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'MyOrderDetail'}
        component={MyOrderDetail}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'MyOrderDetailEdit'}
        component={MyOrderDetailEdit}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'MyOrderDetailPickup'}
        component={MyOrderDetailPickup}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'EditProfile'}
        component={EditProfile}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Edit Profile'} />,
        }}
      />
      <Stack.Screen
        name={'ChangePassword'}
        component={ChangePassword}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Change Password'} />,
        }}
      />
      <Stack.Screen
        name={'AboutUs'}
        component={AboutUs}
        options={{
          headerTitle: () => <AppHeaderTitle title={'About Us'} />,
        }}
      />
      <Stack.Screen
        name={'HelpCenter'}
        component={HelpCenter}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Contact Us'} />,
        }}
      />
      <Stack.Screen
        name={'LanguageScreen'}
        component={LanguageScreen}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Languages'} />,
        }}
      />

      {/* B2B Screens */}
      <Stack.Screen
        name={'B2BRunningOrders'}
        component={B2BRunningOrders}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Running Orders'} />,
        }}
      />
      <Stack.Screen
        name={'B2BOrderRequest'}
        component={B2BOrderRequest}
        options={{
          headerBackVisible: false,
          headerLeft: null,
          headerTitle: () => <AppHeaderTitle title={'Business Orders'} />,
        }}
      />
      <Stack.Screen
        name={'OrderRequestBusinessDetail'}
        component={OrderRequestBusinessDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'OrderRequestDetail'}
        component={OrderRequestDetail}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
          headerRight: () => (
            <EditButton
              onPress={() => navigation.navigate('EditOrderRequestDetail')}
            />
          ),
        }}
      />
      <Stack.Screen
        name={'EditOrderRequestDetail'}
        component={EditOrderRequestDetail}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'B2BMyOrderDetail'}
        component={B2BMyOrderDetail}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'MyOrderDetailOldOrder'}
        component={MyOrderDetailOldOrder}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'ReturnScreen'}
        component={ReturnScreen}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
      <Stack.Screen
        name={'ReturnDetailScreen'}
        component={ReturnDetailScreen}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Order Details'} />,
        }}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen, Color} from '../../Constant';
import {HomeScreen, ProfileScreen, OrderRequest, MyOrder} from '../../Screen';
import images from '../../Common/images';
import AppHeaderTitle from '../../Component/Share/AppHeaderTitle';

// B2B import
import B2BOrderRequest from '../../B2BScreen/OrderRequest';
import B2BMyOrder from '../../B2BScreen/MyOrder';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.HOME_STACK}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.PROFILE_STACK}
        component={ProfileScreen}
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.LIGHT,
          },
          headerTitle: () => <AppHeaderTitle title={'Profile'} />,
        }}
      />
    </Stack.Navigator>
  );
}

function OrderRequestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.ORDERREQUEST_STACK}
        component={OrderRequest}
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.LIGHT,
          },
          headerTitle: () => <AppHeaderTitle title={'Customer Orders'} />,
        }}
      />
    </Stack.Navigator>
  );
}

// B2B
function B2BOrderRequestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.B2BORDERREQUEST_STACK}
        component={B2BOrderRequest}
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.LIGHT,
          },
          headerTitle: () => <AppHeaderTitle title={'Business Orders'} />,
        }}
      />
    </Stack.Navigator>
  );
}

function B2BMyOrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.B2BMY_ORDER_STACK}
        component={B2BMyOrder}
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.LIGHT,
          },
          headerTitle: () => <AppHeaderTitle title={'KK Hotel'} />,
        }}
      />
    </Stack.Navigator>
  );
}

function MyOrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.MY_ORDER_STACK}
        component={MyOrder}
        options={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Color.LIGHT,
          },
          headerTitle: () => <AppHeaderTitle title={'My Orders'} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.GOLD,
        tabBarInactiveTintColor: Color.DARK,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          height: 65,
          paddingTop: 7,
          paddingBottom: 7,
          backgroundColor: Color.LIGHT,
          borderTopWidth: 0.5,
        },
      }}>
      <Tab.Screen
        name={Screen.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.GOLD : Color.DARK;
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.HomeIcon()}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screen.ORDERREQUEST_TAB}
        component={OrderRequestStack}
        options={{
          tabBarLabel: 'Orders Request',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.GOLD : Color.DARK;
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.OrderRequest()}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screen.MY_ORDER_TAB}
        component={MyOrderStack}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.GOLD : Color.DARK;
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.OrderIcon()}
              />
            );
          },
        }}
      />
      {/* B2B */}
      {/* <Tab.Screen
        name={Screen.B2BORDERREQUEST_TAB}
        component={B2BOrderRequestStack}
        options={{
          tabBarLabel: 'Orders Request',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.GOLD : Color.DARK;
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.OrderRequest()}
              />
            );
          },
        }}
      /> */}
      {/* <Tab.Screen
        name={Screen.B2BMY_ORDER_TAB}
        component={B2BMyOrderStack}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.GOLD : Color.DARK;
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.OrderIcon()}
              />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name={Screen.PROFILE_TAB}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.GOLD : Color.DARK;
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.ProfileIcon()}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

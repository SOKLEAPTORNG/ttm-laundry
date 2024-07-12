import {StyleSheet} from 'react-native';
import {Font, Color} from '../../Constant';

export const styles = StyleSheet.create({
  appLogo: {
    width: 43,
    height: 40,
    resizeMode: 'stretch',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  swipeContainer: {
    height: 32,
    width: 80,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  offOnLineText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.LIGHT,
  },
  swipeButton: {
    borderRadius: 1000,
    width: 20,
    height: 20,
    backgroundColor: Color.LIGHT,
  },
  boldLabel: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  defaultText: {
    fontSize: 12,
    color: Color.DARK,
  },
  defaultIcon: {
    width: 16,
    height: 16,
    tintColor: Color.DARK,
    marginRight: 5,
  },
  walletIcon: {
    width: 33,
    height: 30,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  columnContent: {
    flex: 1,
    flexDirection: 'column',
  },
  earningDefaultText: {
    fontSize: 14,
    color: Color.LIGHT,
    textAlign: 'center',
  },
  dashBoard: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  orderAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Color.LIGHT,
    marginBottom: 10,
  },
  dashboardText: {
    fontSize: 16,
    color: Color.LIGHT,
    fontWeight: 'bold',
  },
});

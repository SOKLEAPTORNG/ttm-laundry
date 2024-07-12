import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    backgroundColor: Color.APPBACKGROUND,
    paddingHorizontal: 15,
  },
  tabBar: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabBar: {
    backgroundColor: Color.SUCCESS,
  },
  tabLabel: {
    fontSize: 14,
    color: Color.DARK,
  },
  activeTabLabel: {
    fontSize: 14,
    color: Color.LIGHT,
  },
  imageItem: {
    width: 100,
    height: 98,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cardItem: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  itemCode: {
    fontSize: 14,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 10,
    color: Color.DARKGRAY,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 12,
    color: Color.GRAY,
  },
  statusItemContainer: {
    height: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DANGER,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  statusText: {
    fontSize: 10,
    color: Color.LIGHT,
  },
  itemRadius: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: Color.SUCCESS,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  radiusLabe: {
    fontSize: 12,
    color: Color.LIGHT,
  },
  totalWrapper: {
    height: 'auto',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
    paddingTop: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: Color.DARK,
  },
  totalAmount: {
    fontSize: 16,
    color: Color.GOLD,
  },
});

import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APPBACKGROUND,
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
  itemID: {
    fontSize: 14,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 10,
    color: Color.DARKGRAY,
  },
  pickUpLabel: {
    fontSize: 12,
    color: Color.GRAY,
  },
  amountContainer: {
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
  itemAmount: {
    fontSize: 10,
    color: Color.LIGHT,
  },
  itemRadius: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: Color.SUCCESS,
    alignSelf: 'flex-start'
  },
  itemRadiusLabel: {
    fontSize: 10,
    color: Color.LIGHT,
  },
});

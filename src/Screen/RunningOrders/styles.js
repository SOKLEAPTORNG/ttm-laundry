import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageItem: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  cardItem: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  itemID: {
    fontSize: 12,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  itemLabel: {
    fontSize: 12,
    color: Color.DARKGRAY,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: 16,
    color: Color.DARK,
  },
  dateLabel: {
    fontSize: 12,
    color: Color.GRAY,
  },
  priceLabel: {
    fontSize: 16,
    color: Color.GOLD,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

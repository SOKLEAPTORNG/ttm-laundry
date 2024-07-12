import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageItem: {
    width: 100,
    height: 64,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  itemLabel: {
    fontSize: 18,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  locationLabel: {
    fontSize: 10,
    color: Color.GRAY,
  },
  cardItem: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  itemLabel: {
    fontSize: 12,
    color: Color.DARK,
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

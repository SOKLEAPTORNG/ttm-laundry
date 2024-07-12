import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APPBACKGROUND,
    paddingHorizontal: 15,
    width: '100%',
  },
  scollHorizontalWrapper: {
    width: '100%',
    height: 40,
  },
  dayContainer: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 14,
    color: Color.DARK,
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
  itemLabel: {
    fontSize: 18,
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
  clockIcon: {
    fontSize: 16,
    color: Color.DARK,
  },
  dateLabel: {
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
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

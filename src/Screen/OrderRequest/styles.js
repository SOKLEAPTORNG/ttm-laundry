import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  appCardImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  appCardInfoContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    height: 70,
    paddingLeft: 10,
  },
  nameLabel: {
    fontSize: 12,
    color: Color.DARK,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%'
  },
  columnItem: {
    flexDirection: 'column',
  },
  locationLabel: {
    fontSize: 12,
    color: Color.GRAY,
    width: 150,
  },
  paidContainer: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Color.SUCCESS,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Color.LIGHT,
    position: 'absolute',
    right: 0,
  },
  paidText: {
    fontSize: 10,
    color: Color.SUCCESS,
  },
  itemLabel: {
    fontSize: 14,
    color: Color.DARK,
    textAlign: 'center',
  },
  minuteLabel: {
    fontSize: 14,
    color: Color.SUCCESS,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

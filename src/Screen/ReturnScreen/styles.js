import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  defaulText: {
    fontSize: 12,
    color: Color.DARK,
  },
  itemRadius: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: Color.SUCCESS,
  },
  appCardLabel: {
    fontSize: 10,
    color: Color.DARK,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  appCardImage: {
    width: 60,
    height: 60,
    borderRadius: 1000,
    alignSelf: 'flex-start',
  },
  appCardInfoContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    height: '100%',
    paddingLeft: 10,
  },
  infoGrayText: {
    fontSize: 12,
    color: Color.DARKGRAY,
  },
  rowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
  },
  callIcon: {
    fontSize: 14,
    color: Color.SUCCESS,
    marginRight: 7,
  },
  successInfoText: {
    fontSize: 12,
    color: Color.SUCCESS,
  },
  imageButtonIcon: {
    width: 16,
    height: 16,
    resizeMode: 'stretch',
    margin: 7,
  },
  itemImage: {
    width: 67,
    height: 60,
    resizeMode: 'stretch',
  },
  columnItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 7,
    marginLeft: 10,
  },
  itemLabel: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: Color.GOLD,
  },
  qtyRowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
  },
  qtyButton: {
    width: 35,
    height: 35,
    borderRadius: 1000,
    backgroundColor: Color.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyIcon: {
    fontSize: 18,
    color: Color.LIGHT,
  },
  qtyAmount: {
    fontSize: 18,
    color: Color.DARK,
    marginHorizontal: 7,
  },
});

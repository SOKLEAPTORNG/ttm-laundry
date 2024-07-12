import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  besideSwipeContent: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Color.APPBACKGROUND,
  },
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
  qty: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 12,
    color: Color.DARK,
  },
  orderTrackingContainer: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.SUCCESS,
    justifyContent: 'space-between',
  },
  orderTrackingLabel: {
    fontSize: 16,
    color: Color.SUCCESS,
  },
  righArrowIcon: {
    fontSize: 20,
    color: Color.SUCCESS,
    marginTop: 3,
  },
  swipeWrapper: {
    height: 'auto',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: Color.APPBACKGROUND,
  },
  swipeContainer: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    height: 50,
    borderWidth: 0,
    justifyContent: 'center',
  },
  swipeText: {
    color: Color.SWIPETEXT,
    fontSize: 16,
    fontWeight: 'normal',
  },
  actionSwipeButton: {
    width: 60,
    height: 50,
    borderRadius: 10,
    backgroundColor: Color.SUCCESS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeRightIcon: {
    width: 28,
    height: 28,
    resizeMode: 'stretch',
  },
});

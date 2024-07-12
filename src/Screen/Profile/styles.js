import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APPBACKGROUND,
    alignItems: 'center',
  },
  profileContainer: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    marginTop: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 1000,
  },
  userName: {
    color: Color.DARK,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  phoneNumber: {
    fontSize: 14,
    color: Color.DARKGRAY,
  },
  defaultIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  defaultLabel: {
    fontSize: 20,
    color: Color.DARK,
    textTransform: 'capitalize',
  },
  darkLightButton: {
    position: 'absolute',
    right: 15,
  },
  darkLightContainer: {
    height: 27,
    width: 48,
    borderRadius: 25,
    justifyContent: 'center',
  },
  switchButton: {
    borderRadius: 1000,
    width: 20,
    height: 20,
    backgroundColor: Color.LIGHT,
  },
});

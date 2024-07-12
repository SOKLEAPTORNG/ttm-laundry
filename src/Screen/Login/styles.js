import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  splashImage: {
    width: 174,
    height: 198,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 50,
  },
  loginLabel: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  phoneNumContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: Color.PLACEHOLDER,
    marginBottom: 10,
  },
  flagContent: {
    flexDirection: 'row',
    height: 30,
    borderRadius: 5,
    backgroundColor: Color.LIGHT,
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  khFlag: {
    width: 36,
    height: 30,
    resizeMode: 'stretch',
  },
  numType: {
    fontSize: 12,
    color: Color.DARK,
    marginHorizontal: 3,
  },
  downIcon: {
    fontSize: 15,
    color: Color.DARK,
    marginTop: -6,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
});

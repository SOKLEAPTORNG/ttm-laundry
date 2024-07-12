import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APPBACKGROUND,
    justifyContent: 'center'
  },
  descriptionText: {
    fontSize: 16,
    color: Color.DARK,
    textAlign: 'center',
    marginBottom: 5,
  },
  phoneInputContainer: {
    width: '100%',
    height: 50,
    position: 'relative',
    backgroundColor: Color.LIGHT,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: Color.DARK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  eyeIconContainer: {
    alignSelf: 'center',
    marginRight: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});

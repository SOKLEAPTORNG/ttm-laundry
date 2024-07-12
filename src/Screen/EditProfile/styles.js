import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Color.APPBACKGROUND,
  },
  logoContainer: {
    width: 150,
    height: 150,
    borderRadius: 1000,
    position: 'relative',
    marginTop: 10,
    alignSelf: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 1000,
  },
  editLogoContainer: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 4,
    bottom: 4,
    zIndex: 1,
  },
  editIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  infoLabel: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
    marginTop: 15,
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
  flagSideContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  khFlag: {
    width: 36,
    height: 30,
    resizeMode: 'stretch',
  },
  codeLabel: {
    marginLeft: 5,
    color: Color.DARK,
    fontSize: 16,
  },
  downIcon: {
    color: Color.DARK,
    fontSize: 15,
    marginLeft: 2,
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

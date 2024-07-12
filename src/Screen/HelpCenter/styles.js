import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
    marginBottom: -15,
    zIndex: -1,
  },
  contentScreen: {
    flex: 1,
    backgroundColor: Color.LIGHT,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
    zIndex: 1,
  },
  contactLabel: {
    fontSize: 20,
    color: Color.DARK,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  rowContainer: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  defaultIcon: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
    marginRight: 15,
  },
  defaultLabel: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
});

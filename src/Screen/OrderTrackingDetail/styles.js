import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: 300,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  screen: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 15,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    backgroundColor: Color.LIGHT,
  },
  listItem: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
    position: 'relative'
  },
  listItemIcon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  listItemLabel: {
    fontSize: 16,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  dateLebel: {
    fontSize: 14,
    color: Color.DARK,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 1000,
    borderColor: Color.DARK,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.LIGHT,
  },
  checkIcon: {
    fontSize: 18,
    color: Color.DARK,
  },
  dashLine: {
    width: 3,
    height: 55,
    resizeMode: 'stretch',
    position:'absolute',
    right: 10,
    zIndex: -1,
    bottom: -28
  },
});

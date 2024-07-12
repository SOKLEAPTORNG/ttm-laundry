import {StyleSheet} from 'react-native';
import { Color } from '../../Constant';

export const styles = StyleSheet.create({
    successDollarImage: {
        width: 75,
        height: 60,
        resizeMode: 'stretch',
        marginVertical: 20,
      },
      bottomSheetDescription: {
        fontSize: 16,
        color: Color.DARK,
      },
      orderAmountLabel: {
        fontSize: 16,
        color: Color.DARK,
        fontWeight: 'bold',
        marginTop: 10
      }
});
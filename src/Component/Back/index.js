import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../../Constant';

export default function Back({position, left, top, alignSelf}) {
  const navigation = useNavigation();

  const handlePress = useCallback(
    function () {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
    [navigation],
  );

  return (
    <TouchableOpacity
      style={{position, left, top, alignSelf}}
      onPress={handlePress}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        color={Color.HEADERBACKARROW}
        style={{marginLeft: -7}}
      />
    </TouchableOpacity>
  );
}

import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants';

export const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {leftComponent}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>
      {rightComponent}
    </View>
  );
};

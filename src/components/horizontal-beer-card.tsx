import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES} from '../constants';

export const HorizontalBeerCard = ({
  containerStyle,
  imageStyle,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      <Image source={item.image} style={imageStyle} />

      <View style={{flex: 1}}>
        <Text style={{...FONTS.h3, fontSize: 17}}>{item.name}</Text>

        <Text style={{...FONTS.body5, color: COLORS.darkGray2}}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

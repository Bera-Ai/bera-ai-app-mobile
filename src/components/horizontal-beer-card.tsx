import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
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
        padding: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      <Image source={item.image} style={imageStyle} />

      <View style={{flex: 1, marginLeft: SIZES.base}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={15} color={COLORS.primary} />
              <Icon name="star" size={15} color={COLORS.primary} />
              <Icon name="star" size={15} color={COLORS.primary} />
              <Icon name="star" size={15} color={COLORS.primary} />
              <Icon name="star" size={15} color={COLORS.primary} />
            </View>
            <Text
              style={{
                ...FONTS.body7,
                lineHeight: 12,
                color: COLORS.darkGray2,
                marginLeft: 8,
              }}>
              ({item.reviews})
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                ...FONTS.body7,
                lineHeight: 12,
                color: COLORS.darkGray2,
                marginLeft: 4,
              }}>
              5,4 Km
            </Text>
            <Icon name="location" size={15} color={COLORS.darkGray2} />
          </View>
        </View>

        <Text style={{...FONTS.h4}} numberOfLines={1}>
          {item.name}
        </Text>

        <Text
          style={{
            ...FONTS.body7,
            lineHeight: 12,
            color: COLORS.darkGray2,
            marginVertical: 4,
          }}
          numberOfLines={2}>
          {item.description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              ...FONTS.body7,
              lineHeight: 12,
              color: COLORS.darkGray2,
            }}>
            Rótulos:
          </Text>

          <Text
            style={{
              ...FONTS.body7,
              lineHeight: 12,
              color: COLORS.darkGray2,
              marginLeft: 4,
              fontWeight: 'bold',
            }}>
            {item.rotulos}
          </Text>
          <Icon name="md-beer" size={15} color={COLORS.darkGray2} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

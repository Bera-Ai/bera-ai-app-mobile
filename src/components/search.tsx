import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export const Search = () => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
      }}>
      <Icon name="search" size={20} color={COLORS.darkGray} />

      <TextInput
        style={{
          flex: 1,
          height: 40,
          marginLeft: SIZES.radius,
          padding: 0,
          ...FONTS.body3,
        }}
        placeholder="Search Beer..."
      />

      <TouchableOpacity>
        <Icon name="filter" size={20} color={COLORS.darkGray} />
      </TouchableOpacity>
    </View>
  );
};

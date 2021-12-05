import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabButton = ({label, icon, isFocused, onPress}) => {
  const [state, setState] = useState<Animated.Value<0 | 1>>(
    new Animated.Value(0),
  );

  const scale = Animated.interpolateNode(state, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleFlex = Animated.interpolateNode(state, {
    inputRange: [0, 1],
    outputRange: [1, 4],
  });

  useEffect(() => {
    setState(isFocused ? new Animated.Value(1) : new Animated.Value(0));
  }, [isFocused]);

  return (
    <Animated.View
      style={{
        flex: scaleFlex,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        transform: [{scale}],
      }}>
      <TouchableWithoutFeedback
        onPress={onPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isFocused ? COLORS.primary : COLORS.white,
          borderRadius: SIZES.padding,
        }}>
        <Animated.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 60,
            borderRadius: SIZES.padding * 2,
            backgroundColor: isFocused ? COLORS.primary : COLORS.white,
          }}>
          {icon}

          {!!isFocused && (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                marginLeft: SIZES.base,
                color: COLORS.darkGray,
                ...FONTS.h3,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Animated} from 'react-native';
import DrawerNavigation from './drawer-navigation';

const Stack = createStackNavigator();

const forSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          title: 'DrawerNavigation',
          cardStyleInterpolator: forSlide,
        }}
      />
    </Stack.Navigator>
  );
};

import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES} from '../../constants';
import CartButton from './cart-button';

export const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          alignItems: 'center',
        }}>
        {leftComponent}
        {rightComponent}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          alignItems: 'flex-start',
          paddingVertical: SIZES.padding,
        }}>
        <View style={{flex: 2.5}}>
          <Text style={{...FONTS.h3}}>Qual bera você quer provar hoje?</Text>
          <Text style={{...FONTS.body6}}>
            Rua Teste de Test, 189 - Curitiba
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            flexDirection: 'row-reverse',
          }}>
          <CartButton itensInCartCount={5} />
        </View>
      </View>
    </View>
  );
};

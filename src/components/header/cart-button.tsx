import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, constants, FONTS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {setSelectedTab as storeSetSelectedTab} from '../../stores/tab/tab-actions';

type CartButtonProps = {
  itensInCartCount?: number;
};

const CartButton = ({itensInCartCount, ...props}: CartButtonProps) => {
  const {setSelectedTab} = props;

  const setActivatedTab = tab => {
    setSelectedTab(tab);
    // navigation.navigate(tab);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => setActivatedTab(constants.screens.cart)}
        style={{
          width: 40,
          borderColor: itensInCartCount ? COLORS.primary : COLORS.gray2,
          borderWidth: 1,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: SIZES.base,
          backgroundColor: itensInCartCount
            ? COLORS.primary
            : COLORS.transparent,
        }}>
        <Icon
          name="cart"
          size={30}
          color={itensInCartCount ? COLORS.white2 : COLORS.darkGray}
        />
        {!!itensInCartCount && (
          <Text
            style={{...FONTS.body5, fontWeight: 'bold', color: COLORS.white2}}>
            {itensInCartCount}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTab: selectedTab => dispatch(storeSetSelectedTab(selectedTab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);

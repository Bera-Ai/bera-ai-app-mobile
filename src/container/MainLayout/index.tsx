import {useDrawerProgress} from '@react-navigation/drawer';
import React, {useEffect, useRef} from 'react';
import {Text, View, Image} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import {connect} from 'react-redux';
import {setSelectedTab} from '../../stores/tab/tab-actions';
import LinearGradient from 'react-native-linear-gradient';

import {Home, Cart, Favorite, Notification, Search} from '../../pages';

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  dummyData,
  constants,
} from '../../constants';

import {Header, TabButton} from '../../components';

import Profile from '../../assets/images/profile.png';

const MainLayout = ({selectedTab, setSelectedTab, navigation, ...props}) => {
  const progress = useDrawerProgress();
  const flatListRef = useRef(null);

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleBorderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, SIZES.radius],
  });

  const animatedStyle = {
    borderRadius: scaleBorderRadius,
    transform: [{scale}],
  };

  const setActivatedTab = tab => {
    setSelectedTab(tab);
    // navigation.navigate(tab);
  };

  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  useEffect(() => {
    switch (selectedTab) {
      case constants.screens.home:
        flatListRef?.current?.scrollToIndex({
          index: 0,
          animated: false,
        });
        break;
      case constants.screens.search:
        flatListRef?.current?.scrollToIndex({
          index: 1,
          animated: false,
        });
        break;
      case constants.screens.cart:
        flatListRef?.current?.scrollToIndex({
          index: 2,
          animated: false,
        });
        break;
      case constants.screens.favorite:
        flatListRef?.current?.scrollToIndex({
          index: 3,
          animated: false,
        });
        break;
      case constants.screens.notification:
        flatListRef?.current?.scrollToIndex({
          index: 4,
          animated: false,
        });
        break;

      default:
        break;
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...animatedStyle,
      }}>
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 20,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              height: 40,
              width: 40,
              borderColor: COLORS.gray2,
              borderWidth: 1,
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="menu" size={30} color={COLORS.darkGray} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={Profile}
              style={{height: 40, width: 40, borderRadius: SIZES.radius}}
            />
          </TouchableOpacity>
        }
      />
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}>
                {item.label === constants.screens.home && (
                  <Home navigation={navigation} />
                )}
                {item.label === constants.screens.search && (
                  <Search navigation={navigation} />
                )}
                {item.label === constants.screens.cart && (
                  <Cart navigation={navigation} />
                )}
                {item.label === constants.screens.favorite && (
                  <Favorite navigation={navigation} />
                )}
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          height: 100,
          justifyContent: 'flex-end',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.darkGray]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            borderTopLeftRadius: SIZES.radius,
            borderTopRightRadius: SIZES.radius,
            borderBottomLeftRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            alignItems: 'center',
          }}>
          <TabButton
            label={constants.screens.home}
            icon={
              <Icon
                name="home"
                size={20}
                color={
                  selectedTab === constants.screens.home
                    ? COLORS.darkGray
                    : COLORS.gray
                }
              />
            }
            isFocused={selectedTab === constants.screens.home}
            onPress={() => setActivatedTab(constants.screens.home)}
          />

          <TabButton
            label={constants.screens.search}
            icon={
              <Icon
                name="search"
                size={20}
                color={
                  selectedTab === constants.screens.search
                    ? COLORS.darkGray
                    : COLORS.gray
                }
              />
            }
            isFocused={selectedTab === constants.screens.search}
            onPress={() => setActivatedTab(constants.screens.search)}
          />

          <TabButton
            label={constants.screens.cart}
            icon={
              <Icon
                name="cart"
                size={20}
                color={
                  selectedTab === constants.screens.cart
                    ? COLORS.darkGray
                    : COLORS.gray
                }
              />
            }
            isFocused={selectedTab === constants.screens.cart}
            onPress={() => setActivatedTab(constants.screens.cart)}
          />

          <TabButton
            label={constants.screens.favorite}
            icon={
              <Icon
                name="bookmark"
                size={20}
                color={
                  selectedTab === constants.screens.favorite
                    ? COLORS.darkGray
                    : COLORS.gray
                }
              />
            }
            isFocused={selectedTab === constants.screens.favorite}
            onPress={() => setActivatedTab(constants.screens.favorite)}
          />

          <TabButton
            label={constants.screens.notification}
            icon={
              <Icon
                name="ios-notifications"
                size={20}
                color={
                  selectedTab === constants.screens.notification
                    ? COLORS.darkGray
                    : COLORS.gray
                }
              />
            }
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => setActivatedTab(constants.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTab: selectedTab => dispatch(setSelectedTab(selectedTab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

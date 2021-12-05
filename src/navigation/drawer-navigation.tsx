import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../assets/images/profile.png';
import {COLORS, constants, dummyData, FONTS, SIZES} from '../constants';
import MainLayout from '../container/MainLayout';
import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/tab/tab-actions';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginBottom: SIZES.base,
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : undefined,
      }}
      onPress={onPress}>
      {icon}
      <Text
        style={{
          marginLeft: SIZES.radius,
          color: COLORS.darkBlue,
          ...FONTS.h4,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const DrawerContentCustom = ({navigation, selectedTab, setSelectedTab}) => {
  const setActivatedTab = tab => {
    setSelectedTab(tab);
    navigation.navigate(tab);
  };

  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginVertical: SIZES.radius,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              width: 35,
            }}
            onPress={() => navigation.closeDrawer()}>
            <Icon name="close" size={30} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={Profile}
            style={{width: 50, height: 50, borderRadius: SIZES.radius}}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.darkBlue, ...FONTS.h4}}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{color: COLORS.darkBlue, ...FONTS.body5}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <CustomDrawerItem
            label={constants.screens.home}
            icon={<Icon name="home" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => setActivatedTab(constants.screens.home)}
          />

          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={<Icon name="wallet" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === constants.screens.my_wallet}
            onPress={() => setActivatedTab(constants.screens.my_wallet)}
          />

          <CustomDrawerItem
            label={'My Orders'}
            icon={<Icon name="cart" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === 'My Orders'}
            onPress={() => setActivatedTab('My Orders')}
          />

          <CustomDrawerItem
            label={constants.screens.favorite}
            icon={<Icon name="bookmark" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === constants.screens.favorite}
            onPress={() => setActivatedTab(constants.screens.favorite)}
          />

          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.darkGray2,
            }}
          />

          <CustomDrawerItem
            label={'Track your order'}
            icon={<Icon name="location" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === 'Track your order'}
            onPress={() => setActivatedTab('Track your order')}
          />

          <CustomDrawerItem
            label={constants.screens.notification}
            icon={
              <Icon
                name="ios-notifications"
                size={20}
                color={COLORS.darkBlue}
              />
            }
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => setActivatedTab(constants.screens.notification)}
          />

          <CustomDrawerItem
            label={'Settings'}
            icon={<Icon name="settings" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === 'Settings'}
            onPress={() => setActivatedTab('Settings')}
          />
        </View>

        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem
            label={'Invite a friend'}
            icon={<Icon name="person-add" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === 'Invite a friend'}
            onPress={() => setActivatedTab('Invite a friend')}
          />
          <CustomDrawerItem
            label={'Help Center'}
            icon={<Icon name="help-buoy" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === 'Help Center'}
            onPress={() => setActivatedTab('Help Center')}
          />
          <CustomDrawerItem
            label={'Logout'}
            icon={<Icon name="log-out" size={20} color={COLORS.darkBlue} />}
            isFocused={selectedTab === 'Logout'}
            onPress={() => setActivatedTab('Logout')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = ({selectedTab, setSelectedTab}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        initialRouteName="DrawerLayout"
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '70%',
            paddingRight: SIZES.base,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          return (
            <DrawerContentCustom
              navigation={props.navigation}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
          );
        }}>
        <Drawer.Screen name="Home">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
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
    setSelectedTab: selectedTab => dispatch(setSelectedTab(selectedTab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigation);

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Search, HorizontalBeerCard} from '../../components';
import {COLORS, dummyData, SIZES} from '../../constants';

export const Home = ({navigation}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuTypeId, setSelectedMenuTypeId] = useState(1);

  const [menuList, setMenuList] = useState<any[]>([]);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    const selectedMenu = dummyData.menu.find(
      menuType => menuType.id === menuTypeId,
    );

    setMenuList(
      selectedMenu?.list.filter(menuType =>
        menuType.categories.includes(categoryId),
      ) || [],
    );
  };

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuTypeId);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Search />
      <FlatList
        style={{
          marginTop: SIZES.radius,
        }}
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <HorizontalBeerCard
              containerStyle={{
                flex: 1,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log('HorizontalBeerCard')}
            />
          );
        }}
      />
    </View>
  );
};

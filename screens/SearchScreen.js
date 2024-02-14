import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Search from '../data/Search';
import { useNavigation } from '@react-navigation/native';
import SearchItem from '../components/SearchItem';

const SearchScreen = () => {
  const data = Search;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Explore StayEase',
      headerStyle: {
        backgroundColor: '#fd5c63',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <SearchItem data={item} />}
      keyExtractor={(item) => item.key.toString()}
    />
  );
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;

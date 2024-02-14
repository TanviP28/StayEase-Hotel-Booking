import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Explore from '../components/Explore';
import Experience from '../components/Experience';

const HomeScreen = () => {
  const data = [
    { key: 'header' },
    { key: 'cards' },
    { key: 'explore' },
    { key: 'experience' },
  ];

  const renderItem = ({ item }) => {
    switch (item.key) {
      case 'header':
        return <Header />;
      case 'cards':
        return <Cards />;
      case 'explore':
        return <Explore />;
      case 'experience':
        return <Experience />;
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

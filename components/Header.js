import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Search');
  };

  const handleProfilePress = () => {
    navigation.navigate('Register');
  };


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: '100%', height: 800 }}
        source={{
          uri: 'http://www.superiorwallpapers.com/download/lofoten-island-from-norway-landscape-wallpaper-1280x1024.jpg',
        }}
      >
        <TouchableWithoutFeedback onPress={handleProfilePress}>
          <View
            style={{
              backgroundColor: '#FF4343',
              marginLeft: 'auto',
              borderRadius: 100,
              marginRight: 20,
              marginTop: 'auto',
            }}
          >
            {/* Image */}
            <Image
              source={{
                uri: 'https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png',
              }}
              style={{ width: 60, height: 50, borderRadius: 0 }}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 350, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>
            Explore
          </Text>
          <Text style={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}>
            Beyond
          </Text>
          <Text style={{ color: 'white', fontSize: 29, fontWeight: 'bold' }}>
            Boundaries
          </Text>
        </View>

        <TouchableWithoutFeedback onPress={handlePress}>
          <View
            style={{
              backgroundColor: '#FF4343',
              padding: 6,
              marginLeft: 'auto',
              borderRadius: 7,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginRight: 'auto',
              marginBottom: 'auto',
              marginTop: 'auto',
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, paddingHorizontal: 30 }}> Explore </Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;

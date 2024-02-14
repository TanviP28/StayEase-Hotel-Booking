import { StyleSheet,Text,Image,View } from "react-native";
import React from "react";

const FinalScreen = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        marginTop: "auto",
        alignItems: "center",
        marginBottom: "auto",
      
      }}
    >
      <Text style={{fontSize:27,fontWeight: "bold",color:"#fd5c63",alignItems: "center",marginBottom:10 }}>Exciting news!!!</Text>
      <Text style={{fontSize:20,marginLeft:20}}>Your booking is confirmed. </Text>
      <Text style={{fontSize:20,marginLeft:20}}>Get ready for a wonderful experience🌟</Text>
      <View styles={{color:"#fd5c63",padding:12}}>
      <Image
        style={{ width:200, height: 100,alignItems: "center",padding:'auto',borderRadius:20,marginTop:7}}
        source={require('./logo.jpg')} // Replace 'yourImage.jpg' with your actual image file
      />
      </View>
      
    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({});

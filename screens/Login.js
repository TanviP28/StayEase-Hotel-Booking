import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";




const Login = () => {
	const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center"}}
    >
      <View>
      <Image
        style={{ width:200, height: 100,alignItems: "center",padding:'auto',borderRadius:20,marginTop:7}}
        source={require('./logo.jpg')} // Replace 'yourImage.jpg' with your actual image file
      />
    </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              marginTop: 30,
              color: "#041E42",
            }}
          >
            Sign In
          </Text>
        </View>

        <View>
			<Text style={{ color: 'black', fontWeight: 'bold', fontSize:16 ,paddingTop:50 ,textAlign:"left"}}> Email </Text>
			</View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFFFFF",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 5,
              paddingLeft:5,
            }}
          >
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Email"
            />
            <MaterialIcons
              style={{ marginLeft: 10,marginBottom: 10 }}
              name="email"
              size={24}
              color="black"
            />
          </View>
        </View>

		<View>
			<Text style={{ color: 'black', fontWeight: 'bold', fontSize:16 ,paddingTop:20,textAlign:"left"}}> Password </Text>
		</View>
    <View>
      <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFFFFF",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 5,
              paddingLeft:5,
            }}
          >
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Password"
            /><AntDesign
              name="lock1"
              size={24}
              color="black"
              style={{ marginLeft:10,marginBottom: 10 }}
            />
          </View>
        </View>

        <View>
			<Text style={{ color: 'black', fontWeight: 'bold', fontSize:16 ,paddingTop:20,textAlign:"left" }}> Confirm Password </Text>
			</View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFFFFF",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 5,
              paddingLeft:5,
            }}
          >
            
			
            <TextInput
              value={cpassword}
              onChangeText={(text) => setcPassword(text)}
              secureTextEntry={true}
              style={{
                color: "black",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Confirm Password"
            /><AntDesign
              name="lock1"
              size={24}
              color="black"
              style={{ marginBottom: 10,marginLeft:10}}
            />
          </View>
        </View>

        <Pressable
          //onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: "#fd5c63",
            borderRadius: 50,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop:70,
            padding: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});


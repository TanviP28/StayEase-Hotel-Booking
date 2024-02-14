import React, { useState } from "react";
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
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase.config";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  
  const handleSignUpPress = async () => {
    
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    if (password === cpassword) {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCred.user;
        await sendEmailVerification(auth.currentUser);
        console.log("Success");
        // Display success message and clear input fields
        setMessage("Registration successful!\n Check your email for verification.");
        setName("");
        setEmail("");
        setPassword("");
        setcPassword("");
      } catch (error) {
        //console.error("Error during registration:", error.message);
        setMessage(`Error during registration: ${error.message}`);
      }
    } else {
      setMessage("Password and confirm password do not match");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{marginTop:20}}>
        <Image
          style={{ width: 200, height: 100, alignItems: "center", padding: 'auto', borderRadius: 20 }}
          source={require('./logo.jpg')} // Replace 'yourImage.jpg' with your actual image file
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              marginTop: 25,
              color: "#041E42",
            }}
          >
            Sign Up
          </Text>
        </View>

        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, paddingTop: 50, textAlign: "left" }}> Name </Text>
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
              paddingLeft: 5,
            }}
          >
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Name"
            />
            <MaterialIcons
              style={{ marginLeft: 10, marginBottom: 15 }}
              name="account-box"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, paddingTop: 18, textAlign: "left" }}> Email </Text>
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
              paddingLeft: 5,
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
              style={{ marginLeft: 10, marginBottom: 15 }}
              name="email"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, paddingTop: 18, textAlign: "left" }}> Password </Text>
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
              paddingLeft: 5,
              borderBottomColor: "gray",
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
              placeholder="Password should 6 Character"
            /><AntDesign
              name="lock1"
              size={24}
              color="black"
              style={{ marginLeft: 10, marginBottom: 15 }}
            />
          </View>
        </View>

        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, paddingTop: 18, textAlign: "left" }}> Confirm Password </Text>
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
              paddingLeft: 5,
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
              style={{ marginBottom: 13, marginLeft: 10 }}
            />
          </View>
        </View>
        <View>
        {message !== "" ? (<Text style={{ color: "red", marginBottom: 10, textAlign: "center" }}>
    {message}</Text>) : null}
        <Pressable
        onPress={handleSignUpPress}
        style={{
          width: 200,
          textAlign: "center",
          backgroundColor: "#fd5c63",
          borderRadius: 50,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          padding: 15,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold",textAlign:"center" }}>
          Sign Up
        </Text>
      </Pressable>
    </View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 14 ,marginBottom:30}}>
            Have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});

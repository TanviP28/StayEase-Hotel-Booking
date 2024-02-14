import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import moment from 'moment';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ReserveScreen = ({ route, navigation }) => {
  

  const [startYear, setStartYear] = useState(moment().format('YYYY'));
  const [startMonth, setStartMonth] = useState(moment().format('MM'));
  const [startDay, setStartDay] = useState(moment().format('DD'));

  const [endYear, setEndYear] = useState(moment().format('YYYY'));
  const [endMonth, setEndMonth] = useState(moment().format('MM'));
  const [endDay, setEndDay] = useState(moment().format('DD'));

  const handleDateChange = (year, month, day, isStartDate) => {
    const selectedDate = moment(`${year}-${month}-${day}`).format('YYYY-MM-DD');
    console.log(`Selected ${isStartDate ? 'Start' : 'End'} Date:`, selectedDate);
    // Perform any additional actions with the selected date
  };

  const calculateDays = () => {
    const diffInDays = moment(`${endYear}-${endMonth}-${endDay}`).diff(moment(`${startYear}-${startMonth}-${startDay}`), 'days');
    if (diffInDays > 30) {
      // Show an alert or set a state to indicate invalid dates
      
      return -1; // Return a special value to indicate invalid dates
    }
    return diffInDays;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image style={{ width: '100%', height: 190 }} source={{ uri: route.params.img }} />

     
      <ScrollView showsVerticalScrollIndicator={false}>
       

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {route.params.title}
          </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}
          >
            <FontAwesome name="star" size={24} color="#fd5c63" />
            <Text style={{ paddingHorizontal: 10 }}>{route.params.star}</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              {route.params.location}
            </Text>
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 7,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>this is a rare find.</Text>
              <Text style={{ fontSize: 15 }}>
                {route.params.person}'s name on Airbnb is usually fully booked
              </Text>
            </View>
            <FontAwesome name="diamond" size={24} color="orange" />
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 7,
            }}
          />

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              // justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Hosted by {route.params.person}
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  color: "#8A2BE2",
                  fontWeight: "bold",
                }}
              >
                {route.params.description}
              </Text>
            </View>
            <Image
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
              }}
              source={{ uri: route.params.image }}
            />
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 7,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <AntDesign name="home" size={28} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Entire Home
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                You will have the treehouse to yourself
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <SimpleLineIcons name="emotsmile" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Enhanced Clean
              </Text>
              <Text style={{ fontSize: 16, color: "gray", width: 300 }}>
                the host is committed to Airbnb's 5 step cleaning process
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <EvilIcons name="location" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Great Location
              </Text>
              <Text style={{ fontSize: 16, color: "gray" }}>
                100% of the guests gave a 5 star rating
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Feather name="calendar" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>Free Cancellation Available</Text>
            </View>
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 12,
            }}
          />

          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Where You'll Sleep
            </Text>
            <View
              style={{
                marginTop: 8,
                borderColor: "gray",
                borderWidth: 1,
                width: 130,
                height: 80,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="bed-outline" size={24} color="black" />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bedroom</Text>
              <Text>1 double bed</Text>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#D8D8D8",
                marginTop: 12,
              }}
            />

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                What this Place Offers
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="food-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Kitchen
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons name="wifi" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Wifi
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome name="car" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Free Parking On Premises
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialIcons name="pets" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Pets
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome5 name="gas-pump" size={24} color="black" />
                <Text
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: "400" }}
                >
                  Free Parking on premises
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              height: 1,
              borderWidth: 1,
              borderColor: "#D8D8D8",
              marginTop: 12,
            }}
          />

      <View style={{ marginTop: 20 }}>
      <Text style={{ marginTop:5, fontSize: 24, fontWeight: "bold"}}>Select Dates to Reserve</Text>
      
      <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:15,padding:'auto'}}>Check-In Date</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold',flexDirection: 'row', marginTop: 10 }}>             Month             Day                Year</Text>

        {/* Start Date Dropdowns */}
        <View style={{ flexDirection: 'row'}}>
        <Entypo name="calendar" size={28} color="black" style={{ padding: 10 , marginTop:5}}></Entypo> 
          {/* Start Month Dropdown */}
          <ModalDropdown
            options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
            defaultValue={startMonth}
            onSelect={(index, value) => {
              setStartMonth(value);
              handleDateChange(startYear, value, startDay, true);
            }}
            style={styles.dropdown}
            dropdownTextStyle={{
              fontSize: 12,
              padding:2,
              width:50,
              alignContent:'center'// Customize the color as needed
            }}
          />
          {/* Start Day Dropdown */}
          <ModalDropdown
          options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']}
            defaultValue={startDay}
            onSelect={(index, value) => {
              setStartDay(value);
              handleDateChange(startYear, startMonth, value, true);
            }}
            style={styles.dropdown}
            dropdownTextStyle={{
              fontSize: 12,
              padding:2,
              width:50,
              alignContent:'center'// Customize the color as needed
            }}
          />

          {/* Start Year Dropdown */}
          <ModalDropdown
            options={['2023', '2024']}
            defaultValue={startYear}
            onSelect={(index, value) => {
              setStartYear(value);
              handleDateChange(value, startMonth, startDay, true);
            }}
            style={styles.dropdown}
            dropdownTextStyle={{
              padding:2,
              width:50,
              alignContent:'center'// Customize the color as needed
            }}
          />
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10,padding:'auto'}}>Check-Out Date</Text>
        {/* End Date Dropdowns */}
        <Text style={{ fontSize: 16, fontWeight: 'bold',flexDirection: 'row', marginTop: 10 }}>           Month              Day                  Year</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Entypo name="calendar" size={28} color="black" style={{ padding: 10 , marginTop:5}}></Entypo> 
          {/* End Month Dropdown */}
          <ModalDropdown
            options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']}
            defaultValue={endMonth}
            onSelect={(index, value) => {
              setEndMonth(value);
              handleDateChange(endYear, value, endDay, false);
            }}
            style={styles.dropdown}
            dropdownTextStyle={{
              fontSize: 12,
              padding:2,
              width:50,
              alignContent:'center'// Customize the color as needed
            }}
          />

          {/* End Day Dropdown */}
          <ModalDropdown
            options={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']}
            defaultValue={endDay}
            onSelect={(index, value) => {
              setEndDay(value);
              handleDateChange(endYear, endMonth, value, false);
            }}
            style={styles.dropdown}
            dropdownTextStyle={{
              fontSize: 12,
              padding:2,
              width:50,
              alignContent:'center'// Customize the color as needed
            }}
          />

          {/* End Year Dropdown */}
          <ModalDropdown
            options={['2023', '2024']}
            defaultValue={endYear}
            onSelect={(index, value) => {
              setEndYear(value);
              handleDateChange(value, endMonth, endDay, false);
            }}
            style={styles.dropdown}
            dropdownTextStyle={{
              fontSize: 12,
              padding:2,
              alignContent:'center'// Customize the color as needed
            }}
          />
        </View>

        
      </View>
      <View style={{ marginTop: 20 }}>
      <Text style={{fontSize:24,fontWeight:"bold",marginTop:30}}>Rates: {route.params.price}</Text>
      </View>
    </ScrollView>
   <View>
   <Pressable
  onPress={() => {
    const diffInDays = calculateDays();
    if (diffInDays > 0) {
      navigation.navigate("Confirm", {
        img: route.params.img,
        title: route.params.title,
        location: route.params.location,
        description: route.params.description,
        price: route.params.price,
        no_of_days: diffInDays,
        startDate: `${startYear}-${startMonth}-${startDay}`,
        endDate: `${endYear}-${endMonth}-${endDay}`,
        star: route.params.star,
        person: route.params.person,
      });
    } else {
      // Handle the case when days is -1
      console.log('Invalid Dates');

      // Add your additional action here, for example:
      // console.log('Additional action for invalid dates');
    }
  }}
  style={{
    backgroundColor: calculateDays() > 0 ? "#fd5c63" : "gray",
    padding: 10,
    alignContent:"center", 
    marginTop: 50,
    height:60,
    alignContent:"center",
    opacity: calculateDays() > 0 ? 1 : 0.5,
  }}>
  <Text style={{ color: "white",fontWeight:"bold",marginTop:10,padding:'auto',fontSize:18,textAlign:'center' }}>
  {calculateDays() > 0 ? `Reserve for ${calculateDays()} days` : 'Invalid Dates'}
  </Text>

  
</Pressable>

</View>
</ScrollView>
  

  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: 100,
    marginTop: 5,
    marginLeft:5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    padding:10,
    borderColor: '#ccc',
    justifyContent: 'center',
    fontSize: 16, // Added font size
    color:'black',
  },
});

export default ReserveScreen;

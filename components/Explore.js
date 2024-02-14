import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(" ");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "red" }}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Explore More</Text>

      <FlatList
        numColumns={2}
        data={places}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", margin: 7 }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.img }}
            />
            <View
              style={{
                paddingLeft: 10,
                backgroundColor: "#72A0C1",
                paddingTop: 5,
                width: 120,
              }}
            >
              <Text style={{ color: "white" }}>{item.location}</Text>
              <Text style={{ color: "white" }}>{item.distance}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.img.toString()}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});

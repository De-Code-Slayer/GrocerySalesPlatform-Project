// SearchBar.js
import React from "react";
import { StyleSheet, Text, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const Location = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* Location Icon */}
        <Entypo name="location-pin" size={24} color="green" />
        {/* Textt field */}
        <Text style={styles.text}>Bali, Indonesia</Text>
      </View>
       
    </View>
  );
};
export default Location;

// styles
const styles = StyleSheet.create({
  searchBar__unclicked: {
    padding: 0,
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
  },
  text:{
    fontSize: 15,
    fontWeight: "bold",

  }
  
 
});
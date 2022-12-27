import React from 'react';
import { Dimensions,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';




const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f9f9f9",
    width: Dimensions.get('window').width * 0.9,
    alignItems: "center",
    marginTop:50,
  },
  co_delivery: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    backgroundColor:'red',
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  location:{
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 10,
    marginTop:10,
    backgroundColor:'red'
  },
  share_info : {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.35,
    borderRadius: 10,
    marginTop:10,
    backgroundColor:'blue'
  }

});

function Share(){


  return (
    
      <View style={styles.container}>
        <View style={styles.co_delivery}>
            <View></View>
            <Text>Co-delivery</Text>
            <View></View>
        </View>
        <View style={styles.location}>
            <View></View>
            <Text></Text>
            <View></View>
        </View>
        <View style={styles.share_info}></View>
      </View>

  );
}



export default Share;
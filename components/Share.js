import React from 'react';
import { Dimensions,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';




const styles = StyleSheet.create({
  productbox: {
    backgroundColor:"#f9f9f9",
    width: Dimensions.get('window').width * 0.9,
    alignItems: "center",
    marginTop:10,
    
    
  },
});

function Share(){


  return (
    
      <FlatList
        contentContainerStyle={styles.productbox}
        numColumns="2"
        horizontal={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

  );
}



export default Share;
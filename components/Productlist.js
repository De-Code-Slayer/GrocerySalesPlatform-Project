import React from 'react';
import { Dimensions,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Product from "./Product";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-d96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-41f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '586940f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const styles = StyleSheet.create({
  productbox: {
    backgroundColor:"pink",
    width: Dimensions.get('window').width * 0.9,
    alignItems: "center",
    marginTop:10
    
  },
});


const Item = ({ title }) => (
  
    <Product/>
  
);

const Productlist = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

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


export default Productlist;
import {Dimensions, StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
  product:{
    width: Dimensions.get('window').width * 0.33,
    height: Dimensions.get('window').width * 0.44,
    borderRadius:5,
    backgroundColor:"#ffffff",
    margin:10,
    alignItems:"flex-start"

  }
  
  });

function Product(){

    return(

        <View style={styles.product}>
        </View>
    )
}

export default Product
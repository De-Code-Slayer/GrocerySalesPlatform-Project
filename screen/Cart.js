
import { StatusBar } from 'expo-status-bar';
import { Feather, Entypo } from "@expo/vector-icons";
import {Dimensions, StyleSheet,Image, Text, View,ScrollView, FlatList, useWindowDimensions} from 'react-native';
import Share from '../components/Share'

const styles = StyleSheet.create({
    
  container:{  
      backgroundColor:'green',
      flex: 1,
      alignItems: 'center',
      marginTop:50
  },
  
  });

function Cart () {


    return (
        <>
        <View style={styles.container}>
           
            <Share>

            </Share>

        </View>

        </>
    )

}






export default Cart
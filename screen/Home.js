import { StatusBar } from 'expo-status-bar';
import { Feather, Entypo } from "@expo/vector-icons";
import {Dimensions, StyleSheet,Image, Text, View,ScrollView, FlatList} from 'react-native';
import Menuitems from "../components/Menuitems";
import Product from "../components/Product";
import Productlist from "../components/Productlist";
import Nav from "../components/Nav";
import SearchBar from "../components/Searchbar";
import Location from "../components/Location";

const styles = StyleSheet.create({
  menuheight:{
    height: "15%",
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  header: {
    marginTop:40,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.15,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
  },
  headerleftsmall:{
    backgroundColor: '#fbfbfb',
    height:50,
    width:50,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerrightsmall:{
    backgroundColor: '#fbfbfb',
    height:50,
    width:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headermddlelarge:{
    backgroundColor: '#f9f9f9',
    height:50,
    width:180,
    // left:"0%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerbox:{
    backgroundColor: '#f9f9f9',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner:{
    backgroundColor: '#ff5005',
    width: Dimensions.get('window').width * 0.8,
    height: '95%',
    borderRadius: 20,
  },
  searchbox:{
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.18,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search:{
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.13,
  },
  menubox:{
    // height: Dimensions.get('window').width * 0.4,
    backgroundColor:"#f9f9f9",
    padding:30,
    alignItems: 'center',
    flexDirection:'row',
    margin:0
},
  productbox: {
  backgroundColor:"pink",
  width: Dimensions.get('window').width * 0.9,
  height: Dimensions.get('window').width * 0.78,
  alignItems: "center",
  justifyContent: 'flex-start',
  padding:20,
  
},
  ImageIconStyle: { 
  height: "70%",
  width: "70%",
  resizeMode:"cover"

  

},

loctext: {
  color: "rgba(0,0,0,0.4)",
  align: "center",

}


});


// grid view 
const ITEMS = [
  {
    id: 1,
    data: 'A',
  },
  {
    id: 2,
    data: 'B',
  },
  {
    id: 3,
    data: 'C',
  },
  {
    id: 4,
    data: 'D',
  },
  {
    id: 5,
    data: 'E',
  },
  {
    id: 6,
    data: 'F',
  },
  {
    id: 7,
    data: 'G',
  },
  {
    id: 8,
    data: 'H',
  },
  {
    id: 9,
    data: 'I',
  },
  {
    id: 10,
    data: 'J',
  },
  {
    id: 11,
    data: 'K',
  },
  {
    id: 102,
    data: 'L',
  },

];

const GridView = ({ data }) => (
  <Product />
);

const getOnPressItem = (data) => {

  Alert.alert(data);

}


function Home(){






    return(
      // app main body
        <View style={styles.container}>

          {/* header */}
          <View style={styles.header}>
             <View style={styles.headerleftsmall}>
             <Image 
              style={styles.ImageIconStyle}
              source={require('../images/icons/noun-menu-1200007.png')}  />
             </View>
             <View style={styles.headermddlelarge}>
              <Text style={styles.loctext} >Current location</Text>
              <Location/>
             </View>
             <View style={styles.headerrightsmall}>
              <Image 
              style={styles.ImageIconStyle}
              source={require('../images/icons/noun-bell-1020527.png')}  />
              
             </View>
          </View> 

          {/* banner */}
          <View style={styles.bannerbox}>
            <View style={styles.banner}>
            </View>
          </View> 

          {/* search */}
          <View style={styles.searchbox}>

            <View style={styles.search}>
              <SearchBar/>
            </View>
          </View> 

        {/* menu */}
        <View style={styles.menuheight}>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.menubox}>
            <Menuitems image = 'noun-burger-1003378'/>
            <Menuitems image = 'noun-tacos-3512057'/>
            <Menuitems image = 'noun-chicken-2244465'/>
            <Menuitems image = 'noun-chicken-2244465'/>
            <Menuitems image = 'noun-chicken-2244465'/>
          </ScrollView>
        </View>

        {/* product */}
          <Productlist/>

          {/* navigation */}
          <Nav/>
      </View>
    )
}



export default Home
import {Dimensions, StyleSheet, View, Image, Text } from 'react-native';
const styles = StyleSheet.create({
  menuitem:{
    width: Dimensions.get('window').width * 0.19,
    height: Dimensions.get('window').width * 0.25,
    borderRadius:10,
    backgroundColor:"#ffffff",
    marginRight:15,
    justifyContent:"center",
    alignItems: "center",
  },
  ImageIconStyle: { 
    height: "70%",
    width: "70%",
    resizeMode:"cover" 
  },
  text:{
    color: "rgba(0,0,0,0.4)",
    // fontWeight:"semi-bold"
  },

  
  });

  function Menuitems(props){


    let pic = {
      uri: require('../images/menu/noun-burger-1003378.png')
    };
    return(

        <View style={styles.menuitem}>
          <Image 
              style={styles.ImageIconStyle}
              source={pic.uri} />

              <Text style={styles.text} >Burger</Text>

        </View>
    )
}

export default Menuitems

import {Dimensions, StyleSheet, TouchableOpacity,Text, View,ScrollView, FlatList} from 'react-native';
import { Feather, Ionicons,  MaterialIcons, MaterialCommunityIcons, AntDesign  } from "@expo/vector-icons";

const circlewidth =  Dimensions.get('window').height * 0.08
const styles = StyleSheet.create({
    // navinvisible:{
    //     backgroundColor: 'rgba(255,255,255,0.1)',
       
        
    // },    
    navbox: {
        backgroundColor:"#ffffff",
        height: '10%',
        width: Dimensions.get('window').width,
        marginTop:"auto",
        flexDirection:'row',
        justifyContent:"space-between",
    },
    leftbox:{
        backgroundColor:'#0000',
        height:'100%',
        width: Dimensions.get('window').width * 0.4,
        marginTop:"auto",
        borderTopRightRadius:30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    centercircle:{
        backgroundColor:'#ff5005',
        height:Dimensions.get('window').height * 0.08,
        width: circlewidth,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        right: (Dimensions.get('window').width/2) - (circlewidth/2),
        paddingHorizontal: 20,
        paddingVertical: 10,
        zIndex: 10,
        shadowColor: "#000",

shadowOpacity: 0,
shadowRadius: 4.84,

elevation: 8,

    },

    rightbox:{
        backgroundColor:'#0000',
        height:'100%',
        width: Dimensions.get('window').width * 0.4,
        marginTop:"auto",
        borderTopLeftRadius:30,
        
        
        
        
    },
    rightboxinner:{
        backgroundColor:"#0000",
        height:'100%',
        width: '100%',
        borderTopLeftRadius:30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    home:{
        height:"40%",
        width:"15%",
        alignItems: 'center',
        justifyContent: 'center',

        
    },
    order:{
        height:"40%",
        width:"15%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    favorite:{
        height:"40%",
        width:"15%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    profile:{
        height:"40%",
        width:"15%",

        alignItems: 'center',
        justifyContent: 'center',
        
    },

  });

function Nav ( props ){

    return(
 
        <View style={styles.navbox} >
            <View style={styles.leftbox}>
                <View style={styles.home}><MaterialIcons name="home-filled" size={24} color="orange" /></View>
                <View style={styles.order}><MaterialCommunityIcons name="ticket-percent-outline" size={24} color="gray" /></View>
            </View>


            <TouchableOpacity style={styles.centercircle} onPress={() => props.navigation.navigate('Cart') }>
                <Ionicons name="md-cart-outline" size={24} color="black" /></TouchableOpacity>
                <View style={styles.rightbox}>
                <View  style={styles.rightboxinner}>
                  <View style={styles.favorite}><AntDesign name="hearto" size={24} color="gray" /></View>
                  <View style={styles.profile}><Ionicons name="ios-person-outline" size={24} color="gray" /></View>
                </View>
            </View>

        </View>
    )
}


export default Nav
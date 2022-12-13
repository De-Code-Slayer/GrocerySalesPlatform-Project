
import {Dimensions, StyleSheet, Text, View,ScrollView, FlatList} from 'react-native';

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
        width: Dimensions.get('window').width * 0.5,
        marginTop:"auto",
        borderTopLeftRadius:30,
        left:"100%",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    home:{
        height:"10%",
        width:"10%",
        backgroundColor:"black",

        
    },
    order:{
        height:"10%",
        width:"10%",
        backgroundColor:"red",
        
    },
    favorite:{
        height:"10%",
        width:"10%",
        backgroundColor:"red",
        
    },
    profile:{
        height:"10%",
        width:"10%",
        backgroundColor:"red",
        
    },

  });

function Nav (){

    return(
 
        <View style={styles.navbox} >
            <View style={styles.leftbox}>
                <View style={styles.home}></View>
                <View style={styles.order}></View>
            </View>
            <View style={styles.centercircle}></View>
            <View style={styles.rightbox}>
                <View style={styles.favorite}></View>
                <View style={styles.profile}></View>
            </View>

        </View>
    )
}


export default Nav
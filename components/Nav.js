
import {Dimensions, StyleSheet, Text, View,ScrollView, FlatList} from 'react-native';

const styles = StyleSheet.create({
    // navinvisible:{
    //     backgroundColor: 'rgba(255,255,255,0.1)',
       
        
    // },    
    navbox: {
        backgroundColor:"#ffffff",
        height: '10%',
        width: Dimensions.get('window').width,
        marginTop:"auto",
        flexDirection:'row'
    },
    leftbox:{
        backgroundColor:'#0000',
        height:'100%',
        width: Dimensions.get('window').width * 0.4,
        marginTop:"auto",
        borderTopRightRadius:30,
        
    },
    centercircle:{
        backgroundColor:'#ff5005',
        height:Dimensions.get('window').height * 0.12,
        width: Dimensions.get('window').height * 0.12,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: Dimensions.get('window').width * 0.38,
        paddingHorizontal: 20,
        paddingVertical: 10,
        zIndex: 10,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {

            height: 3, width: 3
        },

    },
    rightbox:{
        backgroundColor:'#0000',
        height:'100%',
        width: Dimensions.get('window').width * 0.5,
        marginTop:"auto",
        borderTopLeftRadius:30,
        left:"100%"
        
    }

  });

function Nav (){

    return(
 
        <View style={styles.navbox} >
            <View style={styles.leftbox}></View>
            <View style={styles.centercircle}></View>
            <View style={styles.rightbox}></View>

        </View>
    )
}


export default Nav
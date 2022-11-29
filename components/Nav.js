
import {Dimensions, StyleSheet, Text, View,ScrollView, FlatList} from 'react-native';

const styles = StyleSheet.create({
    navinvisible:{
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: Dimensions.get('window').height * 0.17 ,
        
    },    
    navbox: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: '100%' ,
        width: Dimensions.get('window').width,
        marginTop:"auto",
        flexDirection:'row'
    },
    leftbox:{
        backgroundColor:'green',
        height:'60%',
        width: Dimensions.get('window').width * 0.34,
        marginTop:"auto",
        borderTopRightRadius:30,
        
    },
    centercircle:{
        backgroundColor:'yellow',
        height:Dimensions.get('window').height * 0.16,
        width: Dimensions.get('window').height * 0.16,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,

    },
    rightbox:{
        backgroundColor:'red',
        height:'60%',
        width: Dimensions.get('window').width * 0.34,
        marginTop:"auto",
        borderTopLeftRadius:30,
        
    }

  });

function Nav (){

    return(
    <View style={styles.navinvisible} sceneContainerStyle={{backgroundColor: 'transparent',}}>
        <View style={styles.navbox} sceneContainerStyle={{backgroundColor: 'transparent',}}>
            <View style={styles.leftbox}></View>
            <View style={styles.centercircle}></View>
            <View style={styles.rightbox}></View>

        </View>

    </View>
    )
}


export default Nav
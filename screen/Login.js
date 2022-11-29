import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f172a',
      alignItems: 'center',

    },
    box70:{
        height: '66%',
        width: '100%',
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',

    },
    boxcenter:{
        backgroundColor: '#ae9bbf',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,

    },
    login:{
        marginTop:"3%",
        width: '100%',
        height: '6%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    register:{
        width: '100%',
        height: '6%',
        backgroundColor: '#f06445',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    },
    buttonContainer:{
        marginTop: "20%",
        width: '85%',
        height: '100%',
        backgroundColor: '#0f172a',
        alignItems: 'center',
    },
    textbox:{
        top:"20%",
        align:"bottom",
        backgroundColor: '#0f172a',
        height: '15%',
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
        zIndex:3,
    },
    boldtext:{
        color: '#FFFFFF',
        fontSize:20,
        fontWeight:"bold",
        
    },
    smalltext:{
        color: '#FFFFFF',
        fontSize:15,
        fontWeight:"300",
        
    },
registertext:{
    color:"#ffff",
    fontWeight:"bold"
},
logintext:{
    color:"black",
    fontWeight:"bold"
},

  });
  

function Login({ navigation }){



    return(

        <> 
        <View style={[styles.container]}>



                <View style ={styles.box70}>
                        <View style ={styles.boxcenter}>
                        
                        </View>
                        
                        <View style={styles.textbox}>

                            <Text style ={styles.boldtext}>The Experience of Fresh Foods</Text>
                            <Text style ={styles.smalltext}>The Experience of buying Quickly</Text>

                        </View>
                </View>

            <View style ={styles.buttonContainer}>

                <TouchableOpacity style={styles.register}>
                        <Text style={styles.registertext} >Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login} onPress={() =>
        navigation.navigate('Home')
      } >
                        <Text style={styles.logintext} >Login</Text>
                </TouchableOpacity>
            </View>

                <View >
                </View>


      </View>
        </>
    )
};






export default Login
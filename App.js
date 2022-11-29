// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home'
import Login from './screen/Login'


// Screen Stacks
const Stack = createNativeStackNavigator();




function  App(){

  return (


    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" animationEnabled={"false"} component={Login}  />
        <Stack.Screen name="Home"  animationEnabled={"false"} component={Home}  options={{ title: 'Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );

}

export default  App




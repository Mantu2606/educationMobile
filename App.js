import React from "react"

import { View,Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans" ; 
import { Nunito_600SemiBold,Nunito_700Bold } from "@expo-google-fonts/nunito"
import AppLoading from "expo-app-loading" ;
import Attandance from "./src/screens/Profile";
import Fees from "./src/screens/Fees";
import Fee from "./src/screens/Profile";
import Profile from "./src/screens/Profile";
import Attand from "./src/screens/Attand";

const App = () => {
  const Stack = createNativeStackNavigator(); 

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  }) ; 

  if(!fontsLoaded){
    <AppLoading />; 
  }

  return (
   <NavigationContainer>

    <Stack.Navigator initialRouteName="Home" >
      {/* Home Screen */}
      <Stack.Screen 
      name="Home"
      options={{
        headerShown:false
      }}>
      { /*  <Stack.Screen name="Home" component={Home} /> */}
        {(props) => <Home {...props} channelName={"Mantu Vishwakarma"} />}
      </Stack.Screen>
       {/* Home Screen */}
      <Stack.Screen name="Course" component={Home}
       options={{
        headerTitleStyle:{
          fontSize:25,
          fontFamily:"Nunito_600SemiBold",
        },
        headerTitle:"Home",
        headerTitleAlign:"center"
       }}
      />
       
         {/* Attandance Screen */}
        <Stack.Screen name="Student" component={Attand}
         options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitle:"Attandance",
          headerTitleAlign:"center"
         }} />
      
        {/* Contact Screen */}
       <Stack.Screen name="Contact" component={Profile} 
        options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
            
          },
          headerTitle:"Profile",
          headerTitleAlign:"center"

         }}/>
       
        {/* Fees*/}
       <Stack.Screen name="About" component={Fees} 
        options={{
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
          },
          headerTitle:"Fees",
          headerTitleAlign:"center"
         }}/>
      

    </Stack.Navigator>
   </NavigationContainer>
  )
}; 
export default App
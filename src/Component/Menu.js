import { StyleSheet, Text,Image, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation(); 
  return (
    <SafeAreaView>
    <View style={styles.menuContainer}>

     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=> navigation.navigate("Course")}>
     {/* <Text>Course</Text> */}
     <Image 
      style={styles.iconStyle}
      source = {{  //Home 
        uri:"https://th.bing.com/th/id/OIP.s0I_dMcX1Ezo6A0H3HWCKgHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      }}/>
     
     </TouchableOpacity>

     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=> navigation.navigate("Student")}>
     {/* <Text>Student</Text> */}
     <Image 
      style={styles.iconStyle}
      source = {{ //Attandance
        uri:"https://th.bing.com/th/id/OIP.Lumg5jlwNWD0ouY5ku9k3gHaHa?w=191&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      }}/>
     </TouchableOpacity>

     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=> navigation.navigate("About")}>
     {/* <Text>About</Text> */}
     
     <Image  
      style={styles.iconStyle}
      source = {{ // Fees 
        uri:"https://www.bing.com/th?id=OIP.CY5adFuGd_6Phe2FKInT-QAAAA&w=122&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
      }}/>
     </TouchableOpacity>

     <TouchableOpacity style={styles.buttonStyle}
     onPress={()=> navigation.navigate("Contact")}>
     {/* <Text>Contact</Text> */}
     <Image 
      style={styles.iconStyle}
      source = {{ //Profile
        uri:"https://th.bing.com/th?id=OIP.Os3dloCTc-JUqOagtZOXVAHaHr&w=245&h=254&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
      }}/>
     </TouchableOpacity>

    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  menuContainer:{
    flexDirection:"row",
    
    justifyContent:"space-evenly",
  },
  iconStyle:{
    width:"100%",
   height :50,
    aspectRatio:1
  },
  // menuContainer: {
  //   justifyContent:"space-evenly",
  //   flexDirection:"row",
  //   paddingVertical: 15,
  //   borderBottomWidth: 1,
  //   borderBottomColor: 'red',
  // },
})
export default Menu

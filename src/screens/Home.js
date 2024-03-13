import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import Menu from "../Component/Menu";


const Home = (props) => {
  const description =
    "Naval’s Raptinagar Has been provided Quality education to  the students from last 25 years. Our commitment to the society is to lead the ."

  return (
    <SafeAreaView>
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/Navals.jpeg")}
        />

        <Text style={{color:"green",fontSize:30}}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
          
          ]}>
          Navals Academy 
        </Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <Menu />
      </View>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
    textAlign: "center",
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: 300,
    width: 500,
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 38,
    color: "red",
    textTransform: "uppercase",
    fontFamily: "Nunito_600SemiBold",
    marginTop:15
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "blue",
    marginTop: 20,
    paddingBottom: 30,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular",
  },
   
  lineStyle:{
    marginBottom:20,
    borderWidth:0.5,
    borderColor:'grey'
  },
 menuStyle:{
  marginBottom:20,
 }
  
});

export default Home;
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import {ScaledSheet} from 'react-native-size-matters';
import { marginBottom } from "styled-system";



export default class Tools extends Component {
 
  render() {
  return (
    <View style={styles.container}>
       <Text style={styles.txt}>This is your ToolBox where you can track progress and find tips</Text>
       <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Mood')}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Mood Tracker</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('GJ')}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Gratitude Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('AD')}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Tools</Text>
      </TouchableOpacity>
      
      
          </View>
  );
}
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   alignItems:"center",
   justifyContent:"space-evenly" 
  },
  txt:{
   color: "#333333",
   fontSize: 20,
   opacity: 0.8,
   textAlign:'center',
  },
  button1: {
   alignItems:"center",
   width: 300,
   height: 50,
   borderRadius: 20,
   backgroundColor: "white",
   borderColor:"black",
   borderWidth : 1 ,
   
 },
 iAgreeAbdContinue: {
   color: "#333333",
   fontSize: 20,
   textAlign: "center",
   padding:10,
   opacity: 0.8,
 },
 tinyLogo:{
   width: 230,
   height: 300,

 },
});


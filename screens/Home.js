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



export default class Home extends Component {
 
  render() {
  return (
    <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/images/normalstand.png')} />
       <Text style={styles.txt}>Remeber To Take a Deep Breath 🤗</Text>
       <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('bot')}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Talk To Buddy</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Chat')}
      style={styles.button2}
      ><Text style={styles.iAgreeAbdContinue}>Check-in</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Tools')}
      style={styles.button3}
      ><Text style={styles.iAgreeAbdContinue}>Tools</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Settings')}
      style={styles.button4}
      ><Text style={styles.iAgreeAbdContinue}>Settings</Text>
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
   justifyContent:"center" 
  },
  txt:{
   color: "#333333",
   fontSize: 20,
   opacity: 0.8,
  },
  button1: {
   alignItems:"center",
   width: 300,
   height: 50,
   borderRadius: 20,
   backgroundColor: "white",
   borderColor:"black",
   borderWidth : 1 ,
   marginTop:20,
 },
 
 button2: {
   alignItems:"center",
   width: 250,
   height: 50,
   borderRadius: 20,
   backgroundColor: "white",
   borderColor:"black",
   borderWidth : 1 ,
   marginTop:20,
 },
 
 button3: {
   alignItems:"center",
   width: 200,
   height: 50,
   borderRadius: 20,
   backgroundColor: "white",
   borderColor:"black",
   borderWidth : 1 ,
   marginTop:20,
},
 button4: {
   alignItems:"center",
   width: 150,
   height: 50,
   borderRadius: 20,
   backgroundColor: "white",
   borderColor:"black",
   borderWidth : 1 ,
   marginTop:20,
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


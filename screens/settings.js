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
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}



export default class settings extends Component {
  out = () => { 
    firebase
    .auth()
    .signOut()
    .then(() => {this.props.navigation.navigate('Login')});
  }
 
  render() {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>Buddy v1.0</Text>

       <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('bot')}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>About us  <Ionicons name="document-text-outline" size={25} color="rgba(63,143,139,1)" /> </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('Chat')}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Change what buddy calls you<Ionicons name="clipboard-outline" size={25} color="rgba(63,143,139,1)" /></Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => {this.out()}}
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Log Out<Ionicons name="exit-outline" size={25} color="red" /></Text>
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
   justifyContent:"flex-start" 
  },
  button1: {
   alignItems:"center",
   width: 350,
   height: 50,
   borderRadius: 20,
   backgroundColor: "white",
   borderColor:"black",
   borderWidth : 1 ,
   marginTop:80,
 },
 
 iAgreeAbdContinue: {
   color: "#333333",
   fontSize: 20,
   textAlign: "center",
   padding:10,
   opacity: 0.8,
   
   
 },
 txt:{
    color: "#333333",
    fontSize: 20,
    opacity: 0.8,
    paddingTop:50
   },
 
});


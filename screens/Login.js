import React, { Component, useState } from "react";
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
import Svg, { Circle } from "react-native-svg";
import {ScaledSheet} from 'react-native-size-matters';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDoJA2_TVL5aaOUXFh3zl_tQZbrVdZ5wq4",
  authDomain: "buddy-7f8ca.firebaseapp.com",
  projectId: "buddy-7f8ca",
  storageBucket: "buddy-7f8ca.appspot.com",
  messagingSenderId: "31454782285",
  appId: "1:31454782285:web:aa355f4a389f1641118d04",
  measurementId: "G-00CC0YBVL5"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default class Login extends Component {
 
constructor(props){
super(props);
this.state = {
email : '',
password : '',
}}

loginUser = () => {
  firebase
  .auth()
  .signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((response) => {
      const uid = response.user.uid
      const usersRef = firebase.firestore().collection('users')
      usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
              if (!firestoreDocument.exists) {
                  alert("User does not exist anymore.")
                  return;
              }
              const user = firestoreDocument.data()
              this.props.navigation.navigate('Home', {user})
          })
          .catch(error => {
              alert(error)
          });
  })
  .catch(error => {
      alert(error)
  })
}

anynomusLogin = () => {
  firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
    this.props.navigation.navigate('Home');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });}

signUpUser = () => {
firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((response) => {
        const uid = response.user.uid
        const data = {
            id: uid,
            email: this.state.email,
        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .set(data)
            .then(() => {
                this.props.navigation.navigate('Home', {user: data})
            })
            .catch((error) => {
                alert(error)
            });
    })
    .catch((error) => {
        alert(error)
});}

render() {
return (
<View style={styles.container}>
        <KeyboardAvoidingView style={styles.rect1} behavior="position">
        <Svg viewBox="0 0 100 100" style={styles.ellipse}>
        <Circle cx="47" cy="-25" r="90" fill="white" /> 
        </Svg>
          <View style={styles.imageStack}>
            <ImageBackground
              source={require("../assets/images/standblank.png")}
              resizeMode="contain"
              style={styles.image}
            >
            </ImageBackground>
            </View>
            <Text style={styles.signIn}>Sign in</Text>
            <TextInput
          placeholder='Email'
          onChangeText={email => this.setState({email : email})}
          value={this.state.email}
          placeholderTextColor = 'grey'
          style={styles.input}
          autoCapitalize="none"
         />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          onChangeText = {password => this.setState({password : password})}
          value = {this.state.password}
          placeholderTextColor = 'grey'
          style={styles.input}
          autoCapitalize="none"
        />            
         <Text style={styles.forgotPassword}>Forgot Password ?</Text>
         <TouchableOpacity onPress={() => this.anynomusLogin()}> 
         <Text style={styles.anynomusLogin}>Anynomus login</Text>
         
         </TouchableOpacity>
          </KeyboardAvoidingView>
          <TouchableOpacity 
      onPress = {() => this.loginUser()}
      style={styles.button}
      ><Text style={styles.iAgreeAbdContinue}>Login</Text>
      </TouchableOpacity>
     
      <TouchableOpacity 
      onPress = {() => this.signUpUser()}
      style={styles.button2}
      ><Text style={styles.iAgreeAbdContinue}>Sign Up</Text>
      </TouchableOpacity>
      
          </View>
);}}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(180,216,212,0.87)",
    
  },
  input: {
    width: '300@s',
    fontSize: 18,
    opacity:0.8,
    height: 50,
    padding: 10,
    borderRadius: 25,
    borderWidth:1,
    borderColor: 'white',
    marginVertical: 10,
    marginHorizontal: 30,
    color:"grey",
  
  },
  titleText:{
    color:"grey",
    fontSize: 30,
    marginRight:160,
    padding:10
  },
  rect1: {
    justifyContent:"center"
  },
  image: {
    width: '250@s',
    height: '290@s',
  },
  signIn: {
    color: "rgba(63,143,139,1)",
    fontSize: 20,
    letterSpacing: 2,
    marginHorizontal:50
  },
  imageStack: {
    alignItems:"center",
    width: '321@s',
    height: '260@s',
    marginTop: 82,
    marginLeft: 23
  },
  ellipse: {
    top: 0,
    left: 0,
    width: '400@s',
    height: '370@s',
    position: "absolute"
  },
  anynomusLogin: {
    color: "rgba(63,143,139,1)",
    fontSize: 15,
    letterSpacing: 0,
    marginTop: 8,
    marginHorizontal: 50
  },
  forgotPassword: {
    color: "rgba(63,143,139,1)",
    fontSize: 15,
    marginTop: 19,
    marginHorizontal: 50
  },
  button: {
    alignItems:"center",
    width: 160,
    height: 50,
    borderRadius: 100,
    backgroundColor: "rgba(63,143,139,1)",
    marginHorizontal: 40,
    marginVertical: 20
  },
  button2: {
    alignItems:"center",
    width: 200,
    height: 50,
    borderRadius: 100,
    backgroundColor: "rgba(63,143,139,1)",
    marginHorizontal: 40,
  },
  iAgreeAbdContinue: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    padding:10
  },
});


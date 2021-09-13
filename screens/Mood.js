import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button
} from "react-native";
import { Dimensions } from "react-native";
import {ScaledSheet} from 'react-native-size-matters';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const screenWidth = Dimensions.get("window").width;

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

export default class Mood extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    user : firebase.auth().currentUser,  
    LL : ['0','0','0','0'],
    VV : ['0','0','0','0'], 
    VV2:[],
    LL2:[], 
    }}

    getd = (documentSnapshot) => {
      return documentSnapshot.get('date');
    }
    getV= (documentSnapshot) => {
      return documentSnapshot.get('value');
    }
    
    show=()=>{
      const arr =[];
      const arr1 =[];
      firebase
      .firestore()
      .collection('Mood')
      .where('owner', "==", this.state.user.uid)
      .get()
      .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.data());
      arr.push(this.getd(documentSnapshot))
      });
      this.setState({LL:arr})
      })
      
      
      firebase
      .firestore()
      .collection('Mood')
      .where('owner', "==", this.state.user.uid)
      .get()
      .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.data());
      arr1.push(this.getV(documentSnapshot))
      });
      this.setState({VV:arr1})
      })
      }
      
    addH = () => { 
        
      const ref = firebase.firestore().collection('Mood');
      ref
      .add({
         date:new Date().getUTCDate() + '/' +new Date().getUTCMonth(),
          value: 5,
          owner:this.state.user.uid, 
      })
         
  }
  addD = () => { 
        
    const ref = firebase.firestore().collection('Mood');
    ref
    .add({
       date:new Date().getUTCDate() + '/' + new Date().getUTCMonth(),
        value: 1,
        owner:this.state.user.uid, 
    })
       
}
addO = () => { 
        
  const ref = firebase.firestore().collection('Mood');
  ref
  .add({
     date:new Date().getUTCDate() + '/' + new Date().getUTCMonth(),
      value: 3.5,
      owner:this.state.user.uid, 
  })
     
}
addS = () => { 
        
  const ref = firebase.firestore().collection('Mood');
  ref
  .add({
     date:new Date().getUTCDate() + '/' + new Date().getUTCMonth(),
      value: 2,
      owner:this.state.user.uid, 
  })
     
}

    render() {
        return ( 
<SafeAreaView style = {styles.container}>
  <Text style={styles.txt}>Here is your registered mood of your past visits to track your progress</Text>

  <LineChart
    data={{
      labels: this.state.LL,
      datasets: [
        {
          data:[
            Number(this.state.VV[0]),
            Number(this.state.VV[1]),
            Number(this.state.VV[2]),
            Number(this.state.VV[3]),
            
            
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={300}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#333333",
      backgroundGradientFrom: "black",
      backgroundGradientTo: "gray",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "rgba(180,216,212,0.87)"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
<View style= {styles.container2}>
<TouchableOpacity 
      onPress={() =>{this.addD()} }
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Down 😔</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() =>{this.addS()} }
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Sad 🙁</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() =>{this.addO()} }
      style={styles.button1}
      ><Text style={styles.iAgreeAbdContinue}>Okay 😐</Text>
      </TouchableOpacity>
            </View>
     <View style= {styles.container3}>
      <TouchableOpacity 
      onPress={() =>{this.addH()} }
      style={styles.button2}
      ><Text style={styles.iAgreeAbdContinue}>Happy 😊</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity 
      onPress={() =>{this.show()} }
      style={styles.button0}
      ><Text style={styles.tt}>Show tracker</Text>
      </TouchableOpacity>
</SafeAreaView>
        );
}}
const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
     alignItems:"center",
     justifyContent:"flex-start" 
    },
    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: "white",
     alignItems:"center",
     justifyContent:"center" 
    },
    ontainer3: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "white",
     alignItems:"center",
     justifyContent:"center" 
    },
    txt:{
     color: "#333333",
     fontSize: 15,
     padding:10,
     opacity: 0.8,
     textAlign:'center'
    },
    
    button0: {
      alignItems:"center",
      width: '100%',
      height: 50,
      borderRadius: 20,
      backgroundColor: "#3f8f8b",
      bottom: 0
    },
    button1: {
      alignItems:"center",
      width: 130,
      height: 50,
      borderRadius: 20,
      backgroundColor: "white",
      borderColor:"black",
      borderWidth : 1 ,
      elevation:2
    },
    
    button2: {
      alignItems:"center",
      width: 130,
      height: 50,
      borderRadius: 20,
      backgroundColor: "white",
      borderColor:"black",
      borderWidth : 1 ,
      top:-100 ,
    },
    iAgreeAbdContinue: {
      color: "#333333",
      fontSize: 20,
      textAlign: "center",
      padding:10,
      opacity: 0.8,
    },
    tt: {
      color: "white",
      fontSize: 20,
      textAlign: "center",
      padding:10,
      opacity: 0.8,
    },
  });
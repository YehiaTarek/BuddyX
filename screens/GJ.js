import React, { Component , useState } from 'react';
import { ScrollView, Text, StatusBar,StyleSheet ,Button ,FlatList,View} from 'react-native';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { Appbar, TextInput,  } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from 'react-native-elements';


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
 
export default class GJ extends Component {
    
    constructor(props){
        super(props);
        this.state = {
        todo : '',
        user : firebase.auth().currentUser,
        JJ : [],
        }}
       
       addJ = () => { 
        
        if (!this.state.todo.trim()) {
            alert('Please Enter something to add for journal');
          }
          else{
            const ref = firebase.firestore().collection('Journal');
            ref
            .add({
                title: this.state.todo,
                owner:this.state.user.uid,
                
            })
        }       
        }

         gettitle = (documentSnapshot) => {
            return documentSnapshot.get('title');
          }
          
         show=()=>{
            const arr =[];
       firebase
        .firestore()
        .collection('Journal')
        .where('owner', "==", this.state.user.uid)
        .get()
        .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.data());
      arr.push(this.gettitle(documentSnapshot))
    });
    this.setState({JJ:arr})
  })
  
}
SampleFunction=(item)=>{
 
    Alert.alert(item);
 
  }

   
  render(){
    
  return (
    <SafeAreaProvider>
    <StatusBar backgroundColor="#333333" />
      {this.show()}
      <FlatList
      data={this.state.JJ}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Journal: {item}</Text>
        </View>
      )}
    />
      <TextInput placeholder='Add to your journal' 
       onChangeText={todo => this.setState({todo : todo})} 
       value = {this.state.todo}
       />
      <Button  onPress={() => {this.addJ()}} color="#3f8f8b" title="Add"> </Button>
    </SafeAreaProvider>
  );
}
}
const styles = StyleSheet.create({
 
    
    TextStyle:{
      fontSize : 20,
       textAlign: 'center'
    }
    
   });

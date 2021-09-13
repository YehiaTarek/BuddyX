import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Alert
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Chat0 from './screens/chat0';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import Home from './screens/Home';
import Tools from './screens/Tools';
import GJ from './screens/GJ';
import bot from './screens/bot';
import settings from './screens/settings';
import Mood from './screens/Mood';
import AD from './screens/AD';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

import {Icon} from 'react-native-elements';

var firebaseConfig = {
  apiKey: "AIzaSyDoJA2_TVL5aaOUXFh3zl_tQZbrVdZ5wq4",
  authDomain: "buddy-7f8ca.firebaseapp.com",
  projectId: "buddy-7f8ca",
  storageBucket: "buddy-7f8ca.appspot.com",
  messagingSenderId: "31454782285",
  appId: "1:31454782285:web:aa355f4a389f1641118d04",
  measurementId: "G-00CC0YBVL5"
};


const App = () => {

  const [showRealApp, setShowRealApp] = useState(false);
  const [authenticated, setAuthenticated] = useState(true);
  let loading

  const componentDidMount=()=> {
    AsyncStorage.getItem('first_time').then((value) => {
      setShowRealApp(!!value);
      loading = false;
    });
  }
  
  useEffect(() => {
    return firebase.default.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);
 

  const onDone = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setShowRealApp(true);
    });
  };

  const onSkip = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setShowRealApp(true);
    });  
  };

  type Item = typeof slides[0];
  
  const RenderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 96,          
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} resizeMode={'contain'} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <Text style={styles.buttonTextStyle}>Next</Text>
      </View>
    );
  };
  const renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <Text style={styles.buttonTextStyle}>Skip</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <Text style={styles.buttonTextStyle}>i understand and agree</Text>
      </View>
    );
  };

const keyExtractor = (item: Item) => item.title;
  return (
    <>
      {showRealApp ? (
        <NavigationContainer>
          {authenticated ? (
            <MyStack/>
          ):(<Login/>)}
      </NavigationContainer>
      ) : (
        <AppIntroSlider
          data={slides}
          keyExtractor={keyExtractor}
          renderItem={RenderItem}
          onDone={onDone}
          showNextButton={false} 
          showSkipButton={false} 
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderDoneButton}
          activeDotStyle= {{backgroundColor:'rgba(180,216,212,0.87)'}}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 300,
    height: 500,
  },
  introTextStyle: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'grey',
    textAlign: 'center',
  },
  buttonTextStyle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  buttonCircle: {
    width: 130,
    height: 60,
    backgroundColor: '#b4d8d4',
    borderRadius:22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 's1',
    text: ' Hi ! There i am Buddy An emotional support smart bot that will help you overcome deppression and negative thoughts 😊',
    title: '',
    image: require("./assets/images/welcome.png"),
    backgroundColor: 'white',
  },
  {
    key: 's2',
    title: '',
    text: 'We use CBT for our treatment and you can know more about through out sessions',
    image: require("./assets/images/normalstand.png"),
    backgroundColor: 'white',
 },
  {
    key: 's3',
    title: '',
    text: 'Feel bad and want to talk ? your buddy is here 24h in the talk to buddy section talk freely and get your problems answered',
    image: require("./assets/images/nice.png"),
    backgroundColor: 'white',
   },
  {
    key: 's4',
    title: '',
    text: ' All data is private and secure the only data that we use is during the bot conversations and we only use it for retraining and your identity stays unkown',
    image: require("./assets/images/normalstand.png"),
    backgroundColor: 'white',
  },
];

const Stack = createStackNavigator()
  function MyStack() {
    return (
      <Stack.Navigator       
      initialRouteName="Home"
      headerMode="screen"
      //screenOptions={{}}
    >   
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}
         />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Mood" component={Mood} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
            headerTitle: () => <Text>Mood Tracker</Text>,
            headerRight : () => <Image source={require("./assets/images/normalstand.png")} 
            style={{height:70 , width:60 ,top:10}}/>
         }} />
        <Stack.Screen name="Tools" component={Tools} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
            headerTitle: () => <Text>Tools</Text>,
            headerRight : () => <Image source={require("./assets/images/normalstand.png")} 
            style={{height:70 , width:60 ,top:10}}/>
         }} />
        <Stack.Screen name="AD" component={AD} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
            headerTitle: () => <Image source={require("./assets/images/normalstand.png")} 
            style={{height:90 , width:80 ,top:17}}/>,
         }}  />
        <Stack.Screen name="GJ" component={GJ} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
            headerTitle: () => <Text>Gratitude journal</Text>,
            headerRight : () => <Image source={require("./assets/images/normalstand.png")} 
            style={{height:70 , width:60 ,top:10}}/>
         }} />
        <Stack.Screen name="Settings" component={settings} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
           }} />
        <Stack.Screen name="Chat" component={Chat0} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
            headerTitle: () => <Image source={require("./assets/images/normalstand.png")} 
            style={{height:90 , width:80 ,top:17}}/>,
         }} />
         <Stack.Screen name="bot" component={bot} options={{
            headerTransparent: false,
            headerTitleAlign:"center",
            headerTitle: () => <Image source={require("./assets/images/normalstand.png")} 
            style={{height:90 , width:80 ,top:17}}/>,
         }}  />
        
      </Stack.Navigator>
    );
    }

  
    
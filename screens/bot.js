import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from "react-native-elements/dist/icons/Icon";

import styles from './botstyle';
import WatsonChat from '../src/chat';
import { SafeAreaView } from 'react-native-safe-area-context';

class Healthbot extends React.Component {
  constructor(props) {
    super(props);
    this.url ='https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/4fc34b86-7803-48e2-822a-9b24eb4d2186';
    this.iam_apikey = 'ppRd79dnmRpuamfK_AzAfxhJMvensDrYSV56F8Zgm-RG';
    this.workspaceId = '13001194-3515-4f7c-bbe9-a8e0f088fd6c';
    this.watson = new WatsonChat();
    this.watson.init(this.url, this.iam_apikey, this.workspaceId, true);

    this.state = {
      messages: [],
      chatInput: ''
    };
  }

  sendMessage = () => {
    let timeNowInputMsg = new Date().toLocaleTimeString();
    timeNowInputMsg = timeNowInputMsg.substr(
      0,
      timeNowInputMsg.lastIndexOf(':')
    );
    const inputMsgTime = this.watson.convertTimeToAMPM(timeNowInputMsg);
    const messages = this.state.messages.slice();
    messages.push(
      Object.assign(
        {},
        { msg: this.state.chatInput, isWatson: false, time: inputMsgTime }
      )
    );
    this.setState(
      {
        messages: messages
      },
      () => {
        this.watson.sendMessage(
          this.state.messages,
          this.state.chatInput,
          (err, msgs) => {
            if (msgs) {
              this.setState({
                messages: msgs,
                chatInput: ''
              });
            }
          }
        );
      }
    );
  };

  renderMessages = () => {
    const renderMessages = [];
    this.state.messages.map((message, index) => {
      if (message.isWatson) {
        renderMessages.push(
          <View style={styles.botMsgContainer} key={index + 1}>
            <View style={styles.botMsgWrapper}>
              <View style={styles.botMsg}>
                <Text style={styles.botChatboxHead}></Text>
                <Text style={styles.botChatText}>{message.msg}</Text>
              </View>
              <Text style={styles.botMsgTime}>{message.time}</Text>
            </View>
          </View>
        );
      } else {
        renderMessages.push(
          <View style={styles.userMsg} key={index + 1}>
            <Text style={styles.userChatboxHead}></Text>
            <Text style={styles.userChatText}>{message.msg}</Text>
          </View>
        );
      }
    });
    return renderMessages;
  };
  render() {
    return (
       <SafeAreaView style={styles.parent} >
            <StatusBar backgroundColor="#303740" />
           
          <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView style={styles.chatContainer} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <View style={styles.msgContainer}>
              {this.renderMessages()}
            </View>
          </KeyboardAvoidingView>
          </ScrollView>
          
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
         <View style={styles.inputBoxContainer}>
            <TextInput
              placeholder="Your message here.."
              style={styles.chatboxTextInput}
              onChangeText={text => this.setState({ chatInput: text })}
              value={this.state.chatInput}
            />
            
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                this.sendMessage();
              }}
            >
            <Icon name="paper-plane"  type='font-awesome' color='black'/>
            </TouchableOpacity>
            </View>
            
            </KeyboardAvoidingView>
          
          
            </SafeAreaView>
        
    );
  }
}

export default Healthbot;
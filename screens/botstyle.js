import {
    StyleSheet,
    Dimensions,
  } from 'react-native';
  
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'flex-end'
    },
    chatHead: {
      height: Dimensions.get('window').height * 0.1,
      // height: 80,
      width: '100%',
      backgroundColor: '#28313B',
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    chatHeadText: {
      fontSize: 25,
      fontWeight: '800',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    chatContainer: {
      height: Dimensions.get('window').height * 0.8,
      alignItems: 'center',
      justifyContent:'flex-end',
      width: '100%',
      paddingBottom:10,
      
    },
    msgContainer: {
      paddingTop: 20,
      paddingBottom: 10,
      width: '100%',
      zIndex: 2,
      backgroundColor: '#ffffff',
     
    },
    botChatboxHead: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    userChatboxHead: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
    botChatText: {
      color: '#fcfcfc',
    },
    userChatText: {
      color: 'white',
    },
    botMsgContainer: {
      flexDirection: 'row',
      paddingLeft: 10,
    },
    botMsgWrapper: {
      marginBottom: 15,
      justifyContent: 'flex-end',
    },
    botMsgTime: {
      marginTop: 10,
      color: '#353535',
      marginLeft: 10,
    },
    botMsg: {
      maxWidth: '90%',
      backgroundColor: '#333333',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 7,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      padding: 15,
      alignSelf: 'flex-start',
      //marginLeft: 10,
      zIndex: 1,
    },
    userMsg: {
      alignSelf: 'flex-end',
      maxWidth: '90%',
      backgroundColor: '#3f8f8b',
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      padding: 15,
      marginBottom: 15,
      zIndex: 1,
    },
    inputBoxContainer: {
      height: Dimensions.get('window').height * 0.09,
      backgroundColor: '#ffffff',
      marginBottom: 15,
      borderWidth:1,
      borderColor:'black',
      width: '100%',
      elevation: 8,
      padding: 5,
      borderRadius: 10,
      zIndex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    chatboxTextInput: {
      fontSize: 12,
      width: '90%',
    },
  });
  
  export default styles;
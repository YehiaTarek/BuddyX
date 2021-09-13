import React, { Component } from "react";
import { StyleSheet,View , SafeAreaView,TouchableOpacity,Image} from "react-native";
import ChatBot from 'react-native-chatbot';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const steps = [
    {
        id: '1',
        message: "Welcome back! tell me how can i help you today?",
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Anti-depression', trigger: 'a1' },
          { value: 2, label: 'Anger-Management', trigger: 'b1' },
          { value: 3, label: 'Fighting Insomia', trigger: 'c1' },
          { value: 4, label: 'Overcoming Anxiety', trigger: 'd1' },
        ],
      },
      {
        id: 'a1',
        message: "you should keep yourself busy and keeps your mind off the negative thoughts",
        trigger: 'a2'
      },
      {
        id: 'a2',
        options: [
          { value: 1, label: 'how  I do this?', trigger: 'a3' },
        ],
    },
    {
        id: 'a3',
        message: "Engage in an activity, and this can be just about any healthy activity.",
        trigger: 'a4'
      },
    {
        id: 'a4',
        options: [
          { value: 1, label: 'like what?', trigger: 'a5' },
        ],
    },
    {
        id: 'a5',
        message: "Read a book, make strawberry jam, go for a walk, call your friend, wash the dishes, est.",
        trigger: 'a6'
      },
    {
        id: 'a6',
        options: [
          { value: 1, label: 'what I do next?', trigger: 'a7' },
        ],
    },
    {
        id: 'a7',
        message: "If you finish, move on to a new activity and you can Do something kind for another person",
        trigger: 'a8'
      },
  
    {
        id: 'a8',
        options: [
          { value: 1, label: 'why?', trigger: 'a9' },
        ],
    },
    {
        id: 'a9',
        message: "Giving service can help you relieve emotional distress in a couple ways. It will help get your mind off of the problem at hand, we feel good about and help you deal with stress.",
        trigger: 'a10'
      },
      {
        id: 'a10',
        message: "Is there a time when you've faced more difficult challenges than you're facing today?",
        trigger: 'a11'
      },
    {
        id: 'a11',
        options: [
          { value: 1, label: 'maybe', trigger: 'a12' },
        ],
    },
    {
        id: 'a12',
        message: "If yes you should make comparisons  to add a different perspective to what you’re experiencing right now.",
        trigger: 'a13'
      },
    {
        id: 'a13',
        options: [
          { value: 1, label: 'how this helps me', trigger: 'a14' },
        ],
    },
    {
        id: 'a14',
        message: "it makes you feel good and don’t add more distress and emotional pain to your current situation.",
        trigger: 'a15'
      },
      {
        id: 'a15',
        message: "do you know that You also have the power to invoke the opposite emotion of your current distressed feeling.",
        trigger: 'a16'
      },
    {
        id: 'a16',
        options: [
          { value: 1, label: 'can you give me example ?', trigger: 'a17' },
        ],
    },
    {
        id: 'a17',
        message: "sure…If you are feeling anxious, practice meditation for 15 minutes. If you're feeling depressed, go ahead and Google Image search “adorable puppies”. Adding a dose of the opposite emotion helps reduce the intensity of the negative emotion.",
        trigger: 'a18'
      },
    {
        id: 'a18',
        options: [
          { value: 1, label: 'I get it now', trigger: 'a19' },
        ],
    },
    {
        id: 'a19',
        message: "good, also When you can’t deal with something just yet, it’s okay to push the problem out of your mind temporarily. ",
        trigger: 'a20'
      },
    {
        id: 'a20',
        options: [
          { value: 1, label: 'Show me How can I do this ?', trigger: 'a21' },
        ],
    },
    {
        id: 'a21',
        message: "You can push away by distracting yourself with other activities, thoughts, or mindfulness. You can even set a time to come back to the issue. You know that it will be addressed, and you can relax in the interim.",
        trigger: 'a22'
      },
      {
        id: 'a22',
        message: "you should Replace negative, anxious thoughts with activities that busy your mind.",
        trigger: 'a23'
      },
    {
        id: 'a23',
        options: [
          { value: 1, label: 'How can I benefit from this ?', trigger: 'a24' },
        ],
    },
    {
        id: 'a24',
        message: "saying the alphabet backwards or doing a Sudoku puzzle These distractions can help you avoid self-destructive behavior until you're able to achieve emotion regulation.",
        trigger: 'a25'
      },
      {
        id: 'a25',
        message: "then you can Use your five senses to self-soothe during times of distress. A self-soothing behavior",
        trigger: 'a26'
      },

    {
        id: 'a26',
        options: [
          { value: 1, label: 'How can I do this ?', trigger: 'a27' },
        ],
    },
    {
        id: 'a27',
        message: "taking a warm bath with a lavender bath bomb and relaxing music, eating a comforting snack, or watching your favorite show.",
        trigger: 'a28'
      },
    {
        id: 'a28',
        options: [
          { value: 1, label: 'Is this useful to me ?', trigger: 'a29' },
        ],
    },
    {
        id: 'a29',
        message: "sure, Anything that appeals to your senses can help you cope with the present situation.",
        trigger: 'a30'
      },
      {
        id: 'a30',
        message: "was this helpful for you",
        trigger: 'a31'
      },
    {
        id: 'a31',
        options: [
          { value: 1, label: 'Yes very helpful', trigger: 'b26' },
        ],
    },
      {
        id: 'b1',
        message: "now You’re at your emotional breaking point.Maybe the worst has happened, or maybe it was just the “last straw”.",
        trigger: 'b2'
      },
      {
        id: 'b2',
        message: "first of all when we are upset owr bodies often feels hot?",
        trigger: 'b3',
      },
      {
        id: 'b3',
        options: [
          { value: 1, label: 'maybe', trigger: 'b4' },
        ],
    },
    {
        id: 'b4',
        message: "To counter this we need to change your body temprature ?",
        trigger: 'b5',
      },
      {
        id: 'b5',
        options: [
          { value: 1, label: 'How?', trigger: 'b6' },
        ],
    },
    {
        id: 'b6',
        message: "try to splash your face with cold water or hold an ice cube or let the car’s AC blow on your face.",
        trigger: 'b7',
      },
      {
        id: 'b7',
        message: "This well help you to cool down physically and calm down emotionaly",
        trigger: 'b8',
      },
      {
        id: 'b8',
        options: [
          { value: 1, label: 'I feel better now ', trigger: 'b9' },
        ],
    },
    {
        id: 'b9',
        message: "Now we need to match your imotional intense",
        trigger: 'b10',
      },
      {
        id: 'b10',
        options: [
          { value: 1, label: 'How? ', trigger: 'b11' },
        ],
    },
    {
        id: 'b11',
        message: "You’re not a marathon runner? That’s okay, you don’t need to be.",
        trigger: 'b12',
      },
      {
        id: 'b12',
        options: [
          { value: 1, label: 'whats shall i do', trigger: 'b13' },
        ],
    },
    {
        id: 'b13',
        message: "Sprint down to the end of the street, jump in the pool for a few laps, or do jumping jacksuntil you’ve tired yourself out. ",
        trigger: 'b14',
      },
      {
        id: 'b14',
        options: [
          { value: 1, label: 'how this benefites me?', trigger: 'b15' },
        ],
    },
    {
        id: 'b15',
        message: "Increasing oxygen flow helps decrease stress levels. Plus, it’s hard to stay dangerously upset when you’re exhausted.",
        trigger: 'b16',
      },
      {
        id: 'b16',
        options: [
          { value: 1, label: 'I can see now its helpful,i dont want to do it', trigger: 'b17' },
        ],
    },
    {
        id: 'b17',
        message: "i hove got another trick in my sleave,do yo know that something as simple as controlling your breath can have a profound impact on reducing emotional pain.",
        trigger: 'b18',
      },
      {
        id: 'b18',
        options: [
          { value: 1, label: 'How?', trigger: 'b19' },
        ],
    },
    {
        id: 'b19',
        message: "There are many different types of breathing exercises. do you want me to tell you one?",
        trigger: 'b20',
      },
      {
        id: 'b20',
        options: [
          { value: 1, label: 'Sure', trigger: 'b21' },
        ],
    },
    {
        id: 'b21',
        message: "try a technique called “box breathing”. Each breath interval will be four seconds long. Take in air four seconds, hold it in four seconds, breathe out four, and hold four. And then start again. Continue to focus on this breathing pattern",
        trigger: 'b22',
      },
      {
        id: 'b22',
        options: [
          { value: 1, label: 'how this benefites me?', trigger: 'b23' },
        ],
    },
    {
        id: 'b23',
        message: "you will feel more calm. Steady breathing reduces your body’s fight or flight response.",
        trigger: 'b24',
      },
      {
        id: 'b24',
        message: "Is this helpful to you?",
        trigger: 'b25',
      },
      {
        id: 'b25',
        options: [
          { value: 1, label: 'thats thats very helpful', trigger: 'b26' },
        ],
    },
     {
        id: 'b26',
        message: "Do you need anything else?",
        trigger:'b27'
    },
    {
        id: 'b27',
        options: [
            { value: 1, label: 'Yes', trigger: '2' },
            { value: 2, label: 'No', trigger: 'b28' },

          ],
    },
    {
        id: 'b28',
       message:'Hope it helped',
       end:true,
    },
    {
        id: 'd1',
        message: "sometimes we face big crises we must Freeze in our tracks. Don’t move. And Try visualizing a red STOP sign in front of you. Don’t react when your emotions that are hot and filled with energy and Don’t let your emotions control you.?",
        trigger: 'd2',
      },
      {
        id: 'd2',
        options: [
          { value: 1, label: 'How?', trigger: 'd3' },
        ],
    },
    {
        id: 'd3',
        message: "You can do this in your mind or you can physically take a step back.",
        trigger: 'd4',
      },
      {
        id: 'd4',
        options: [
          { value: 1, label: 'how physically take a step back helps me?', trigger: 'd5' },
        ],
    },
    {
        id: 'd5',
        message: "This helps you unglue yourself from the intensity of the urge to react. Once you’ve taken a step back, notice how you’re breathing. You may be holding your breath or breathing shallowly. Try to take a few slow, deep breaths.",
        trigger: 'd6',
      },
      {
        id: 'd6',
        message: "you Observe what’s going on both inside of you and around you.",
        trigger: 'd7',
      },
      {
        id: 'd7',
        options: [
          { value: 1, label: 'how can I do this?', trigger: 'd8' },
        ],
    },
    {
        id: 'd8',
        message: "If there are other people around you, notice what they’re doing or saying. Notice what you’re thinking and feeling.",
        trigger: 'd9',
      },
      {
        id: 'd9',
        options: [
          { value: 1, label: 'why it is important to observe things and people around me ?', trigger: 'd10' },
        ],
    },
    {
        id: 'd10',
        message: "it is easy to zoom in and only see a tiny bit of a bigger picture but then you only have one slice of information. You need to be able to see the whole picture to figure out the best course of action.",
        trigger: 'd11',
      },
      {
        id: 'd11',
        options: [
          { value: 1, label: 'I figure it out now', trigger: 'd12' },
        ],
    },
    {
        id: 'd12',
        message: "Great.",
        trigger: 'd13',
      },
      {
        id: 'd13',
        message: "you should also Use mindfulness skills to consult your wise mind.",
        trigger: 'd14',
      },
      {
        id: 'd14',
        options: [
          { value: 1, label: 'How ido this?', trigger: 'd15' },
        ],
    },
    {
        id: 'd15',
        message: "Ask your wise mind what to do and when you stay calm you can think well and react well",
        trigger: 'd16',
      },
      {
        id: 'd16',
        message: "was this helpful for you",
        trigger: 'd17',
      },
      {
        id: 'd17',
        options: [
          { value: 1, label: 'yes very helpful', trigger: 'b26' },
        ],
    },
    {
        id: 'c1',
        message: "Welcome back! tell me how can i help you today?",
        trigger:2,
      },
          

      
        ];

  class AD extends Component {
    
    render(){
  return (
    <SafeAreaProvider style={styles.container}>
            <ChatBot steps={steps} 
            botBubbleColor="#333333"
            style={{ backgroundColor: 'black'}}//chatbox
            contentStyle={{ backgroundColor: 'white' }}//background
            footerStyle={{ backgroundColor: '#fff', padding: 1, borderRadius: 10, elevation: 2, }}
            submitButtonStyle={{ backgroundColor: '#333333', borderRadius: 20, width: 60}}
            submitButtonContent ={<Icon name="paper-plane"  type='font-awesome' color='white'/>}
            hideUserAvatar={true}
            hideBotAvatar={true}
            userBubbleColor="#3f8f8b"
            userFontColor="white"
            optionBubbleColor="white"
            optionFontColor="#333333"
            optionStyle={{borderColor:"#3f8f8b",borderWidth:3 ,borderRadius:22 }}
            />
    </SafeAreaProvider>
  );
}
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
});

export default AD;

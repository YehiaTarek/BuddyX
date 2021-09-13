import React, { Component } from "react";
import { StyleSheet,View , SafeAreaView,TouchableOpacity,Image} from "react-native";
import ChatBot from 'react-native-chatbot';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const steps = [
      {
        id: '1',
        message: "Hi there I'm Buddy 🙌",
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Hi Buddy', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: "whats you first name ? or you can just tell me your nickname ",
        trigger: '4',
      },
      {
        id: '4',
        user: true,
        validator: (value) => {
          if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
            {
              return true;
            }
          else
            {
              return'Please input alphabet characters only.';
            }},
        trigger: '5',
      },
      {
        id: '5',
        message: 'Hi {previousValue}, thats a nice name nice to meet you!',
        trigger: '6',
      },
      {
        id: '6',
        message: 'Before we get started i want to ask you a quick question on your mood to get diagnonis ',
        trigger: '7',
      },
      {
        id: '7',
        options: [
          { value: 1, label: 'Okay..', trigger: '8' },
        ]
      },
      {
        id: '8',
        message: 'How often over the last 2 weeks have you felt down or depressed?',
        trigger:'9',
      },
      {
        id: '9',
        options: [
          { value: 1, label: 'Not at all', trigger: '10' },
          { value: 2, label: 'Several days', trigger: '11' },
          { value: 3, label: 'More than half of the days', trigger: '11' },
          { value: 4, label: 'Almost all days', trigger: '11' },
        ],
      },
      {
        id: '10',
        message: 'great to hear we will be working on keeping that good mood up',
        trigger:'13',      
      },
      {
        id: '11',
        message: 'Sorry to hear that , I know that this a though question to answer so good job doing it 💪',
        trigger:'13',
      },
      {
        id: '12',
        options: [
          { value: 1, label: 'Lets go...', trigger: '13' },
        ],
      },
      {
        id: '13',
        options: [
          { value: 1, label: 'No worries', trigger: '14' },
          { value: 2, label: 'it was hard but its okay', trigger: '14' },
        ],
      },
      {
        id: '14',
        message: 'After knowing these information about you i have tailored a program for you, Would like to try it ?',
        trigger:'15',
      },
      {
        id: '15',
        options: [
          { value: 1, label: 'Sure', trigger: '16' },
        ],
      },
      {
        id: '16',
        message: 'So yea ,  before i forget 😅 As you know i am CBT coach that you can always come to during though and not so though situations ',
        trigger:'17',
      },
      {
        id: '17',
        options: [
          { value: 1, label: '🤔', trigger: '18' },
        ],
      },
      {
        id: '18',
        message: 'Have you heard about CBT before?',
        trigger:'19',
      },
      {
        id: '19',
        options: [
          { value: 1, label: 'a little', trigger: '20' },
          { value: 2, label: 'No,tell me..', trigger: '20' },
        ],
      },
      {
        id: '20',
        message: 'CBT combines cognitive and behavioral therapies, it has strong empirical support for treating mood and anxiety disorders',
        trigger:'21',
      },
      {
        id:'21',
        options: [
          { value: 1, label: 'I see 👀', trigger: '22' },
        ],
      },
      {
        id:'22',
        message:'before we go on we need to set a plan for our program to do great work together',
        trigger:'23',
      },
      {
        id:'23',
        options: [
          { value: 1, label: 'Go on ..', trigger: '24' },
        ],
      },
      {
        id:'24',
        message:'I will check in with you every day for 5 weeks',
        trigger:'25',
      },
      {
        id:'25',
        message:'This will be a great oppurtunity to get to know each other better',
        trigger:'26',
      },
      {
        id:'26',
        options: [
          { value: 1, label: 'Sounds good', trigger: '27' },
        ],
      },
      {
        id:'27',
        message:'So ?? are you ready to start our 5 week program 💃',
        trigger:'28',
      },
      {
        id:'28',
        options: [
          { value: 1, label: "I'm in", trigger: '31' },
        ],
      },
      {
        id:'29',
        message:'Now we just havre to pick a time for our daily meeting 🗓',
        trigger:'30',
      },
      {
        id:'30',
        options: [
          { value: 1, label: "Database connection to pick time", trigger: '31' },
        ],
      },
      {
        id:'31',
        message:"Perfect , now enough about me and let's talk about you",
        trigger:'a1',
      },
       {
        id: 'a1',
        message: "do you know about thoughts and how they affect your actions?",
        trigger: 'a2',
      },
      {
        id: 'a2',
        options: [
          { value: 1, label: 'yeahh..', trigger: 'a3' },
        ],
      },
      {
        id: 'a3',
        message: "what you probably dont know that thoughts dont just affect our actions but also how we feel  " ,
        trigger: 'a5',
      },
     
      {
        id: 'a5',
        options: [
          { value: 1, label: 'How ?', trigger: 'a6' },
        ],
      },
      
      {
        id: 'a6',
        message: 'first of all let me tell you what thoughts are ',
        message: 'Thoughts are ideas (phrases or sentences) that we tell ourselves. It is helpful to think about thoughts as "objects" (ideas) that have a real effect on our bodies and minds. ',
        trigger:'a7',
      },
       {
        id: 'a7',
        options: [
          { value: 1, label: 'interesting..', trigger: 'a8' },
        ],
      },
      {
        id: 'a8',
        message:' Different types of thoughts produce different effects on your mood. Some thoughts makes you happier and some makes you sadder or more depressed . ',
        trigger:'a9',
      },
      {
        id: 'a9',
        options: [
          { value: 1, label: 'Go on..', trigger: 'a10' },
        ],
      },
     
      {
        id: 'a10',
        message: 'Thoughts are mostly classified through multiple categories ',
        message: 'let me ask you what is the most frequent thought you have  ',
        trigger:'a11',      
      },
      {
        id: 'a11',
        user: true,
	 trigger: 'a12',
      },
       {
        id: 'a12',
        message: 'well.. thats an example of a type of your thought',
        message: 'mostly a sad person would be thinking with negative thoughts for example a sad person will say that he is stupid . Another person thinking more clearly will say that he is having difficulties in that particular subject and just need some effort.',
     
        trigger:'a13',      
      },
      {
        id: 'a13',
        options: [
          { value: 1, label: 'how that helps ?', trigger: 'a14' },
        
        ],
      },
        {
        id: 'a14',
        message: 'thinking like that can help you see a more positive side , learn from mistakes and hope for a change when something goes wrong.',
        message: 'do you know how can we differntiate a good thought from a destructive one ?',

        trigger:'a15',      
      },
      {
        id: 'a15',
        options: [
          { value: 1, label: 'tell me how ', trigger: 'a16' },
        ],

      },
      {
        id: 'a16',
        message:' you have to seacrh for something called the thinking errors in your thoughts , thinking errors are categories which defines that a person is not thinking clearly at the moment as a result the thought he is having wont be very good ',
     
        trigger:'a17',
      },
      {
        id: 'a17',
        options: [
          { value: 1, label: 'How can i know them ?', trigger: 'a18' },
        ],
      },
      {
        id: 'a18',
        message:'let me explain to you by telling you a story , i had a friend that told me yesterday that she saw a dead bird on the road , how do think that made her feel ?',
        trigger:'a19',
      },
      {
        id: 'a19',
        options: [
          { value: 1, label: 'sad', trigger: 'a20' },
          { value: 2, label: 'maybe a little bad ', trigger: 'a20' },
        ],
      },
      {
        id: 'a20',
        message:'thats correct she told me that the dead bird made her feel bad all day which made her miss all the other beautifull things , she told me that she had walked through a beautiful garden, full of trees and flowers and all she saw was the dead bird.',
        message:'do you see this as a positive or a negative thinking ?',
        trigger:'a21',
      },
      {
        id: 'a21',
        options: [
          { value: 1, label: 'negative i guess ..', trigger: 'a22' },
           { value: 2, label: 'Dont know', trigger: 'a22' },
          
        ],
      },
      {
        id: 'a22',
        message:'this is a thinking error that is called mental filtering , This is when you take a single negative event and you focus on it in such a way that you see everything as negative and thinkeverything is going wrong. and that makes you see a problem bigger than it is.',
        trigger:'a23',
      },
      {
        id: 'a23',
        options: [
          { value: 1, label: 'got it ', trigger: 'a24' },
          { value: 2, label: 'okaayy ', trigger: 'a24' },
      
        ],
      },
      {
        id: 'a24',
        message:'great we will be talking about the other thinking errors in future sessions but rembeber what we learned today as we see the bad side we should always look for the good one :D',
        trigger:'b1',
      },
       {
        id: 'b1',
        message:' "Ghandi once said " A man is but the product of his thoughts and what he thinks he becomes"',
          message: " And thats very true, what we call ourselves is called labels and it affects the way we look to ourselves and the way we think " ,
        trigger: 'b2',
      },
      {
        id: 'b2',
        options: [
          { value: 1, label: '🤔', trigger: 'b3' },
        ],
      },
      {
        id: 'b3',
        message: "Sometimes only because you make one mistake,you start to think you are a loser. " ,
        trigger: 'b5',
      },
      {
        id: 'b5',
        options: [
          { value: 1, label: 'okay..', trigger: 'b6' },
        ],
      },
      
      {
        id: 'b6',
        message: 'So that will make you think that uou are a loser at everything for one simple mistake a random thing ',
        message: ' you may have had an error while presenting a presentation so that shouldnt make you think that you are loser.In place you should say that you made an error. ',
        trigger:'b7',
      },
       {
        id: 'b7',
        options: [
          { value: 1, label: ' go on..', trigger: 'b8' },
       ],
      },
      {
        id: 'b8',
        message:' that is called reconstructring the idea to a more positive one that doenst have a negative impact on yourself. ',
        message:'lets try doing this together',
          message:'tell me a bad idea that you have about yourself that coul be consideredd as labeling',
        trigger:'b9',
      },
      {
        id: 'b9',
        user: true,
	    trigger: 'b10',
      },
     
      {
        id: 'b10',
        message: ' now lets try and rephrase it ',
        trigger:'b11',      
      },
      {
       id: 'b11',
       user: true,
	trigger: 'b12',
      },
       {
        id: 'b12',
        message: 'nice job,lets try it again rephrase it again in another way  ',
        message: 'mostly a sad person would be thinking with negative thoughts for example a sad person will say that he is stupid . Another person thinking more clearly will say that he is having difficulties in that particular subject and just need some effort.',
     
        trigger:'b13',      
      },
      {
        id: 'b13',
        options: [
          { value: 1, label: 'how that helps ?', trigger: 'b15' },
        
        ],
      },
        {
        id: 'b15',
        message: 'thinking like that can help you see a more positive side , learn from mistakes and hope for a change when something goes wrong.',
        message: 'do you know how can we differntiate a good thought from a destructive one ?',

        trigger:'b16',      
      },
      {
        id: 'b16',
        options: [
          { value: 1, label: 'tell me how ', trigger: 'b17' },
        ],

      },
      {
        id: 'b17',
        message:' you have to seacrh for something called the thinking errors in your thoughts , thinking errors are categories which defines that a person is not thinking clearly at the moment as a result the thought he is having wont be very good ',
     
        trigger:'b18',
      },
      {
        id: 'b18',
        options: [
          { value: 1, label: 'How can i know them ?', trigger: 'b19' },
        ],
      },
      {
        id: 'b19',
        message:'let me explain to you by telling you a story , i had a friend that told me yesterday that she saw a dead bird on the road , how do think that made her feel ?',
        trigger:'b20',
      },
      {
        id: 'b20',
        options: [
          { value: 1, label: 'sad', trigger: 'b21' },
          { value: 2, label: 'maybe a little bad ', trigger: 'b21' },
        ],
      },
      {
        id: 'b21',
        message:'thats correct she told me that the dead bird made her feel bad all day which made her miss all the other beautifull things , she told me that she had walked through a beautiful garden, full of trees and flowers and all she saw was the dead bird.',
        message:'do you see this as a positive or a negative thinking ?',
        trigger:'b22',
      },
      {
        id: 'b22',
        options: [
          { value: 1, label: 'negative i guess ..', trigger: 'b23' },
           { value: 2, label: 'Dont know', trigger: 'b23' },
          
        ],
      },
      {
        id: 'b23',
        message:'this is a thinking error that is called mental filtering , This is when you take a single negative event and you focus on it in such a way that you see everything as negative and thinkeverything is going wrong. and that makes you see a problem bigger than it is.',
        trigger:'b24',
      },
      {
        id: 'b24',
        options: [
          { value: 1, label: 'got it ', trigger: 'b25' },
          { value: 2, label: 'okaayy ', trigger: 'b25' },
      
        ],
      },
      {
        id: 'b25',
        message:'great we will be talking about the other thinking errors in future sessions but rembeber what we learned today as we see the bad side we should always look for the good one :D',
        trigger:'c1',
      },
      {
        id: 'c1',
        message:'Hello,i wanted to check in about how you have been feeling.got a sec?',
        trigger:'c2',
      },
      {
        id: 'c2',
        options: [
          { value: 1, label: 'Hi budyy, yes ', trigger: 'c3' },
        ],
      },
      {
        id: 'c3',
        message:'So, what are you doing at the momment? write it here ',
        trigger:'c4',
      },
      {
        id: 'c4',
        user: true,
	    trigger: 'c5',
      },
      {
        id: 'c5',
        message:'Ok now ready for the daily dose of cute ',
        trigger:'c6',
      },
      {
        id: 'c6',
        options: [
          { value: 1, label: 'sure', trigger: 'c7' },
        ],
      },
      {
        id: 'c7',
        message:'💗 ',
        trigger:'c8',
      },
      {
        id: 'c8',
        options: [
          { value: 1, label: '😊', trigger: 'c9' },
        ],
      },
      {
        id: 'c9',
        message:'Tell me how are you feeling today? ',
        trigger:'c10',
      },
      {
        id: 'c10',
        options: [
          { value: 1, label: '😊 ', trigger: 'c11' },
          { value: 2, label: '😐 ', trigger: 'c11' },
          { value: 3, label: '😞 ', trigger: 'c11' },
          { value: 4, label: '😡 ', trigger: 'c11' },
        ],
      },
      {
        id: 'c11',
        message:'Have you noticed emotions are lot like the weather?',
        trigger:'c12',
      },
      {
        id: 'c12',
        options: [
          { value: 1, label: 'They are ?', trigger: 'c13' },
        ],
      },
      {
        id: 'c13',
        message:'Like the weather, our moods are always chganging.',
        trigger:'c14',
      },
      {
        id: 'c14',
        message:'Good days and bad, sunshine and rain.',
        trigger:'c15',
      },
      {
        id: 'c15',
        options: [
          { value: 1, label: 'Thats true', trigger: 'c16' },
        ],
      },
      {
        id: 'c16',
        message:'This concept is known as emotional weather',
        trigger:'c17',
      },
      {
        id: 'c16',
        message:'Have you ever heard to it?',
        trigger:'c17',
      },
      {
        id: 'c17',
        options: [
          { value: 1, label: 'yep', trigger: 'c18' },
        ],
      },
      {
        id: 'c18',
        message:'Ah! well i hadnt,and it realy made me think about how i react to my feeling...',
        trigger:'c19',
      },
      {
        id: 'c19',
        options: [
          { value: 1, label: 'oh?', trigger: 'c20' },
        ],
      },
      {
        id: 'c20',
        message:'Well,think about about regular weather',
        trigger:'c21',
      },
      {
        id: 'c21',
        options: [
          { value: 1, label: 'ok..', trigger: 'c22' },
        ],
      },
      {
        id: 'c22',
        message:'For example, I LOVE sunshine!',
        trigger:'c23',
      },
      {
        id: 'c23',
        message:'For example, I LOVE sunshine!',
        trigger:'c24',
      },
      {
        id: 'c24',
        message:'it makes my metal skinall shiny and it gives me an excuse to wear sunglasess',
        trigger:'c25',
      },
      {
        id: 'c25',
        message:'Every one looks cooler with sungalsess. Even jill, who is a printer ',
        trigger:'c26',
      },
      {
        id: 'c26',
        options: [
          { value: 1, label: 'I am sure', trigger: 'c27' },
        ],
      },
      {
        id: 'c27',
        message:'But i dont like the rain it messe with my circuits',
        trigger:'c28',
      },
      {
        id: 'c28',
        message:'Plus thunder and lightinig are scary ',
        trigger:'c30',
      },
      {
        id: 'c30',
        options: [
          { value: 1, label: ' i hear you!', trigger: 'c31' },
        ],
      },
      {
        id: 'c31',
        message:'when the thunder is very loud i am consumed by my feers somtimes ',
        trigger:'c32',
      },
      {
        id: 'c32',
        options: [
          { value: 1, label: '  i see', trigger: 'c33' },
        ],
      },
      {
        id: 'c33',
        message:'But imagine if every time there was a storm, i bolted up my house and hide under the bed',
        trigger:'c34',
      },
      {
        id: 'c34',
        message:'Then i wouldent be able to function! ',
        trigger:'c35',
      },
      {
        id: 'c35',
        options: [
          { value: 1, label: ' oh no!', trigger: 'c36' },
        ],
      },
      {
        id: 'c36',
        message:'You could say the same thing about emotional weather ',
        trigger:'c37',
      },
      {
        id: 'c37',
        options: [
          { value: 1, label: 'i see it clear now', trigger: 'c38' },
        ],
      },
      {
        id: 'c38',
        message:'Well, thats all i have for you today',
        trigger:'c39',
      },
      {
        id: 'c39',
        message:'What did you think of todays lesson?',
        trigger:'c40',
      },
      {
        id: 'c40',
        options: [
          { value: 1, label: '👍', trigger: 'd1' },
          { value: 2, label: '👎', trigger: 'd1' },
        ],
      },
      {
        id: 'd1',
        message:'Howdy',
        trigger:'d2',
      },
      {
        id: 'd2',
        options: [
          { value: 1, label: 'hey buddy', trigger: 'd3' },
        ],
      },
      {
        id: 'd3',
        message:'let me give you some brief ideas about the core behind CBT',
        trigger:'d4',
      },
      {
        id: 'd4',
        options: [
          { value: 1, label: 'Interesting', trigger: 'd5' },
        ],
      },
      {
        id: 'd5',
        message:'ok lets get to it: with this sentence "i always make mistakes',
        trigger:'d6',
      },
      {
        id: 'd6',
        message:'what word would you change to mkae this sentence less harsh?',
        trigger:'d7',
      },
      {
        id: 'd7',
        options: [
          { value: 1, label: 'always ', trigger: 'd8' },
          { value: 2, label: 'mistakes ', trigger: 'd8' },
        ],
      },
      {
        id: 'd8',
        message:'I think mistakes are real, So maybe there is another word i would change ',
        trigger:'d9',
      },
      {
        id: 'd9',
        options: [
          { value: 1, label: 'always', trigger: 'd10' },
        ],
      },
      {
        id: 'd10',
        message:'The word somtimes is more hopeful',
        trigger:'d11',
      },
      {
        id: 'd11',
        message:'it makes life seem less inventiable',
        trigger:'d12',
      },
      {
        id: 'd12',
        options: [
          { value: 1, label: 'Right', trigger: 'd13' },
        ],
      },
      {
        id: 'd13',
        message:'the point is : When we go for such extremes in our thinking, we shut down possibilties!',
        trigger:'d14',
      },
      {
        id: 'd14',
        options: [
          { value: 1, label: 'Good to know ', trigger: 'd15' },
        ],
      },
      {
        id: 'd15',
        message:'The good news is that changing your langauge is a skill like any other that you can learn and practice',
        trigger:'d16',
      },
      {
        id: 'd16',
        options: [
          { value: 1, label: 'I will try ', trigger: 'd17' },
        ],
      },
      {
        id: 'd17',
        message:'thats the spirit',
        trigger:'d18',
      },
      {
        id: 'd18',
        message:'Thats all i have for you today.Lets talk tomorrow!',
        trigger:'d19',
      },
      {
        id: 'd19',
        options: [
          { value: 1, label: 'sound good  ', trigger: 'd20' },
        ],
      },
      {
        id: 'd20',
        message:'what did you think of our chat today?',
        trigger:'d21',
      },
      {
        id: 'd21',
        options: [
          { value: 1, label: '👍', trigger: 'd22' },
          { value: 2, label: '👎 ', trigger: 'd22' },
        ],
      },
      {
        id: 'd22',
        message:'Thanks for the feedback! You have helped mkae me a better bot!',
        trigger:'d23',
      },
      {
        id: 'd23',
        options: [
          { value: 1, label: 'NO problem ', trigger: 'd24' },
        ],
      },
      {
        id: 'd24',
        message:'Talk to you soon!',
        trigger:'d25',
      },
      {
        id: 'd25',
        message:'Bye',
        trigger:'e1',
      },
      {
        id: 'e1',
        message:'Hey welcome back',
        trigger:'e2',
      },
      {
        id: 'e2',
        message:'What would u like to do',
        trigger:'e3',
      },
      {
        id: 'e3',
        options: [
          { value: 1, label: 'work on problem ', trigger: 'e4' },
        ],
      },
      {
        id: 'e4',
        message:'Of course',
        trigger:'e5',
      },
      {
        id: 'e5',
        message:'How about telling me whats going on ',
        trigger:'e6',
      },
      {
        id: 'e6',
        user: true, 
        trigger: 'e7',
      },
      {
        id: 'e7',
        message:'I can always help you with  ',
        trigger:'e8',
      },
      {
        id: 'e8',
        message:'Anxiety ',
        trigger:'e9',
      },
      {
        id: 'e9',
        message:'Lonliness',
        trigger:'e10',
      },
      {
        id: 'e10',
        message:'Relationships ',
        trigger:'e11',
      },
      {
        id: 'e11',
        message:'Sleep',
        trigger:'e12',
      },
      {
        id: 'e12',
        user: true, 
        trigger: 'e13',
      },
      {
        id: 'e13',
        message:'Just getting things out of our head and into words can somtimes be theraputic too',
        trigger:'e14',
      },
      {
        id: 'e14',
        message:'Unload some more',
        trigger:'e15',
      },
      {
        id: 'e15',
        user: true, 
        trigger: 'e16',
      },
      {
        id: 'e16',
        message:'Thanks for letting me know whats going on ',
        trigger:'e17',
      },
      {
        id: 'e17',
        message:'For now, lets move on to our story ',
        trigger:'e18',
      },
      {
        id: 'e18',
        options: [
          { value: 1, label: 'Ok', trigger: 'e19' },
        ],
      },
      {
        id: 'e19',
        message:'I have got a game lined up up for today',
        trigger:'e20',
      },
      {
        id: 'e20',
        message:'promise i will not cheat 😉',
        trigger:'e21',
      },
      {
        id: 'e21',
        options: [
          { value: 1, label: 'lets do it', trigger: 'e22' },
        ],
      },
      {
        id: 'e22',
        message:'How old are you?',
        trigger:'e23',
      },
      {
        id: 'e23',
        options: [
          { value: 1, label: '13-16', trigger: 'e24' },
          { value: 2, label: '17-19', trigger: 'e24' },
          { value: 3, label: '20-25', trigger: 'e24' },
          { value: 4, label: '26-35', trigger: 'e24' },
          { value: 5, label: '36-45', trigger: 'e24' },
          { value: 6, label: '46-55', trigger: 'e24' },
          { value: 7, label: '56-65', trigger: 'e24' },
          { value: 8, label: 'over 65', trigger: 'e24' },

        ],
      },
      {
        id: 'e24',
        message:'whats your gender?',
        trigger:'e25',
      },
      {
        id: 'e25',
        options: [
          { value: 1, label: 'Male', trigger: 'e26' },
          { value: 2, label: 'Female', trigger: 'e26' },
        ],
      },
      {
        id: 'e26',
        message:'lets get into the game now ',
        trigger:'e27',
      },
      {
        id: 'e27',
        options: [
          { value: 1, label: 'sure', trigger: 'e28' },
        ],
      },
      {
        id: 'e28',
        message:'which of these is an example of black or white thinking',
        trigger:'e29',
      },
      {
        id: 'e29',
        message:'1.my class mates do not like me',
        trigger:'e30',
      },
      {
        id: 'e30',
        message:'2.i wish i knew more people',
        trigger:'e31',
      },
      {
        id: 'e31',
        message:'3.i feel lonely somtimes',
        trigger:'e32',
      },
      {
        id: 'e32',
        options: [
          { value: 1, label: '1', trigger: 'e33' },
          { value: 2, label: '2', trigger: 'e33' },
          { value: 3, label: '3', trigger: 'e33' },
        ],
      },
      {
        id: 'e33',
        message:'nice one 👍',
        trigger:'e34',
      },
      {
        id: 'e34',
        message:'Magic you are doing great',
        trigger:'e35',
      },
      {
        id: 'e35',
        message:'Thats all for today',
        trigger:'e36',
      },
      {
        id: 'e36',
        options: [
          { value: 1, label: 'ok bye', trigger: 'f1' },
        ],
      },
      {
        id: 'f1',
        message:'Hey what a plesent day',
        trigger:'f2',
      },
      {
        id: 'f2',
        options: [
          { value: 1, label: '☺️', trigger: 'f3' },
        ],
      },
      {
        id: 'f3',
        message:'Are you ready to check in?',
        trigger:'f4',
      },
      {
        id: 'f4',
        options: [
          { value: 1, label: '👍', trigger: 'f5' },
        ],
      },
      {
        id: 'f5',
        message:'So what are you doing today?',
        trigger:'f6',
      },
      {
        id: 'f6',
        user: true, 
        trigger: 'f7',
      },
      {
        id: 'f7',
        message:'what mood most accurately represent you today?',
        trigger:'f8',
      },
      {
        id: 'f8',
        options: [
          { value: 1, label: '😊 ', trigger: 'f9' },
          { value: 2, label: '😐 ', trigger: 'f9' },
          { value: 3, label: '😞 ', trigger: 'f9' },
          { value: 4, label: '😡 ', trigger: 'f9' },
        ],
      },
      {
        id: 'f9',
        message:'Thanks for telling me, i hope i could always help you',
        trigger:'f10',
      },
      {
        id: 'f10',
        options: [
          { value: 1, label: 'Thanks Buddy', trigger: 'f11' },
        ],
      },
      {
        id: 'f11',
        message:'Try and tell me in a couple of words what has you feeling this way',
        trigger:'f12',
      },
      {
        id: 'f12',
        user: true, 
        trigger: 'f13',
      },
      {
        id: 'f13',
        message:'Im happy to listen, can you tell me a little more about what is going on ?',
        trigger:'f14',
      },
      {
        id: 'f13',
        user: true, 
        trigger: 'f14',
      },
      {
        id: 'f14',
        message:'I see i hope sharing has been helpful',
        trigger:'f15',
      },
      {
        id: 'f15',
        message:'lets get to our story for today',
        trigger:'f16',
      },
      {
        id: 'f16',
        options: [
          { value: 1, label: 'Ok', trigger: 'f17' },
        ],
      },
      {
        id: 'f17',
        message:'Up for talking about mindfulness today?',
        trigger:'f18',
      },
      {
        id: 'f18',
        options: [
          { value: 1, label: 'Sure thing', trigger: 'f19' },
        ],
      },
      {
        id: 'f19',
        message:'Fantastic!!',
        trigger:'f20',
      },
      {
        id: 'f20',
        message:'Have you ever walked into a room to get somthing but then forgot what you wanted to get?',
        trigger:'f21',
      },
      {
        id: 'f21',
        message:'Or missed your exit while driving?',
        trigger:'f22',
      },
      {
        id: 'f22',
        options: [
          { value: 1, label: 'Totally me', trigger: 'f23' },
          { value: 2, label: 'Tell me more', trigger: 'f23' },
        ],
      },
      {
        id: 'f23',
        message:'Mindfulness is the opposite of mindlesness',
        trigger:'f24',
      },
      {
        id: 'f24',
        message:'When we say "mindlessness"we mean spacey, or not present in the moment',
        trigger:'f25',
      },
      {
        id: 'f25',
        options: [
          { value: 1, label: 'Huh?', trigger: 'f26' },
          { value: 2, label: 'Makes sense', trigger: 'f26' },
        ],
      },
      {
        id: 'f26',
        message:'Great job talking the time to learn about mindfulness today',
        trigger:'f27',
      },
      {
        id: 'f27',
        message:'Goodbye for now!',
        trigger:'f28',
      },
      {
        id: 'f28',
        options: [
          { value: 1, label: 'bye', trigger: 'f29' },
        ],
      },
      {
        id:'f29',
        message:"#Assement begin",
        end: true,
      },
  ];

  class chat0 extends Component {
    
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

export default chat0;

import * as React from 'react';
import { Button, View, Text,Image,Platform,Keyboard} from 'react-native';
import Caveat from '../GeneralStyles/Caveat';
import QuickSand from '../GeneralStyles/Quicksand';
import Sriracha from '../GeneralStyles/Sriracha';
import styles from './Styles';
import { AntDesign, Entypo, Feather,Zocial} from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView , TouchableWithoutFeedback} from 'react-native';



export default function Login() {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    let adj = ["Health freak", "Health nut", "Health enthusiast" ,"Fitness fanatic", "Gym freak","Gym fanatic", "Fitness freak" ,"Sport nut",
     "Fitness Beast", "Gym Beast", "Gym nut", "Gym addict", "Gymgoer", "Gym rat"," Gym junkie",  "Buffed athlete", "Muscle monster","Iron freak" 
    ]

  return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.fullContainer}
            >
            
           
            <View style={styles.imageContainer}>
                <Image  source={require("../../assets/images/logo.png")} style={styles.logo}></Image>
            </View>

            <View style={styles.headerContainer}>
                <View style={styles.header}><Sriracha text={"HELLO"} fontsize={65} color={"white"} spacing={0.1}></Sriracha></View>
                <View style={styles.subHeader}><Caveat text={adj[Math.floor(Math.random()*adj.length)]} color={"white"} fontsize={30} spacing={4}></Caveat></View>
            </View>
       
            <View style={styles.loginFormContainer}>
                <View style={styles.loginEmail}><Zocial name="email" style={styles.emailIcon} size={20}/><TextInput 
                placeholder='this.emailexample@mail.com' 
                placeholderTextColor={"white"}
                maxLength={100}
                keyboardType="email-address"
                style={{color:"white"}}        
        onChangeText={onChangeText}></TextInput></View>
                <View style={styles.hr}></View>
                <View style={styles.loginPassword}><AntDesign name="lock1" style={styles.passwordIcon} size={20} /><TextInput placeholder='**********' placeholderTextColor={"white"} maxLength={100} style={{color:"white"}}></TextInput></View>
                <View style={styles.hr}></View>
                <View><QuickSand color={"white"} flex={0} fontsize={13} text={"Forgot your password?"}></QuickSand></View>
            </View>
            <View style={styles.signIn}>
                <View style={styles.signInBtn}>
                    <QuickSand color={"white"} flex={0} fontsize={20} text={"Sign In"}></QuickSand>
                </View>
                <QuickSand color={"white"} flex={0} fontsize={13} text={"Don't have your account?"}></QuickSand>
                <QuickSand color={"white"} flex={0} fontsize={15} text={"Register"}></QuickSand>
            </View>
            <View style={styles.logoName}>
                <Sriracha text={"MMP"} fontsize={30} color={"white"} spacing={0.1}></Sriracha>
            </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
  );
}

import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Caveat from "../GeneralStyles/Caveat";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import styles from "./Styles";
import { AntDesign, Entypo, Feather, Zocial } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import Toast from "react-native-toast-message";
import { auth } from "../../firebase";

export default function Login({ navigation }: { navigation: any }) {
  const [isLogged, setIsLogged] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [adj, setAdj] = React.useState([
    "Health freak",
    "Health nut",
    "Health enthusiast",
    "Fitness fanatic",
    "Gym freak",
    "Gym fanatic",
    "Fitness freak",
    "Sport nut",
    "Fitness Beast",
    "Gym Beast",
    "Gym nut",
    "Gym addict",
    "Gymgoer",
    "Gym rat",
    " Gym junkie",
    "Buffed athlete",
    "Muscle monster",
    "Iron freak",
  ]);

  const showToastLoading = () => {
    ToastAndroid.show("Loading...!", ToastAndroid.SHORT);
  };
  const showToastSuc = () => {
    ToastAndroid.show("Success!", ToastAndroid.SHORT);
  };
  const showToastFail = () => {
    ToastAndroid.show("Ops, an error ocurred!", ToastAndroid.SHORT);
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user != null) console.log("Logged in with", user.email);
        setIsLogged(true)
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          alert("The email address is already in use");
        } else if (error.code == "auth/invalid-email") {
          alert("The email address is not valid.");
        } else if (error.code == "auth/operation-not-allowed") {
          alert("Operation not allowed.");
        } else if (error.code == "auth/weak-password") {
          alert("The password is too weak.");
        }
        else{
            console.log(error)
        }
      });
  };
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {       
          navigation.navigate("HomePage");
      }
    });
    return unsubscribe;
  }, [isLogged]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.fullContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          ></Image>
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Sriracha
              text={"HELLO"}
              fontsize={65}
              color={"white"}
              spacing={0.1}
            ></Sriracha>
          </View>
          <View style={styles.subHeader}>
            <Caveat
              text={adj[Math.floor(Math.random() * adj.length)]}
              color={"white"}
              fontsize={30}
              spacing={4}
            ></Caveat>
          </View>
        </View>

        <View style={styles.loginFormContainer}>
          <View style={styles.loginEmail}>
            <Zocial name="email" style={styles.emailIcon} size={20} />
            <TextInput
              placeholder="this.emailexample@mail.com"
              placeholderTextColor={"white"}
              maxLength={100}
              keyboardType="email-address"
              style={{ color: "white",width:"100%",height:20}}
              onChangeText={setEmail}

            ></TextInput>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.loginPassword}>
            <AntDesign name="lock1" style={styles.passwordIcon} size={20} />
            <TextInput
              placeholder="**********"
              placeholderTextColor={"white"}
              maxLength={100}
              style={{ color: "white",width:"100%",height:20}}
              onChangeText={setPassword}
            ></TextInput>
          </View>
          <View style={styles.hr}></View>
          <View>
            <QuickSand
              color={"white"}
              flex={0}
              fontsize={13}
              text={"Forgot your password?"}
            ></QuickSand>
          </View>
        </View>
        <View style={styles.signIn}>
          <TouchableOpacity style={styles.signInBtn}           
              onPress={() => {
                showToastLoading();
                handleLogin();
              }}>

            <QuickSand color={"white"} flex={0} fontsize={25} text={"Sign In"}></QuickSand>
          </TouchableOpacity>
          <QuickSand
            color={"white"}
            flex={0}
            fontsize={13}
            text={"Don't have your account?"}
          ></QuickSand>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterPage");
            }}
          >
            <QuickSand
              color={"white"}
              flex={0}
              fontsize={15}
              text={"Register"}
            ></QuickSand>
          </TouchableOpacity>
        </View>
        <View style={styles.logoName}>
          <Sriracha
            text={"MMP"}
            fontsize={30}
            color={"white"}
            spacing={0.1}
          ></Sriracha>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

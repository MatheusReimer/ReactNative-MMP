import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Linking, StyleSheet,View } from 'react-native';
import styles from './Style';
import DefaultHeader from '../DetachedComponents/DefaultHeader';
import QuickSand from '../GeneralStyles/Quicksand';
import SettingsBtn from './SettingsBtn';
import { auth } from '../../firebase';

export default function Settings({ navigation }: { navigation: any }) {

  const handleLogout =() =>{
    auth.
    signOut()
    .then(()=>{
      navigation.navigate("LoginPage")
      console.log("logout efetuado")
    }).catch(error=>alert(error.message))
  }

    return (
      <View style={styles.container}>
        <DefaultHeader/>
        <View style={styles.headerSettings}>
          <QuickSand color={"black"} flex={0} fontsize={26} text={"Settings"}></QuickSand>
        </View>
        <View style={styles.btnContainer}>
        <SettingsBtn source={require("../../assets/images/add.png")} text={"Request to Add an Exercise"} onPress={() => Linking.openURL('mailto:matheusreimer1@gmail.com?subject=I Would like to request a new exercise&body=Exercise:"Put your exercise here"') }/>
          <SettingsBtn source={require("../../assets/images/letter.png")} text={"Contact Me"} onPress={() => Linking.openURL('mailto:matheusreimer1@gmail.com?subject=Hello') }/>
          <SettingsBtn source={require("../../assets/images/configuracao.png")} text={"Report a Problem"} onPress={() => Linking.openURL('mailto:matheusreimer1@gmail.com?subject=Report Bug') }/>
          <SettingsBtn source={require("../../assets/images/logout.png")} text={"Logout"} onPress={()=>{handleLogout()}}/>
        </View>
      </View>
    );
  
}

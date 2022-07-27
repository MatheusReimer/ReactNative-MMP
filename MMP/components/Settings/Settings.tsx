import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet,View } from 'react-native';
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
          <SettingsBtn source={require("../../assets/images/configuracao.png")} text={"General Configuration"}/>
          <SettingsBtn source={require("../../assets/images/leitura.png")} text={"Terms and Conditions"}/>
          <SettingsBtn source={require("../../assets/images/user.png")} text={"Profile"}/>
          <SettingsBtn source={require("../../assets/images/logout.png")} text={"Logout"} onPress={()=>{handleLogout()}}/>
        </View>
      </View>
    );
  
}

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet,View,Image,TouchableOpacity } from 'react-native';
import styles from './SettingsBtnStyle';
import DefaultHeader from '../DetachedComponents/DefaultHeader';
import QuickSand from '../GeneralStyles/Quicksand';


export default function SettingsBtn(props:any) {

    return (
    
        <TouchableOpacity style={styles.settingsBtn}>
           <Image source={props.source} style={styles.imageIcon}></Image>
          <View style={styles.settingsBtnText}><QuickSand color={"black"} flex={0} fontsize={22} text={props.text}></QuickSand></View>
        </TouchableOpacity>
      
    );
  
}

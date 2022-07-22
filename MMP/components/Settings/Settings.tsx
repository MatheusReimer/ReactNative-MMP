import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet,View } from 'react-native';
import styles from './Style';
import DefaultHeader from '../DetachedComponents/DefaultHeader';

export default function Settings() {

    return (
      <View style={styles.container}>
        <DefaultHeader/>
      </View>
    );
  
}

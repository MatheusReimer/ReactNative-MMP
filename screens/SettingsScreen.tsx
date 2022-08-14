import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from "../navigation/StackManager"
import Settings from '../components/Settings/Settings';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};


const SettingsScreen = ({navigation}: Props) =>{
  return (
    <Settings navigation={navigation}/>
  )
}

export default SettingsScreen;
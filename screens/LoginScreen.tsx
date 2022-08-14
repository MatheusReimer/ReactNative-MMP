import * as React from 'react';
import Login from '../components/Login/Login';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from "../navigation/StackManager"

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomePage'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};


const LoginScreen = ({navigation}: Props) =>{
  return (
    <Login navigation={navigation}></Login>
  )
}

export default LoginScreen;
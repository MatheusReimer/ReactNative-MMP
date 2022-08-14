import * as React from 'react';
import Register from '../components/Register/Register';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from "../navigation/StackManager"

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};


const RegisterScreen = ({navigation}: Props) =>{
  return (
    <Register navigation={navigation}></Register>
  )
}

export default RegisterScreen;
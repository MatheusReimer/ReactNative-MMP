import * as React from 'react';
import Home from '../components/Home/Home';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from "../navigation/StackManager"

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomePage'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
  
};


const HomePage = ({navigation}: Props) =>{
  return (
    <Home/>
  )
}

export default HomePage;
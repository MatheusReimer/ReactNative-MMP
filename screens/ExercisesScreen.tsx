import * as React from 'react';
import Home from '../components/Home/Home';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from "../navigation/StackManager"
import Exercises from '../components/Exercises/Exercises';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomePage'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};


const ExercisesScreen = ({navigation}: Props) =>{
  return (
    <Exercises/>
  )
}

export default ExercisesScreen;
import * as React from 'react';
import Home from '../components/Home/Home';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from "../navigation/StackManager"
import Stats from "../components/Stats/Stats"

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Stats'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};


const StatsScreen = ({navigation}: Props) =>{
  return (
    <Stats/>
  )
}

export default StatsScreen;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../screens/HomeScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import StatsScreen from "../screens/StatsScreen";
import RootStackParamList from './StackManager';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';

const Stack = createBottomTabNavigator<RootStackParamList>();

const focusedColor = "#009F40"
const notFocusedColor = "#281400"

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="LoginPage" 
        component={LoginScreen} 
        options={{title:"Login" , tabBarShowLabel:false,headerShown: false,tabBarIcon: ({ focused, color }) =>(
                  <AntDesign name="login" size={focused ? 27 : 24} color={focused ? focusedColor : notFocusedColor} />
                )}}
        />
        <Stack.Screen 
        name="HomePage" 
        component={HomePage} 
        options={{title:"Home" , tabBarShowLabel:false,headerShown: false,tabBarIcon: ({ focused, color }) =>(
                  <AntDesign name="home" size={focused ? 27 : 24} color={focused ? focusedColor : notFocusedColor} />
                )}}
        />
        <Stack.Screen 
        name="Exercises" 
        component={ExercisesScreen}  
        options={{title:"Exercises",tabBarShowLabel:false,headerShown: false, tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="calendar" size={focused ? 27 : 24} color={focused ? focusedColor : notFocusedColor} />
                )}} 
        />
        <Stack.Screen 
        name="Stats" 
        component={HomePage}  
        options={{title:"Exercises",tabBarShowLabel:false,headerShown: false, tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="linechart"size={focused ? 27 : 24} color={focused ? focusedColor : notFocusedColor} />
                )}}
        />
        <Stack.Screen 
        name="Settings" 
        component={StatsScreen} 
        options={{title:"Exercises",tabBarShowLabel:false, headerShown: false,  tabBarIcon: ({ focused, color }) => (
                  <AntDesign name="setting" size={focused ? 27 : 24} color={focused ? focusedColor : notFocusedColor} />
                )}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



   
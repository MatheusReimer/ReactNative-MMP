import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/HomeScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import StatsScreen from "../screens/StatsScreen";
import RootStackParamList from "./StackManager";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { StackNavigationProp } from '@react-navigation/stack';



type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomePage'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};



const Tab = createBottomTabNavigator<RootStackParamList>();

const focusedColor = "#009F40";
const notFocusedColor = "#281400";



export default function Navigation({navigation}: Props) {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: [
          "RegisterPage",
          "LoginPage"
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })}
    >
        <Tab.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{  tabBarStyle: { display: "none" },tabBarShowLabel: false, headerShown:false}}
        />
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: "Home",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <AntDesign
                name="home"
                size={focused ? 27 : 24}
                color={focused ? focusedColor : notFocusedColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={ExercisesScreen}
          options={{
            title: "Exercises",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <AntDesign
                name="calendar"
                size={focused ? 27 : 24}
                color={focused ? focusedColor : notFocusedColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsScreen}
          options={{
            title: "Exercises",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <AntDesign
                name="linechart"
                size={focused ? 27 : 24}
                color={focused ? focusedColor : notFocusedColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <AntDesign
                name="setting"
                size={focused ? 27 : 24}
                color={focused ? focusedColor : notFocusedColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="RegisterPage"
          component={RegisterScreen}
          options={{  tabBarStyle: { display: "none" },tabBarShowLabel: false, headerShown:false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

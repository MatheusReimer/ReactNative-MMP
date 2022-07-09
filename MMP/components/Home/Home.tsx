import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import styles from './Styles';
import Caveat from "../../components/Home/GeneralStyles/Caveat"
import QuickSand from './GeneralStyles/Quicksand';
import TitanOne from './GeneralStyles/TitanOne';
import WeekDays from "../../constants/WeekDays";
import { FlatList ,ScrollView} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

  const exercies = [
    {
      id: "1",
      name: "Bench",
      reps:10,
      weight:20,
      series:4,

    },
    {
      id: "2",
      name: "Leg press",
      reps:10,
      weight:300,
      series:3,

    },
    {
      id: "3",
      name: "Bench",
      reps:10,
      weight:20,
      series:4,

    },
    {
      id: "4",
      name: "Leg press",
      reps:10,
      weight:300,
      series:3,

    },    {
      id: "5",
      name: "Bench",
      reps:10,
      weight:20,
      series:4,

    },
    {
      id: "6",
      name: "Leg press",
      reps:10,
      weight:300,
      series:3,

    },
  ]
  return (
    <View>   
        <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.topHeader}>
                <View style={styles.leftTop}>
                  <QuickSand text={"Lets workout"} fontsize={20} color={"white"}></QuickSand>
                  <TitanOne  text ={"Matheus Reimer"} fontsize={25} color={"white"} spacing={1}></TitanOne>
                </View>
                <View style={styles.rightTop}>
                  <Image source={require("../../assets/images/splash.png")} style={styles.topHeaderImage}></Image>
                </View>
              
              </View>
              <View style={styles.imgContainer}>
                <Image source={require("../../assets/images/logo.png")} style={styles.logo}></Image>
              </View>
          </View>
          <View style={styles.mid}>
              <FlatList 
            numColumns={WeekDays.length}
            data={WeekDays}
            renderItem={({ item }) => <View style={styles.weekDayContainer}><TitanOne fontsize={14} text={item.name} spacing={40} color={"white"}></TitanOne></View>}
            keyExtractor={(item) => item.id}
          />
          </View>
       
          <View style={styles.main}>
           <View style={styles.mainHeaders}>
              <QuickSand fontsize={13} color={"black"} text="Exercise Name" ></QuickSand>
              <QuickSand fontsize={13} color={"#008037"} text="Total Reps"></QuickSand>
              <QuickSand fontsize={13} color={"#008037"} text="Total Weight"></QuickSand>
              <QuickSand fontsize={13} color={"#008037"} text="Series"></QuickSand>
           </View>
           <View style={styles.exercises}>
           <SafeAreaView >
           <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {
                exercies.map((c, index) => {
                  
                  return(<View style={styles.exercisesEach} key={index}>
                    <QuickSand fontsize={12} text={c.name} color={"black"}></QuickSand>
                    <QuickSand fontsize={12} text={c.reps} color={"black"}></QuickSand>
                    <QuickSand fontsize={12} text={c.weight} color={"black"}></QuickSand>
                    <QuickSand fontsize={12} text={c.series} color={"black"}></QuickSand>
                  </View> )
                })
              }
    </ScrollView>
           </SafeAreaView>
           </View>
          </View>
            
        </View>
    </View>
  );
}

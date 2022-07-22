import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import styles from './Styles';
import QuickSand from '../GeneralStyles/Quicksand';
import Sriracha from '../GeneralStyles/Sriracha';
import WeekDays from "../../constants/WeekDays";
import { FlatList ,ScrollView} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultHeader from '../DetachedComponents/DefaultHeader';

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
          <DefaultHeader/>
          <View style={styles.mid}>
              <FlatList 
            numColumns={WeekDays.length}
            data={WeekDays}
            renderItem={({ item }) => <View style={styles.weekDayContainer}><Sriracha fontsize={14} text={item.name} spacing={40} color={"white"}></Sriracha></View>}
            keyExtractor={(item) => item.id}
          />
          </View>
       
          <View style={styles.main}>
           <View style={styles.mainHeaders}>
              <QuickSand fontsize={13} color={"black"} text="Exercise Name" flex={0}></QuickSand>
              <QuickSand fontsize={13} color={"#008037"} text="Total Reps" flex={0}></QuickSand>
              <QuickSand fontsize={13} color={"#008037"} text="Total Weight" flex={0}></QuickSand>
              <QuickSand fontsize={13} color={"#008037"} text="Series" flex={0}></QuickSand>
           </View>
           <View style={styles.exercises}>
           <View style={styles.hr}></View>
           <SafeAreaView >
           <ScrollView contentContainerStyle={{ flexGrow: 1}}>
              {
                exercies.map((c, index) => {
                  return(<View style={styles.exercisesEach} key={index}>
                    <QuickSand fontsize={12} text={c.name} color={"black"} flex={2}></QuickSand>
                    <QuickSand fontsize={12} text={c.reps} color={"black"} flex={1.4}></QuickSand>
                    <QuickSand fontsize={12} text={c.weight} color={"black"} flex={1.3}></QuickSand>
                    <QuickSand fontsize={12} text={c.series} color={"black"} flex={0.9}></QuickSand>
                   
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

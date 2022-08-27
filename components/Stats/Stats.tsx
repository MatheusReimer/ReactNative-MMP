import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { Dimensions } from "react-native";
import DefaultHeader from "../DetachedComponents/DefaultHeader";
import { LineChart } from "react-native-chart-kit";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";

import MyLineChart from "./MyLineChart";
import React from "react";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { List } from "realm";

export default function Stats() {

  const [labelSemester, setLabelSemester] = React.useState<string[]>([]);
  const [currentLabel, setCurrentLabel] = React.useState<string[]>([]);
  const [sixMonthsVolume, setSixMonthsVolume] = React.useState<number[]>([]);


  const [dataToShow, setDataToShow] = React.useState<PresentableData[]>([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [dbData, setdbData] = React.useState<Data[]>([]);


  const [openWeek, setOpenWeek] = React.useState(false);
  const [valueWeek, setValueWeek] = React.useState("Monday");
  const [itemsWeek, setItemsWeek] = React.useState([
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ]);

  interface Data {
    id: string;
    day: string;
    month: string;
    userEmail: string;
    weekDay: string;
    exeriseData: Exercise[];
  }

  interface Exercise {
    sets: string;
    reps: string;
    name: string;
    weight: string;
  }
  interface PresentableData {
    day: string;
    name: string;
    volume: string;
    month:string
  }

  const monthVolume = () => {
    let arrOfVolume: number[] = [];
    let arrOfObjects: PresentableData[] = [];
    arrOfVolume = [0, 0, 0, 0, 0, 0]; 
    dbData.forEach((element2) => {
      if (
        labelSemester.includes(element2.month) &&
        element2.weekDay === valueWeek
      ) {
        let index = labelSemester.indexOf(element2.month);
        element2.exeriseData.forEach((element3, indexOfElement) => {
          arrOfVolume[index] =
            arrOfVolume[index] +
            Number(element3.reps) *
              Number(element3.sets) *
              Number(element3.weight);
          arrOfObjects[indexOfElement] = {
            day: element2.day,
            name: element3.name,
            volume:(Number(element3.reps)*Number(element3.sets)*Number(element3.weight)).toString(),
            month:element2.month,
          };
        });
      }
    });

    setDataToShow(arrOfObjects);
    setSixMonthsVolume(arrOfVolume);
  };

  const settingDates = () => {
    let today = new Date();
    let arrS = [];
    let arrT = [];
    for (let i = 6; i > 0; i--) {
      arrS.push(months[today.getMonth() - i]);
      if (i <= 3) {
        arrT.push(months[today.getMonth() - i]);
      }
    }
    setCurrentLabel(arrS);
    setLabelSemester(arrS);
  };

  const list = () => {
    
    return dataToShow.map((c, index) => {
      return (
        <View style={styles.exercisesEach} key={index}>
          <View style={styles.itemsName}>
          <QuickSand
            fontsize={16}
            text={c.name}
            color={"black"}
            flex={0}
          ></QuickSand>
          </View>
          <View style={styles.items}>
          <QuickSand
            fontsize={16}
            text={c.day}
            color={"black"}
            flex={0}
          ></QuickSand>
          </View>
          <View style={styles.items}>
          <QuickSand
            fontsize={16}
            text={c.day}
            color={"black"}
            flex={0}
          ></QuickSand>
          </View>
          <View style={styles.items}>
          <QuickSand
            fontsize={16}
            text={c.volume}
            color={"black"}
            flex={0}
          ></QuickSand>
          </View>
        </View>
      );
    });
  };

  const getInfoDb = async () => {
    const email = getAuth().currentUser?.email;
    const q = query(
      collection(db, "userFullData"),
      where("userEmail", "==", email)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setdbData([]);
    }
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      let vector: Exercise[] = [];
      for (let i = 0; i < doc.data().data.length; i++) {
        vector.push({
          name: doc.data().data[i].name,
          reps: doc.data().data[i].reps,
          sets: doc.data().data[i].sets,
          weight: doc.data().data[i].weight,
        });
      }
      setdbData((dbData)=>[...dbData,
        {
          id: doc.data().id,
          day: doc.data().day,
          month: doc.data().month,
          userEmail: doc.data().userEmail,
          exeriseData: vector,
          weekDay: doc.data().weekDay,
        },
      ]);
    });
  };

  React.useEffect(() => {
    getInfoDb();
    settingDates();
  }, []);

  React.useEffect(() => {
    monthVolume();
  }, [dbData, valueWeek]);

  const [adj, setAdj] = React.useState([
    "Health freak",
    "Health nut",
    "Health enthusiast",
    "Fitness fanatic",
    "Gym freak",
    "Gym fanatic",
    "Fitness freak",
    "Sport nut",
    "Fitness Beast",
    "Gym Beast",
    "Gym nut",
    "Gym addict",
    "Gymgoer",
    "Gym rat",
    " Gym junkie",
    "Buffed athlete",
    "Muscle monster",
    "Iron freak",
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <QuickSand
          text={"Lets see your stats"}
          fontsize={20}
          color={"white"}
          flex={0}
        ></QuickSand>
        <Sriracha
          text={adj[Math.floor(Math.random() * adj.length)]}
          fontsize={25}
          color={"white"}
          spacing={1}
        ></Sriracha>
      </View>
      <View
        style={{
          zIndex: 10000,
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <View style={{ width: 140 }}>
        </View>
        <View style={{ width: 140 }}>
          <DropDownPicker
            multiple={false}
            open={openWeek}
            value={valueWeek}
            items={itemsWeek}
            setOpen={setOpenWeek}
            setValue={setValueWeek}
            setItems={setItemsWeek}
            maxHeight={300}
          />
        </View>
      </View>

      <View style={styles.graphs}>
        <MyLineChart
          currentLabel={currentLabel}
          arrOfVolume={sixMonthsVolume}
        />
      </View>
      <View style={styles.graphsSelectorContainer}>
        <View style={styles.graphSelectorHeader}>
          <QuickSand
            color={"white"}
            flex={0}
            fontsize={30}
            text={"Detailed View"}
          ></QuickSand>
        </View>
        <View style={styles.columns}>
          <View style={styles.detailedItem}>
            <View style={styles.itemsName}>
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={16}
              text={"Exercise"}
            ></QuickSand>
            </View>
            <View style={styles.items}>
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={16}
              text={"Day"}
            ></QuickSand>
            </View>
            <View style={styles.items}>
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={16}
              text={"Month"}
            ></QuickSand>
            </View>
            <View style={styles.items}>
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={16}
              text={"Volume"}
            ></QuickSand>
            </View>
          </View>
         
          <ScrollView>
            {list()}
          </ScrollView>
  
        </View>
      </View>
    </View>
  );
}

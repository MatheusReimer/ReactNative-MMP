import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { db } from "../../firebase";

import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import styles from "./Styles";



interface Data {
  exercise: string,
  id: string
  reps: number,
  sets: number,
  userEmail: string,
  weekDay: string,
}



export default function Exercises() {
  function handleChange(value: number, type: string, index: number) {
    let items = [...test];
    let item = { ...items[index] };
    if (type === "sets") {
      (item.sets = value), (items[index].sets = item.sets);
    }
    if (type === "reps") {
      (item.reps = value), (items[index].reps = item.reps);
    }
    setTest([...items]);
  }


  function deleteIndex(index:number){
    let objToDelete = filteredList[index]
    let indexInTheDBArray = test.indexOf(objToDelete);
    let copyOfNonFilteredList = [...test]
    copyOfNonFilteredList.splice(indexInTheDBArray,1)
    setTest(copyOfNonFilteredList)
  }


  const list = () => {
    return filteredList.map((c, index) => {
      return (
        <View key={index} style={styles.exercises}>
          <View style={styles.exerciseBlocks}>
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={18}
              text={c.exercise}
            ></QuickSand>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={15}
                text={"Sets"}
              ></QuickSand>
              <Slider
                style={{ width: 250, height: 40 }}
                minimumValue={0}
                maximumValue={15}
                value={Number(c.sets)}
                step={1}
                minimumTrackTintColor="green"
                maximumTrackTintColor="green"
                thumbTintColor="black"
                onValueChange={(value) => {
                  handleChange(value, "sets", index);
                  setIsChanged(true)
                }}
              />
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={15}
                text={test[index].sets}
              ></QuickSand>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={15}
                text={"Reps"}
              ></QuickSand>
              <Slider
                style={{ width: 250, height: 40 }}
                minimumValue={0}
                maximumValue={15}
                value={Number(c.reps)}
                step={1}
                minimumTrackTintColor="green"
                maximumTrackTintColor="green"
                thumbTintColor="black"
                onValueChange={(value) => {
                  handleChange(value, "reps", index);
                  setIsChanged(true)
                }}
              />
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={15}
                text={test[index].reps}
              ></QuickSand>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{alignItems:"center",justifyContent:"center",marginTop:20}} onPress={()=>deleteIndex(index)}><MaterialCommunityIcons name="delete-circle" size={35} color="black" /></TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  const getUserExercises = async () => {
    const email = getAuth().currentUser?.email;
    const q = query(
      collection(db, "userExercises"),
      where("userEmail", "==", email),
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setTest([])
    }
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      setTest((test)=>[
        ...test,
        {
          id: doc.data().id,
          exercise:doc.data().exercise,
          userEmail: doc.data().userEmail,
          reps:Number(doc.data().reps),
          sets:Number(doc.data().sets),
          weekDay:doc.data().weekDay
        },
      ]);
    });
  };
  

  const [test, setTest] = React.useState<Data[]>([])
  const [currentWeekday, setCurrentWeekDay] = React.useState("Sun");
  const [isChanged,setIsChanged] = React.useState(false);
  const [filteredList,setFilteredList] = React.useState<Data[]>([]);
  const fullWeekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const reducedWeekNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]


  React.useEffect(()=>{
    setFilteredList([])
    let nonFilteredList = [...test]
    nonFilteredList.forEach(element => {
      let index = fullWeekNames.indexOf(element.weekDay);
      if(reducedWeekNames[index]===currentWeekday){
        setFilteredList((filteredList)=>[...filteredList,element])
      }
    });
  },[currentWeekday,test])

  React.useEffect(()=>{
    getUserExercises();
  },[])



  return (
    <View style={styles.mainContainer}>
      {isChanged ?
      <View style={styles.btnTops}>
        <TouchableOpacity style={styles.cancelBtn}><QuickSand color={"red"} flex={0} fontsize={20} text={"Cancel"}></QuickSand></TouchableOpacity>
        <TouchableOpacity style={styles.acceptBtn}><QuickSand color={"green"} flex={0} fontsize={20} text={"Save"}></QuickSand></TouchableOpacity>
      </View>
     : 
      <View style={styles.btnTopsHidden}>
        <></>
      </View>}

      <View style={styles.top}>
        <Sriracha
          color={"green"}
          fontsize={30}
          spacing={2}
          text={"Your plans"}
        ></Sriracha>
      </View>
      <View style={styles.weekdaySelection}>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Sun")}>
          {currentWeekday === "Sun" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Sun"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Sun"}
            ></QuickSand>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Mon")}>
          {currentWeekday === "Mon" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Mon"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Mon"}
            ></QuickSand>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Tue")}>
          {currentWeekday === "Tue" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Tue"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Tue"}
            ></QuickSand>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Wed")}>
          {currentWeekday === "Wed" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Wed"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Wed"}
            ></QuickSand>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Thu")}>
          {currentWeekday === "Thu" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Thu"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Thu"}
            ></QuickSand>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Fri")}>
          {currentWeekday === "Fri" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Fri"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Fri"}
            ></QuickSand>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentWeekDay("Sat")}>
          {currentWeekday === "Sat" ? (
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Sat"}
            ></QuickSand>
          ) : (
            <QuickSand
              color={"black"}
              flex={0}
              fontsize={20}
              text={"Sat"}
            ></QuickSand>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>{list()}</ScrollView>
    </View>
  );
}

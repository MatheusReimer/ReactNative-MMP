import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { db } from "../../firebase";
import DropDownPicker from "react-native-dropdown-picker";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import styles from "./Styles";
import { v4 as uuid } from "uuid";

interface Data {
  exercise: string;
  id: string;
  reps: number;
  sets: number;
  userEmail: string;
  weekDay: string;
}

export default function Exercises() {
  function handleChange(value: number, type: string, index: number) {
    let items = [...dbData];
    let objToDelete = filteredList[index];
    let indexInText = dbData.indexOf(objToDelete);

    let item = { ...items[indexInText] };
    if (type === "sets") {
      (item.sets = value), (items[indexInText].sets = item.sets);
    }
    if (type === "reps") {
      (item.reps = value), (items[indexInText].reps = item.reps);
    }
    setdbData([...items]);
  }

  function deleteIndex(index: number) {
    let objToDelete = filteredList[index];
    let indexInTheDBArray = dbData.indexOf(objToDelete);
    let copyOfNonFilteredList = [...dbData];
    copyOfNonFilteredList.splice(indexInTheDBArray, 1);
    setdbData(copyOfNonFilteredList);
    setIsChanged(true)
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
                value={filteredList[index].sets}
                step={1}
                minimumTrackTintColor="green"
                maximumTrackTintColor="green"
                thumbTintColor="black"
                onValueChange={(value) => {
                  handleChange(value, "sets", index);
                  setIsChanged(true);
                }}
              />
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={15}
                text={filteredList[index].sets}
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
                value={filteredList[index].reps}
                step={1}
                minimumTrackTintColor="green"
                maximumTrackTintColor="green"
                thumbTintColor="black"
                onValueChange={(value) => {
                  handleChange(value, "reps", index);
                  setIsChanged(true);
                }}
              />
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={15}
                text={filteredList[index].reps}
              ></QuickSand>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
              onPress={() => deleteIndex(index)}
            >
              <MaterialCommunityIcons
                name="delete-circle"
                size={35}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  const getUserExercises = async () => {
    const email = getAuth().currentUser?.email;
    const q = query(
      collection(db, "userExercises"),
      where("userEmail", "==", email)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setdbData([]);
    }
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      setdbData((dbData) => [
        ...dbData,
        {
          id: doc.data().id,
          exercise: doc.data().exercise,
          userEmail: doc.data().userEmail,
          reps: Number(doc.data().reps),
          sets: Number(doc.data().sets),
          weekDay: doc.data().weekDay,
        },
      ]);
      setCopydbData((dbDataCopy)=>[
        ...dbDataCopy,
        {
          id: doc.data().id,
          exercise: doc.data().exercise,
          userEmail: doc.data().userEmail,
          reps: Number(doc.data().reps),
          sets: Number(doc.data().sets),
          weekDay: doc.data().weekDay,
        }
      ])
    });
  };


  const [dbData, setdbData] = React.useState<Data[]>([]);
  const [dbDataCopy,setCopydbData] = React.useState<Data[]>([])
  const [currentWeekday, setCurrentWeekDay] = React.useState("Sun");
  const [isChanged, setIsChanged] = React.useState(false);
  const [filteredCopy, setFilteredCopy] = React.useState<Data[]>([]);
  const [filteredList, setFilteredList] = React.useState<Data[]>([]);
  const fullWeekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const reducedWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);
  const [valueCopy, setValueCopy] = React.useState<string[]>([]);
  const [items, setItems] = React.useState([
    { label: "Bench Press", value: "Bench Press" },
    { label: "Leg Press", value: "Leg Press" },
    { label: "Inclined Bench Press", value: "Inclined Bench Press" },
    { label: "Row", value: "Row" },
    { label: "Conventional Deadlift", value: "Conventional Deadlift" },
    { label: "Sumo Deadlift", value: "Sumo Deadlift" },
    { label: "Pullup", value: "Pullup" },
    { label: "Overhead Press", value: "Overhead Press" },
    { label: "Hip Thrust", value: "Hip Thrust" },
    { label: "Squats", value: "Squats" },
  ]);


  React.useEffect(() => {
    setFilteredList([]);
    let nonFilteredList = [...dbData];
    setValue([]);
    nonFilteredList.forEach((element) => {
      let index = fullWeekNames.indexOf(element.weekDay);
      if (reducedWeekNames[index] === currentWeekday) {
        setFilteredList((filteredList) => [...filteredList, element]);
        setValue((value) => [...value, element.exercise]);
      }
    });
  }, [currentWeekday, dbData]);

  React.useEffect(() => {
    getUserExercises();
  }, []);


  const unsavedChanges = () => {
    const unique_id = uuid();
    const email = getAuth().currentUser?.email;
    ///check diff between filtered list and my values
    if (email != null) {
      checkForAdd(email, unique_id);
      checkForRemovals();
    }
  };
  const checkForAdd = (email: string, unique_id: string) => {
    let exercisesDiff: string[] = [];
    value.forEach((element) => {
      if (!filteredList.some((e) => e.exercise === element)) {
        exercisesDiff.push(element);
      }
    });
    if (exercisesDiff.length > 0) {
      setIsChanged(true);
      exercisesDiff.forEach((element) => {
        const unique_id = uuid();
        const myWeekDayIndex = reducedWeekNames.indexOf(currentWeekday);
        const data = {
          exercise: element,
          id: unique_id,
          reps: 10,
          sets: 4,
          weekDay: fullWeekNames[myWeekDayIndex],
          userEmail: email,
        }
        setdbData((dbData)=>[...dbData,data]);
      });
    }
  };

  const checkForRemovals = () => {
    let exercisesDiff:Data[] = []
    filteredList.forEach((element) => {
      if (!value.some((e) => e === element.exercise)) {
        exercisesDiff.push(element);
      }
    });
    if(exercisesDiff.length>0){
      exercisesDiff.forEach(element => {
        const returnData = dbData.filter(object => {
          return object !== element;
        });
        setdbData(returnData)
      });
    }

  };

  const revertChanges = () => {
    setFilteredList([...filteredCopy]);
    setValue([...valueCopy]);
    setdbData([...dbDataCopy])
    setIsChanged(false);
  };
  const acceptChanges = () => {
     dbData.forEach(async element => {
      await db.collection("userExercises").doc(element.id).set({
        weekDay: element.weekDay,
        id: element.id,
        userEmail: element.userEmail,
        reps:element.reps.toString(),
        sets:element.sets.toString(),
        exercise:element.exercise
      });
    });
    
    let arrayOfRemovedIds:string[] = []
    dbDataCopy.forEach(element => {
      if (!dbData.some((e) => e.id===element.id)) {
        arrayOfRemovedIds.push(element.id)
      }
    });
    arrayOfRemovedIds.forEach(async element => {
      await db.collection("userExercises").doc(element).delete();
    });
    setCopydbData([...dbData])
    setIsChanged(false)
  };

  return (
    <View style={styles.mainContainer}>
      {isChanged ? (
        <View style={styles.btnTops}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => {
              revertChanges();
            }}
          >
            <QuickSand
              color={"red"}
              flex={0}
              fontsize={20}
              text={"Cancel"}
            ></QuickSand>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.acceptBtn}
            onPress={() => acceptChanges()}
          >
            <QuickSand
              color={"green"}
              flex={0}
              fontsize={20}
              text={"Save"}
            ></QuickSand>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.btnTopsHidden}>
          <></>
        </View>
      )}

      <View style={styles.top}>
        <View>
          <Sriracha
            color={"green"}
            fontsize={30}
            spacing={2}
            text={"Your plans"}
          ></Sriracha>
        </View>
        <View style={{ width: "60%", justifyContent: "center" }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={(value) => {
              if (value !== null) {
                unsavedChanges();
              }
            }}
            setItems={setItems}
            theme="LIGHT"
            multiple={true}
            mode="SIMPLE"
            textStyle={{ color: "green" }}
          />
        </View>
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

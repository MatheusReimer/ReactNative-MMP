import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
} from "react-native";
import styles from "./Styles";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import "react-native-get-random-values";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultHeader from "../DetachedComponents/DefaultHeader";
import { db } from "../../firebase";
import {
  collection,
} from "firebase/firestore";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import firebase from "firebase/compat";
import { v4 as uuid } from "uuid";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Modal } from "../Modal";
import Slider from "@react-native-community/slider";

export default function Home() {
  const month = [
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
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];



  interface Exercise {
    sets: string;
    reps: string;
    name: string;
    weight: string;
  }
  interface SliderValues {
    sets: number;
    reps: number;
    name: string;
    weight: number;
  }

  interface ExercisesData {
    id: string;
    day: string;
    month: string;
    userEmail: string;
    exeriseData: [Exercise];
  }

  interface WeekDayExercises {
    id: string;
    exercise: string;
    reps: string;
    sets: string;
  }



  const getUserDate = (isSplited: boolean) => {
    var dateObj = new Date();
    var today = dateObj.toLocaleDateString();
    if (isSplited) {
      var splited = today.split("/");
      return splited;
    } else {
      return today;
    }
  };



  const addToDb = async () => {
    const unique_id = uuid();
    const email = getAuth().currentUser?.email;
    if(!isEdition){
    await db.collection("userFullData").doc(unique_id).set({
      day: todayDay.toString(),
      month: todayMonth,
      id: unique_id,
      userEmail: email,
      data:exerciseValues
    });
    }else{
      console.log(idForEdit)
      await db.collection("userFullData").doc(idForEdit).set({
        day: todayDay.toString(),
        month: todayMonth,
        id: unique_id,
        userEmail: email,
        data:exerciseValues
      });
    }
    await getUserFullData()
    setIsModalVisible(()=>!isModalVisible)
  };



  const getUserFullData = async () => {
    const email = getAuth().currentUser?.email;
    const q = query(
      collection(db, "userFullData"),
      where("day", "==", todayDay.toString()),
      where("userEmail", "==", email),
      where("month", "==", todayMonth)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setDbExercises([]);
      setRegisterExerciseBtn(true);
    }
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      setRegisterExerciseBtn(false);
      let vector: any = [];
      for (let i = 0; i < doc.data().data.length; i++) {
        vector.push({
          name: doc.data().data[i].name,
          reps: doc.data().data[i].reps,
          sets: doc.data().data[i].sets,
          weight: doc.data().data[i].weight,
        });
      }
      setDbExercises([
        {
          id: doc.data().id,
          day: doc.data().id,
          month: doc.data().month,
          userEmail: doc.data().userEmail,
          exeriseData: vector,
        },
      ]);

    });
  };

  const openCalendar = () => {
    setIsCalendarOpen(() => !isCalendarOpen);
  };


  function calendarMaxDate() {
    let today = new Date();
    let day = today.getDate().toString();

    if (day.length < 2) {
      day = "0" + day;
    }
    let month = (today.getMonth() + 1).toString();
    if (month.length < 2) {
      month = "0" + month;
    }
    let year = today.getFullYear().toString();
    let returnString = year + "-" + month + "-" + day;
    return returnString.toString();
  }

  function getWeekDay(date: Date) {
    let index = date.getDay();
    return weekDay[index];
  }




  const getWeekDayExercises = async () => {
    if (lastConsultedDate == todayDay && lastConsultedMonth == todayMonth) {
      setIsModalVisible(() => !isModalVisible);
    } else {
      const email = getAuth().currentUser?.email;
      const q = query(
        collection(db, "userExercises"),
        where("userEmail", "==", email),
        where("weekDay", "==", todayWeekDay)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        alert(
          "Ops, you don't have any plans on " +
            todayWeekDay +
            ", go to the calendar tab to create one"
        );
      } else {
          querySnapshot.forEach(async (doc) => {
            // doc.data() is never undefined for query doc snapshots
            setExerciseValues((exerciseValues) => [
              ...exerciseValues,
              {
                name: doc.data().exercise,
                reps: Number(doc.data().reps),
                sets: Number(doc.data().sets),
                weight: 0,
              },
            ]);
            await setWeekDayExercises((weekDayExercises) => [
              ...weekDayExercises,
              {
                id: doc.data().id,
                exercise: doc.data().exercise,
                reps: doc.data().reps,
                sets: doc.data().sets,
              },
            ]);
          });
          setIsModalVisible(() => !isModalVisible);
          setLastConsultedDate(todayDay);
          setLastConsultedMonth(todayMonth);
       
      }
    }
  };

  const updatingStates = () =>{
    
    dbExercises.forEach(element => {
      setIdForEdit(element.id)
      element.exeriseData.forEach(element2 => {
        setExerciseValues((exerciseValues) => [
          ...exerciseValues,
          {
            name: element2.name,
            reps: Number(element2.reps),
            sets: Number(element2.sets),
            weight: Number(element2.weight),
          },
        ]);
        setWeekDayExercises((weekDayExercises) => [
          ...weekDayExercises,
          {
            id: "",
            exercise: element2.name,
            reps: element2.reps,
            sets: element2.sets,
          },
        ]);
      });      
    });
  }

  function handleChange(value: number, type: string, index: number) {
    let items = [...exerciseValues];
    let item = { ...items[index] };
    if (type === "sets") {
      (item.sets = value), (items[index].sets = item.sets);
    }
    if (type === "reps") {
      (item.reps = value), (items[index].reps = item.reps);
    }
    if (type === "weight") {
      (item.weight = value), (items[index].weight = item.weight);
    }
    setExerciseValues(items);
  }

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [lastConsultedDate, setLastConsultedDate] = React.useState(-1);
  const [lastConsultedMonth, setLastConsultedMonth] = React.useState("");
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [dbExercises, setDbExercises] = React.useState<ExercisesData[]>([]);
  const [exerciseValues, setExerciseValues] = React.useState<SliderValues[]>([]);
  const [weekDayExercises, setWeekDayExercises] = React.useState<WeekDayExercises[]>([]);
  const [isEdition,setIsEdition] = React.useState(false)
  const [idForEdit,setIdForEdit] = React.useState("");
  const [registerExerciseBtn, setRegisterExerciseBtn] = React.useState(true);
  const splited = getUserDate(true);
  const [todayDay, setTodayDay] = React.useState(Number(splited[1]));
  const [todayMonth, setTodayMonth] = React.useState(month[Number(splited[0]) - 1]);
  const notSplited = getUserDate(false);
  const [todayWeekDay, setTodayWeekDay] = React.useState(getWeekDay(new Date(notSplited.toString())));


  
  React.useEffect(() => {
    getUserFullData();
  }, [todayDay]);

  React.useEffect(()=>{
    setExerciseValues([])
    setWeekDayExercises([])
    updatingStates();
  },[dbExercises])




  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])

  return (
    <KeyboardAvoidingView>
      {isCalendarOpen ? (
        <Calendar
          maxDate={calendarMaxDate()}
          style={styles.calendarStyle}
          theme={{ arrowColor: "green", todayTextColor: "green" }}
          onDayPress={async (day) => {
            let x = new Date(day.dateString);
            await setTodayWeekDay(weekDay[x.getUTCDay()]);
            await setTodayMonth(month[Number(day.month) - 1]);
            setTodayDay(day.day);
            openCalendar();
          }}
        ></Calendar>
      ) : (
        <></>
      )}
      <View style={styles.container}>
        <DefaultHeader />
        <View style={styles.mid}>
          <View style={styles.day}>
            <TouchableOpacity
            style={styles.dayBtn}
              onPress={() => {
                openCalendar();
              }}
            >
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={24}
                text={todayMonth + ", " + todayDay + " (" + todayWeekDay + ")"}
              ></QuickSand>
            </TouchableOpacity>
          </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <Modal.Container>
            <Modal.Header
              title={
                <QuickSand
                  color={"black"}
                  flex={0}
                  fontsize={24}
                  text={"How was your train"}
                ></QuickSand>
              }
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "white",
              }}
              onPress={()=>{setIsEdition(false);setIsModalVisible(() => !isModalVisible)}}
            >
              <Entypo name="plus" size={24}></Entypo>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} persistentScrollbar={true}>
            <Modal.Body>
          
                {weekDayExercises.map((c, index) => {
                  return (
                    <View style={styles.modalExercises} key={index}>
                      <QuickSand
                        color={"black"}
                        fontsize={24}
                        flex={0}
                        text={c.exercise}
                      ></QuickSand>
                      <View
                        style={{
                          height: 20,
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        <Text>Sets:</Text>
                        <TextInput
                          style={{
                            backgroundColor: "#80ff80",
                            width: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                          keyboardType="numeric"
                          onChangeText={(text) => {
                            handleChange(Number(text), "sets", index);
                          }}
                        >
                          {exerciseValues[index].sets}
                        </TextInput>
                      </View>
                      <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={15}
                        value={exerciseValues[index].sets}
                        step={1}
                        minimumTrackTintColor="green"
                        maximumTrackTintColor="green"
                        thumbTintColor="black"
                        onValueChange={(value) => {
                          handleChange(value, "sets", index);
                        }}
                      />
                      <View
                        style={{
                          height: 20,
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        <Text>Reps:</Text>
                        <TextInput
                          style={{
                            backgroundColor: "#80ff80",
                            width: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                          keyboardType="numeric"
                          onChangeText={(text) => {
                            handleChange(Number(text), "reps", index);
                          }}
                        >
                          {exerciseValues[index].reps}
                        </TextInput>
                      </View>
                      <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={50}
                        value={exerciseValues[index].reps}
                        step={1}
                        minimumTrackTintColor="green"
                        maximumTrackTintColor="green"
                        thumbTintColor="black"
                        onValueChange={(value) => {
                          handleChange(value, "reps", index);
                        }}
                      />
                      <View
                        style={{
                          height: 20,
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        <Text>Weight:</Text>
                        <TextInput
                          style={{
                            backgroundColor: "#80ff80",
                            width: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                          keyboardType="numeric"
                          onChangeText={(text) => {
                            handleChange(Number(text), "weight", index);
                          }}
                        >
                          {exerciseValues[index].weight}
                        </TextInput>
                      </View>
                      <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={500}
                        value={exerciseValues[index].weight}
                        step={1}
                        minimumTrackTintColor="green"
                        maximumTrackTintColor="green"
                        thumbTintColor="black"
                        onValueChange={(value) => {
                          handleChange(value, "weight", index);
                        }}
                      />
                    </View>
                  );
                })}
            </Modal.Body>
            </ScrollView>

            <Modal.Footer>
              <View style={styles.footerStyle}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setIsModalVisible(() => !isModalVisible)}
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
                  onPress={()=>addToDb()}
                >
                  <QuickSand
                    color={"green"}
                    flex={0}
                    fontsize={20}
                    text={"Accept"}
                  ></QuickSand>
                </TouchableOpacity>
              </View>
            </Modal.Footer>
          </Modal.Container>
        </Modal>
        <View style={styles.main}>
          <View style={styles.mainHeaders}>
            <QuickSand
              fontsize={13}
              color={"black"}
              text="Exercise Name"
              flex={0}
            ></QuickSand>
            <QuickSand
              fontsize={13}
              color={"#008037"}
              text="Reps"
              flex={0}
            ></QuickSand>
            <QuickSand
              fontsize={13}
              color={"#008037"}
              text="Weight"
              flex={0}
            ></QuickSand>
            <QuickSand
              fontsize={13}
              color={"#008037"}
              text="Sets"
              flex={0}
            ></QuickSand>
          </View>
          <View style={styles.exercises}>
            <View style={styles.hr}></View>
            <SafeAreaView>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} persistentScrollbar={true}>
                {registerExerciseBtn ? (
                  <View style={styles.addRegisterBtn}>
                    <TouchableOpacity
                      style={styles.exercisesRegisterBtn}
                      onPress={() => {
                        getWeekDayExercises();
                      }}
                    >
                      <QuickSand
                        color={"white"}
                        flex={0}
                        fontsize={18}
                        text={"How was your train?"}
                      ></QuickSand>
                    </TouchableOpacity>
                  </View>
                ) : (
                  dbExercises.map((c) => {
                    return c.exeriseData.map((d,index2) => {
                      return (
                        
                        <View style={styles.exercisesEach} key={index2}>
                          
                          <QuickSand
                            fontsize={12}
                            text={d.name}
                            color={"black"}
                            flex={2}
                          ></QuickSand>
                          <QuickSand
                            fontsize={12}
                            text={d.reps}
                            color={"black"}
                            flex={1.4}
                          ></QuickSand>
                          <QuickSand
                            fontsize={12}
                            text={d.weight}
                            color={"black"}
                            flex={1.3}
                          ></QuickSand>
                          <QuickSand
                            fontsize={12}
                            text={d.sets}
                            color={"black"}
                            flex={0.9}
                          ></QuickSand>
                        </View>
                      );
                    });
                  })
                )}
              </ScrollView>
            </SafeAreaView>
            {registerExerciseBtn ? <></> : <TouchableOpacity style={{alignItems:"flex-end",justifyContent:"center",height:"30%",marginRight:15  }} onPress={()=>{setIsEdition(true);setIsModalVisible(() => !isModalVisible)}}><Feather name="edit" size={24} color="black" style={styles.editBtn} /></TouchableOpacity> }
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

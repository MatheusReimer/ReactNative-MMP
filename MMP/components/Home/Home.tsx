import * as React from 'react';
import { Button, View, Text,Image, Touchable, TouchableOpacity } from 'react-native';
import styles from './Styles';
import QuickSand from '../GeneralStyles/Quicksand';
import Sriracha from '../GeneralStyles/Sriracha';
import 'react-native-get-random-values';
import { FlatList ,ScrollView, TextInput} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultHeader from '../DetachedComponents/DefaultHeader';
import { db } from '../../firebase';
import { doc, setDoc,updateDoc,arrayUnion, collection, getDoc } from "firebase/firestore";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import firebase from 'firebase/compat';
import { v4 as uuid } from 'uuid';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Modal } from "../Modal";
import Caveat from '../GeneralStyles/Caveat';


export default function Home() {
  const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const [dbExercises,setDbExercises] = React.useState([{id:"",name:"",reps:"",weight:"",sets:""}])
  const [weekDayExercises,setWeekDayExercises] = React.useState([{id:"",exercise:"",reps:"",sets:""}])
  const exercies = [
    {
      id: "1",
      name: "Bench",
      reps:10,
      weight:20,
      sets:4,

    },
    {
      id: "2",
      name: "Leg press",
      reps:10,
      weight:300,
      sets:3,

    },
    {
      id: "3",
      name: "Bench",
      reps:10,
      weight:20,
      sets:4,

    },
    {
      id: "4",
      name: "Leg press",
      reps:10,
      weight:300,
      sets:3,

    },    {
      id: "5",
      name: "Bench",
      reps:10,
      weight:20,
      sets:4,

    },
    {
      id: "6",
      name: "Leg press",
      reps:10,
      weight:300,
      series:3,

    },
  ]



  const getUserDate = () => {
    var dateObj = new Date();
    var today = dateObj.toLocaleDateString()
    var splited = today.split("/")
    return splited;
    
  }

  
    
  const z = () =>{
    const unique_id = uuid();
    db.collection('userExercises').doc(unique_id).set({
      weekDay:"Sunday",
      userEmail:"test@gmail.com",
      reps:"10",
      sets:"5",
      exercise:"Bench",
      id:unique_id
    })
  }
  const k = () =>{
    const unique_id = uuid();
    db.collection("userFullData").doc(unique_id).set({
      day:"28",
      month:"May",
      exercise:"Bench",
      reps:5,
      sets:5,
      wheight:"20",
      id:unique_id,
      userEmail:"test@gmail.com"
    })
  }
  
  const [registerExerciseBtn,setRegisterExerciseBtn] = React.useState(false);

  const getUserFullData = async() =>{
    getUserDate()
    const email = getAuth().currentUser?.email;
    const q = query(collection(db, "userFullData"), where("day", "==", todayDay.toString()),where("userEmail","==",email),where("month","==",todayMonth));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      setDbExercises([{id:"",name:"",reps:"",sets:"",weight:""}])
      setRegisterExerciseBtn(true)
    }
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setRegisterExerciseBtn(false)
      console.log(doc.id, " => ", doc.data());
      setDbExercises(dbExercises => [...dbExercises, {id:doc.data().id,name:doc.data().exercise,reps:doc.data().reps,weight:doc.data().wheight,sets:doc.data().sets}]);
      
      });
  }

  const [isCalendarOpen,setIsCalendarOpen] = React.useState(false)
  const openCalendar = () =>{
    setIsCalendarOpen(()=>!isCalendarOpen)
  }
  let splited = getUserDate();
  const [todayDay,setTodayDay] = React.useState(Number(splited[1]))
  const [todayMonth,setTodayMonth] = React.useState(month[Number(splited[0])-1])
  const [todayWeekDay,setTodayWeekDay] = React.useState(getWeekDay())

  React.useEffect(()=>{
    getUserFullData()
  },[todayDay])

  function calendarMaxDate(){
    let today = new Date()
    let split =  today.toISOString().split("T")
    return split[0]
  }

  function getWeekDay(){
    let thisDate = new Date()
    let index = thisDate.getDay()
    return weekDay[index]
  }


  const getWeekDayExercises = async() =>{
    const email = getAuth().currentUser?.email;
    const q = query(collection(db, "userExercises"),where("userEmail","==",email),where("weekDay","==",todayWeekDay));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      alert("Ops, you don't have any plans on "+todayWeekDay+", please go to the following tab and create your plan!")
    }
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      await setWeekDayExercises(weekDayExercises => [...weekDayExercises, {id:doc.data().id,exercise:doc.data().exercise,reps:doc.data().reps,sets:doc.data().sets}]);
      setIsModalVisible(()=>!isModalVisible)
      
      });
  }
  
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <View>   
          {isCalendarOpen ? <Calendar  maxDate={calendarMaxDate()} style={styles.calendarStyle} theme={{   arrowColor: 'green',todayTextColor: 'green'}}   onDayPress={async day => {
    setTodayDay(day.day)
    await setTodayMonth(month[Number(day.month)-1])
    openCalendar();
  }}></Calendar> : <></>}
        <View style={styles.container}>
          <DefaultHeader/>
          <View style={styles.mid}>
          <View style={styles.day}>
            <TouchableOpacity onPress={()=>{openCalendar()}} ><QuickSand color={"black"} flex={0} fontsize={24} text={todayMonth+", "+todayDay}></QuickSand></TouchableOpacity>
          </View>
          </View>
          <Modal isVisible={isModalVisible}>
                  <Modal.Container>
                    <Modal.Header
                      title={
                        <Caveat
                          color={"black"}
                          fontsize={30}
                          text={"How was your train?"}
                          spacing={3}
                        ></Caveat>
                      }
                    />
                    <TouchableOpacity style={{position:"absolute", top:0,right:0, backgroundColor:"white"}} onPress={()=>setIsModalVisible(()=>!isModalVisible)}><Entypo name='plus' size={24} ></Entypo></TouchableOpacity>
                    <Modal.Body>
                    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                    {weekDayExercises.map((c, index) => {
                    return(
                    <View style={styles.modalExercises} key={index}>
                      <Sriracha color={"black"} fontsize={20} spacing={2} text={c.exercise}></Sriracha>
                      <TextInput style={styles.textInput}><Sriracha color={"black"} fontsize={20} spacing={2} text={c.reps}></Sriracha></TextInput>
                      <TextInput style={styles.textInput}><Sriracha color={"black"} fontsize={20} spacing={2} text={c.sets}></Sriracha></TextInput>
                      <TextInput style={styles.textInput}><Sriracha color={"black"} fontsize={20} spacing={2} text={c.sets}></Sriracha></TextInput>


                  </View> )
                })
              }
    </ScrollView>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                  </Modal.Container>
                </Modal>
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
              { registerExerciseBtn ? <View style={styles.addRegisterBtn}><TouchableOpacity style={styles.exercisesRegisterBtn} onPress={()=>{getWeekDayExercises()}}><QuickSand color={"white"} flex={0} fontsize={18} text={"Ops, nothing here...Do you wanna add or change?"}></QuickSand></TouchableOpacity></View> : 
                dbExercises.map((c, index) => {
                  return(<View style={styles.exercisesEach} key={index}>
                    <QuickSand fontsize={12} text={c.name} color={"black"} flex={2}></QuickSand>
                    <QuickSand fontsize={12} text={c.reps} color={"black"} flex={1.4}></QuickSand>
                    <QuickSand fontsize={12} text={c.weight} color={"black"} flex={1.3}></QuickSand>
                    <QuickSand fontsize={12} text={c.sets} color={"black"} flex={0.9}></QuickSand>
                   
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

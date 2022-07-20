import * as React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import Sriracha from "../GeneralStyles/Sriracha";
import QuickSand from "../GeneralStyles/Quicksand";
import styles from "./Styles";
import {
  Feather,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Modal } from "../Modal";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import useStateWithCallback from "../../hooks/useCallbackHook";


export default function Exercises() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isExerciseListModalVisible, setExerciseListModalVisible] = React.useState(false);
  
  let savedItems;
  const [selectedWeekday_Index,setSelectedWeekday_Index]=useState(-1);

  const openExerciseListModal = async(index:number) =>{
    console.log("opening...")
    let mounted = true;
    if(mounted){
    let selectedValue = selectedItems[index];
    let mappedItem = items.map(({ value }) => value).indexOf(selectedValue)
    console.log("mappedItem " + mappedItem)
   
    await updateValuesNotUndefined(mappedItem).then
    console.log("exerciseValues " + exerciseValues)
   
    setExerciseListModalVisible(()=>!isExerciseListModalVisible)
    }else{
      return () => mounted = false;
    }
  }
  
 const updateValuesNotUndefined = (selectedWeekday_Index:number) => {
  setSelectedWeekday_Index(selectedWeekday_Index)
  return new Promise((resolve) => {
    console.log("selectedWeekDay_Index " + selectedWeekday_Index + " fullData: " + fullData[selectedWeekday_Index])
    if(fullData[selectedWeekday_Index]!==undefined){
      setExerciseValues(fullData[selectedWeekday_Index],resolve)
    }
    else{
      console.log("Ops, nothing here")
      setExerciseValues([],resolve)
    }
  });
}


  const openModal = () => {
    savedItems = [...selectedItems];
    setIsModalVisible(() => !isModalVisible);
  };

  const accept = () => {
    savedItems = [...value];
    setIsModalVisible(() => !isModalVisible);
    setSelectedItems(savedItems);
  };
  const cancel = () => {
    setIsModalVisible(() => !isModalVisible);
  };

  const acceptExercises = () => {
    setFullData(prevState =>({
      ...prevState,
      [selectedWeekday_Index]:exerciseValues,    
    }))
    setExerciseListModalVisible(()=>!isExerciseListModalVisible)
   

  }


  const cancelExercise = () => {
    setExerciseListModalVisible(()=>!isExerciseListModalVisible)
  }
 
  const generateKey = (pre: { pre: any }) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ]);

  const [fullData,setFullData] = useState({})
  const [openExerciseModal, setOpenExerciseModal] = useState(false);
  const [exerciseValues, setExerciseValues] = useStateWithCallback([]);
  const [exerciseItems, setExerciseItems] = useState([
    { label: "Bench Press", value: "BenchPress" },
    { label: "Leg Press", value: "Leg Press" },
    { label: "Inclined Bench Press", value: "Inclined Bench Press" },
    { label: "Row", value: "Row" },
    { label: "Conventional Deadlift", value: "Conventional Deadlift" },
    { label: "Sumo Deadlift", value: "Sumo Deadlift" },
    { label: "Pullup", value: "Pullup" },
    { label: "Overhead Press", value: "Overhead Press" },
    { label: "Hip Thrust", value: "Hip Thrust" },
  ]);

  






  const listRemoval = (index: number) => {
    let itemsCopy = [...value];
    itemsCopy.splice(index, 1);
    setValue(itemsCopy);
  };


  const exerciseListRemoval = (index:number) =>{
    let itemsCopy = [...exerciseValues];
    itemsCopy.splice(index, 1);
    setExerciseValues(itemsCopy);
  }

  const cardsList = () => {
    return selectedItems.map((element, index) => {
      return (
        <View style={styles.weekDayPlanContainer} key={generateKey(element)}>
          <TouchableOpacity style={styles.weekDayPlan} onPress={()=>openExerciseListModal(index)}>
            <View style={styles.indexBtn}><Text  style={styles.quicksand}>{index+1}</Text></View>
            <View><Text style={styles.quicksand}>{element}</Text></View>
            <View style={styles.editBtn}><FontAwesome5 name="edit" size={20} color="black"/></View>
          </TouchableOpacity>
        </View>
      );
    });
  };


  const [reps,setReps] = useState([])
  const [sets,setSets] = useState([])


  const increaseOrDecreaseReps = (index:number,isIncreasing:boolean) =>{
    let copy:any = [...reps]
    console.log(copy[index])
    if(copy[index]==undefined){
      copy[index] = 0
    }
    console.log(copy[index] + " dps")
    if(isIncreasing){copy[index] +=3;}
    else if(!isIncreasing && copy[index]>0){copy[index]-=1}
    setReps(copy)
  }
  
  const increaseOrDecreaseSets = (index:number,isIncreasing:boolean) => {
    let copy:any = [...sets]
    console.log(copy[index])
    if(copy[index]==undefined || copy[index]<=0){
      copy[index] = 0
    }
    console.log(copy[index] + " dps")
    if(isIncreasing){copy[index] +=2;}
    else if(!isIncreasing && copy[index]>0){copy[index]-=1}
    setSets(copy)
  }
  
  const exercisesList = () => {
    return exerciseValues.map((element:any, index:any) => {
      return (
        <View  key={generateKey(element)} style={styles.wholeContainer}>
        <View style={styles.chosenExerciseContainer}>
          <View style={styles.chosenExercisesModal}>
            <View>
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={20}
                text={element}
              ></QuickSand>
            </View>
          </View>
          <View style={styles.deleteIcon}>
            <TouchableOpacity onPress={() => exerciseListRemoval(index)}>
              <Feather name="trash" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.reps}>
          <TouchableOpacity style={styles.decreaseOrIncreseBtn} onPress={()=>increaseOrDecreaseReps(index,false)}><Ionicons name="remove" size={20} color="red"></Ionicons></TouchableOpacity>
          <View style={styles.repsAndSeriesText}><QuickSand color={"black"} flex={0} fontsize={18} text={"Reps:"}></QuickSand><View style={styles.numberRepsAndSeries}><QuickSand color={"black"} flex={0} fontsize={18} text={reps[index]}></QuickSand></View></View>
          <TouchableOpacity style={styles.decreaseOrIncreseBtn} onPress={()=>increaseOrDecreaseReps(index,true)}><Ionicons name="add" size={20} color="green"></Ionicons></TouchableOpacity>
        </View>
        <View style={styles.series}>
          <TouchableOpacity style={styles.decreaseOrIncreseBtn} onPress={()=>increaseOrDecreaseSets(index,false)}><Ionicons name="remove" size={20} color="red"></Ionicons></TouchableOpacity>
          <View style={styles.repsAndSeriesText}><QuickSand color={"black"} flex={0} fontsize={18} text={"Sets:"}></QuickSand><View style={styles.numberRepsAndSeries}><QuickSand color={"black"} flex={0} fontsize={18} text={sets[index]}></QuickSand></View></View>
          <TouchableOpacity style={styles.decreaseOrIncreseBtn} onPress={()=>increaseOrDecreaseSets(index,true)}><Ionicons name="add" size={20} color="green"></Ionicons></TouchableOpacity>
        </View>
        </View>
      );
    });
  };



    const list = () => {
      return value.map((element, index) => {
        return (
          <View style={styles.chosenExerciseContainer} key={generateKey(element)}>
            <View style={styles.chosenExercisesModal}>
              <View style={styles.index}>
                <QuickSand
                  color={"black"}
                  flex={0}
                  fontsize={18}
                  text={index + 1}
                ></QuickSand>
              </View>
              <View>
                <QuickSand
                  color={"black"}
                  flex={0}
                  fontsize={18}
                  text={element}
                ></QuickSand>
              </View>
            </View>
            <View style={styles.deleteIcon}>
              <TouchableOpacity onPress={() => listRemoval(index)}>
                <Feather name="trash" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        );
      });
    }





  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.topHeader}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.topImageProfile}
          ></Image>
        </View>
        <View style={styles.topHeaderText}>
          <View>
            <Sriracha
              color={"white"}
              fontsize={30}
              spacing={2}
              text={"Your Plans"}
            ></Sriracha>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.firstLayoutContainer}>
          <View style={styles.firstLayoutShadow}>
            <View style={styles.firstLayout}>
              <QuickSand
                color={"black"}
                flex={0}
                fontsize={20}
                text={"Add or remove another plan"}
              ></QuickSand>
              <Ionicons
                name="add-circle-sharp"
                size={34}
                color="#128B3B"
                onPress={openModal}
                style={{ position: "absolute", bottom: -15,backgroundColor:"white", }}
              />
              <View style={styles.openedModal}>
                <Modal isVisible={isModalVisible}>
                  <Modal.Container>
                    <Modal.Header
                      title={
                        <QuickSand
                          color={"black"}
                          fontsize={25}
                          text={"One step away"}
                          flex={0}
                        ></QuickSand>
                      }
                    />
                    <Modal.Body>
                      <QuickSand
                        color={"black"}
                        flex={0}
                        fontsize={16}
                        text={"Select the day you want to create a plan"}
                      ></QuickSand>
                      <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        theme="LIGHT"
                        multiple={true}
                        mode="SIMPLE"
                        badgeDotColors={["black"]}
                      />
                    </Modal.Body>

                    <ScrollView
                      contentContainerStyle={styles.scrollViewModalBody}
                    >
                      {list()}
                    </ScrollView>

                    <Modal.Footer>
                      <View style={styles.footerStyle}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={cancel}>
                          <QuickSand
                            color={"red"}
                            flex={0}
                            fontsize={20}
                            text={"Cancel"}
                          ></QuickSand>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.acceptBtn}
                          onPress={accept}
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



                <Modal isVisible={isExerciseListModalVisible}>
                  <Modal.Container>
                   

                    <Modal.Header
                      title={
                        <QuickSand
                          color={"green"}
                          fontsize={25}
                          text={"Exercise List"}
                          flex={0}
                        ></QuickSand>
                      }
                    />
                    <Modal.Body>
                      <QuickSand
                        color={"green"}
                        flex={0}
                        fontsize={16}
                        text={"Select all your exercises"}
                      ></QuickSand>
                      <DropDownPicker
                        open={openExerciseModal}
                        value={exerciseValues}
                        items={exerciseItems}
                        setOpen={setOpenExerciseModal}
                        setValue={setExerciseValues}
                        setItems={setExerciseItems}
                        theme="LIGHT"
                        multiple={true}
                        mode="SIMPLE"
                        badgeDotColors={["black"]}
                      />
                    </Modal.Body>
                    <ScrollView
                      contentContainerStyle={styles.scrollViewModalBody}
                    >
                      {exercisesList()}
                    </ScrollView>
                    <Modal.Footer>
                      <View style={styles.footerStyle}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={cancelExercise}>
                          <QuickSand
                            color={"red"}
                            flex={0}
                            fontsize={20}
                            text={"Cancel"}
                          ></QuickSand>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.acceptBtn}
                          onPress={acceptExercises}
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
              </View>
            </View>
          </View>
        </View>
        <View style={styles.listedWorkouts}>{cardsList()}</View>
      </View>
    </View>
  );
}
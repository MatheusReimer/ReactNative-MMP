import * as React from "react";
import {
  View,
  Image,
  TouchableOpacity,
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


export default function Exercises() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isExerciseListModalVisible, setExerciseListModalVisible] = React.useState(false);

  let savedItems;
  let savedExercises;
  let selectedWeekday_Index;

  const openExerciseListModal = (index:number) =>{
    //saving array first
    savedExercises = [...selectedExercise]
    
    let selectedValue = selectedItems[index];
    selectedWeekday_Index =items.map(({ value }) => value).indexOf(selectedValue)
    setExerciseListModalVisible(() => !isExerciseListModalVisible)
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
    savedExercises = [...exerciseValues]
    setExerciseListModalVisible(()=>!isExerciseListModalVisible)
    setSelectedExercises(savedExercises)
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

  const [selectedExercise, setSelectedExercises] = useState([])
  const [openExerciseModal, setOpenExerciseModal] = useState(false);
  const [exerciseValues, setExerciseValues] = useState([]);
  const [exerciseItems, setExerciseItems] = useState([
    { label: "Bench Press", value: "BenchPress" },
  ]);

  const listRemoval = (index: number) => {
    let itemsCopy = [...value];
    itemsCopy.splice(index, 1);
    setValue(itemsCopy);
  };

  const cardsList = () => {
    return selectedItems.map((element, index) => {
      return (
        <View style={styles.weekDayPlanContainer} key={generateKey(element)}>
          <TouchableOpacity style={styles.weekDayPlan} onPress={()=>openExerciseListModal(index)}>
            <View style={styles.indexBtn}><QuickSand color={"black"} flex={0} fontsize={20} text={index+1}></QuickSand></View>
            <View><QuickSand color={"black"} flex={0} fontsize={20} text={element}></QuickSand></View>
            <View style={styles.editBtn}><FontAwesome5 name="edit" size={20} color="black"/></View>
          </TouchableOpacity>
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
  };

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
                style={{ position: "absolute", bottom: -15 }}
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

import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  TextInput,
} from "react-native";
import Sriracha from "../GeneralStyles/Sriracha";
import QuickSand from "../GeneralStyles/Quicksand";
import styles from "./Styles";
import {
  AntDesign,
  Entypo,
  Feather,
  Zocial,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Modal } from "../Modal";
import { useState, useEffect } from "react";
import Caveat from "../GeneralStyles/Caveat";

export default function Exercises() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  useEffect(() => {
    const checkForSubscription = setTimeout(() => {
      setIsModalVisible(() => !isModalVisible);
    }, 1500);
    return () => clearTimeout(checkForSubscription);
  }, []);

  const handleSignUp = () => {
    // sign up the user and close the modal
    setIsModalVisible(() => !isModalVisible);
  };

  const handleDecline = () => setIsModalVisible(() => !isModalVisible);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const [item, setItems] = useState<any>([]);
  const generateKey = (pre: { pre: any }) => {
    return `${pre}_${new Date().getTime()}`;
  };

  /* 
    function addItem() {
        setItems([...item, <Text key={generateKey(item)}>aaaaa</Text>]);
       
    }
    */

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
                fontsize={15}
                text={"Add another plan"}
              ></QuickSand>
              <Ionicons
                name="add-circle-sharp"
                size={34}
                color="#128B3B"
                onPress={handleModal}
                style={{ position: "absolute", bottom: -15 }}
              />
              <View style={styles.openedModal}>
              <Modal isVisible={isModalVisible} >
                <Modal.Container>
                  <AntDesign
                    name="minuscircleo"
                    size={30}
                    color="#128B3B"
                    onPress={handleDecline}
                    style={{ position: "absolute", top: 10, right: 10 }}
                  />
                  <AntDesign
                    name="minuscircleo"
                    size={30}
                    color="#128B3B"
                    onPress={handleSignUp}
                    style={{ position: "absolute", bottom: 10 }}
                  />
                  <View style={{}}>
                    <Modal.Header title={(<Sriracha color={"black"} fontsize={25} spacing={2} text={"One step away"}></Sriracha>)}/>
                    <Modal.Body>
                      <QuickSand color={"black"} flex={0} fontsize={16} text={"Select the day you want to create a plan"}></QuickSand>
                      <TextInput
                        style={{}}
                        placeholder="email"
                        keyboardType="email-address"
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <View style={{}}></View>
                    </Modal.Footer>
                  </View>
                </Modal.Container>
              </Modal>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

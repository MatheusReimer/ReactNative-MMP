import { View, Image } from "react-native";
import styles from "./DefaultHeaderStyle";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import React from "react";




const DefaultHeader = () => {

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
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <View style={styles.leftTop}>
          <QuickSand
            text={"Lets workout"}
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

      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        ></Image>
      </View>
    </View>
  );
};

export default DefaultHeader;
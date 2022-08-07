import { View, Image } from "react-native";
import styles from "./DefaultHeaderStyle";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import { getAuth } from "firebase/auth";

const email = getAuth().currentUser?.email;


const DefaultHeader = () => {
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
            text={email}
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
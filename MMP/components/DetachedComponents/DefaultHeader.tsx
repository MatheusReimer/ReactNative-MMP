import { View, Image } from "react-native";
import styles from "./DefaultHeaderStyle";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";

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
            text={"Matheus Reimer"}
            fontsize={25}
            color={"white"}
            spacing={1}
          ></Sriracha>
        </View>
        <View style={styles.rightTop}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.topHeaderImage}
          ></Image>
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
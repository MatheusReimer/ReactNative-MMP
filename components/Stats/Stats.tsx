import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Text ,TouchableOpacity} from "react-native";
import styles from "./Styles";
import { Dimensions } from "react-native";
import DefaultHeader from "../DetachedComponents/DefaultHeader";
import { LineChart } from "react-native-chart-kit";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";

import MyLineChart from "./MyLineChart";
import ChartButton from "./ChartBtn";

export default function Stats() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <QuickSand
          text={"Lets see your stats"}
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
      <View style={styles.header2}>
        <TouchableOpacity style={styles.chartBtn} ><QuickSand color={"black"} flex={0} fontsize={22} text={"Weekly"}></QuickSand></TouchableOpacity>
        <TouchableOpacity style={styles.chartBtn}><QuickSand color={"black"} flex={0} fontsize={22} text={"Monthly"}></QuickSand></TouchableOpacity>
        <TouchableOpacity style={styles.chartBtn}><QuickSand color={"black"} flex={0} fontsize={22} text={"Year"}></QuickSand></TouchableOpacity>
      </View>
      <View style={styles.graphs}>
      <MyLineChart/>
      </View>
      <View style={styles.graphsSelectorContainer}>
        <View style={styles.graphSelectorHeader}><QuickSand color={"white"} flex={0} fontsize={30} text={"Graphs Types"}></QuickSand></View>
          <View style={styles.columns}>
          <ChartButton title={"Line \nChart"} source={require("../../assets/images/line.png")}></ChartButton>
          <ChartButton title={"Pie \nChart"} source={require("../../assets/images/pizza.png")}></ChartButton>
          <ChartButton title={"Bar \nChart"} source={require("../../assets/images/bar.png")}></ChartButton>
          <ChartButton title={"Heat \nChart"}source={require("../../assets/images/heatmap.png")}></ChartButton>
          </View>
      </View>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import styles from "./Styles";
import { Dimensions } from "react-native";
import DefaultHeader from "../DetachedComponents/DefaultHeader";
import { LineChart } from "react-native-chart-kit";
import QuickSand from "../GeneralStyles/Quicksand";
import Sriracha from "../GeneralStyles/Sriracha";
import { TouchableOpacity } from "react-native-gesture-handler";

const line = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
};

export default function Stats() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <QuickSand
          text={"Lets see your stats"}
          fontsize={20}
          color={"black"}
          flex={0}
        ></QuickSand>
        <Sriracha
          text={"Matheus Reimer"}
          fontsize={25}
          color={"black"}
          spacing={1}
        ></Sriracha>
      </View>
      <View style={styles.header2}>
        <TouchableOpacity style={styles.chartBtn}><QuickSand color={"black"} flex={0} fontsize={20} text={"Weekly"}></QuickSand></TouchableOpacity>
        <TouchableOpacity style={styles.chartBtn}><QuickSand color={"black"} flex={0} fontsize={20} text={"Monthly"}></QuickSand></TouchableOpacity>
        <TouchableOpacity style={styles.chartBtn}><QuickSand color={"black"} flex={0} fontsize={20} text={"Year"}></QuickSand></TouchableOpacity>
      </View>
      <View style={styles.graphs}>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "May", "Apr", "Mar", "Jun"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width/0.99} // from react-native
        height={250}
        withInnerLines={false}
        yAxisSuffix=" Kg"
        withDots={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => `white`,
          labelColor: () => `white`,
        }}
      />
      </View>
    </View>
  );
}

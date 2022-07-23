import { StyleSheet, View, Text ,TouchableOpacity,Image} from "react-native";
import QuickSand from "../GeneralStyles/Quicksand";
import styles from "./ChartBtnStyle";


export default function ChartButton(props:any) {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
             source={props.source}
            style={styles.image}
          ></Image>
        <QuickSand color={"black"} flex={0} fontsize={22} text={props.title}></QuickSand>
    </TouchableOpacity>
  );
}

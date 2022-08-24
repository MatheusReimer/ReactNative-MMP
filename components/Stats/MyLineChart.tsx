import { LineChart } from "react-native-chart-kit";
import { Dimensions, ToastAndroid } from "react-native";
import React from "react";
import Toast from 'react-native-toast-message';
import {Svg, Text as TextSVG} from 'react-native-svg';

export default function MyLineChart(props:any) {

const [formatedValue,setFormatedValue] = React.useState([0,0,0,0,0,1])

const getMonthVolume = () =>{
  let formated :number[] = []
  props.arrOfVolume.forEach((element: number) => {
    let value = element/1000;
    formated.push(Math.round(value * 10) / 10)
  });
  setFormatedValue(formated)
}




React.useEffect(()=>{
  getMonthVolume();
  
},[props.arrOfVolume])

  

  return (
<LineChart
    data={{
      labels: props.currentLabel,
      datasets: [
        {
          data: formatedValue
        }
      ]
    }}
    width={Dimensions.get("window").width+Dimensions.get("window").width*0.15} // from react-native
    withHorizontalLabels={false}
    height={200}
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    withInnerLines={false}
    withOuterLines={false}
    withShadow={false}
   
    renderDotContent={({x, y, index}) => {
      return (
            <TextSVG
              key={index}
              x={x+15}
              y={y-5}
              fill="white"
              fontSize="12"
              fontWeight="normal"
              textAnchor="middle"
              >
              {formatedValue[index]+"k"}
            </TextSVG>
      );
    }}
    chartConfig={{
      backgroundColor: "#128B3B",
      backgroundGradientFrom: "#128B3B",
      backgroundGradientTo: "#128B3B",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 0.1) => `rgba(255,255,255, ${opacity})`,
      labelColor: (opacity = 0.1) => `rgba(255,255,255, ${opacity})`,
      propsForDots: {
        r: "5",
        strokeWidth: "1",
        stroke: "green", 
      }
    }}
    bezier
    style={{
      marginVertical: 50,

    }}
  />
  )}
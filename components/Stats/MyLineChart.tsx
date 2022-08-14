import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function MyLineChart() {
  return (
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
        
        width={Dimensions.get("window").width} // from react-native
        height={250}
        withInnerLines={false}
        
        yAxisSuffix=" Kg"
        withDots={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: "#128B3B",
          backgroundGradientTo: "#128B3B",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => `white`,
          labelColor: () => `white`,
        }}
      />
  )}
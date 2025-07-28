import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

const BillsInfo = () => {
  const [selecteditem, setselecteditem] = useState();
  const flatlistitems = [
    {
      text: 'Today',
      id: 0,
    },
    {
      text: 'Week',
      id: 1,
    },
    {
      text: 'Month',
      id: 2,
    },
  ];
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  });
  const handleButtonClick = selectedIndex => {
    // Update chart data based on the button click

    if (selectedIndex == 0) {
      const newChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99],
          },
        ],
      };
      setChartData(newChartData);
    } else if (selectedIndex == 1) {
      const newChartData = {
        labels: ['F', 'G', 'H', 'I', 'J'],
        datasets: [
          {
            data: [50, 30, 90, 70, 20],
          },
        ],
      };
      setChartData(newChartData);
    } else if (selectedIndex == 2) {
      const newChartData = {
        labels: ['K', 'L', 'M', 'N', 'O'],
        datasets: [
          {
            data: [90, 30, 45, 70, 68],
          },
        ],
      };
      setChartData(newChartData);
    }
  };

  return (
    <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#A4BE7B'}}>
      <ImageBackground
        source={require('../images/mapbackground.jpg')}
        style={StyleSheet.absoluteFillObject}
      />
      <View>
        <FlatList
          data={flatlistitems}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({index, item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleButtonClick(index) & setselecteditem(index);
                }}>
                <View
                  style={[
                    styles.button,
                    {opacity: selecteditem == item.id ? 0.7 : 1},
                  ]}>
                  <Text style={[styles.text, {color: '#fff'}]}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        {/* <BarChart
          data={chartData}

          width={Dimensions.get("window").width - 30} 
          height={400}
          fromZero
          yAxisLabel="Rs"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#1D267D",
            backgroundGradientFrom: "#7AA874",
            backgroundGradientTo: "#1D267D",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          BarChart
          style={{
            margin: 20,
            borderRadius: 10
          }}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    backgroundColor: '#0C134F',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
export default BillsInfo;

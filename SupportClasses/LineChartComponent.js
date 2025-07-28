import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Colours} from '../GenericStyles/Colours';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

const LineChartComponent = ({data, selectedThemeOption, ChartLineColour,yAxisLable,recordLength}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  console.log(
    'LineChartComponent ',
    'Selected Theme Option :: ' + selectedThemeOption,
    data,
    ChartLineColour,yAxisLable,recordLength
  );
  // const [selectedThemeOption,setSelectedThemeOption] = useState('Light');
  // const data = {
  //   labels: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   datasets: [
  //     {
  //       data: [60, 70, 85, 40, 60, 75],
  //     },
  //   ],
  // };
  return (
    <View>
      {(() => {
        if (selectedThemeOption == 'Light') {
          return (
            <LineChart
              data={data}             
              width={screenWidth + 1500}
              height={screenHeight - 500}
              yAxisLabel={yAxisLable}
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: '#25428e',
                backgroundGradientTo: '#314b95',
                backgroundGradientFromOpacity: 0.5,
                backgroundGradientToOpacity: 0,
                decimalPlaces: 2,
                strokeWidth: 2,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
                //color: (opacity = 255) => 'rgba(0, 0, 255, ${opacity})',
                color: (opacity = 0) => ChartLineColour, //#de9c6f
                labelColor: (opacity = 0.5) => '#909090',
                fillShadowGradientFrom: '#509f87',
                fillShadowGradientFromOpacity: 0.5,
                fillShadowGradientToOpacity: 0.5,
                fillShadowGradientTo: '#eceff4',
                propsForDots: {r: '8', strokeWidth: '1', stroke: '#07f7f7'},
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          );
        } else {
          return (
            <LineChart
              data={data}
              width={screenWidth + 1300}
              height={screenHeight - 500}
              yAxisLabel="V"
              yAxisInterval={1}
              // color: (opacity = 1) => '#25428f'
              chartConfig={{
                backgroundGradientFrom: '#01172f',
                backgroundGradientTo: '#01172f',
                // backgroundGradientFrom: '#ffffff',
                //  backgroundGradientFromOpacity: 0.5,
                // backgroundGradientTo: '#ffffff',
                // backgroundGradientToOpacity: 0,
                decimalPlaces: 2,
                strokeWidth: 2,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
                //color: (opacity = 255) => 'rgba(0, 0, 255, ${opacity})',
                color: (opacity = 0) => ChartLineColour, //#de9c6f
                labelColor: (opacity = 0) => '#909090',
                fillShadowGradientFrom: '#509f87',
                fillShadowGradientFromOpacity: 0.5,
                fillShadowGradientToOpacity: 0.5,
                fillShadowGradientTo: '#eceff4',
                propsForDots: {r: '8', strokeWidth: '1', stroke: '#07f7f7'},
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          );
        }

        //  return null;
      })()}
    </View>
  );
};

export default LineChartComponent;
/*
  style={ selectedTheme === 'Light'
                ? GenericGlobalStyle.ConsumptionGraphBlockLight
                : GenericGlobalStyle.ConsumptionGraphBlockDark}
*/

import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { G, Svg, Circle, Text as TextSvg } from 'react-native-svg';
import MyText from '../../ConsumerMobileSystemApp/SupportClasses/MyText';
const PieChartTest = () => {
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(340);
  const data13 = [
    {
      key: 1,
      value: 50,
      text: 'Tuesday',
      svg: { fill: '#6D79C5' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 2,
      value: 50,
      text: 'Monday',
      svg: { fill: "#E27D39" },
      arc: { cornerRadius: 5 },
    },
    {
      key: 3,
      value: 60,
      text: 'wednessday',
      svg: { fill: '#519F87' },
      arc: { cornerRadius: 5 },
    },   
    {
      key: 4,
      value: 35,
      text: 'Sunday',
      svg: { fill: '#668BBF' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 5,
      value: 50,
      text: 'Saturday',
      svg: { fill: '#D4972C' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 6,
      value: 35,
      text: 'Friday',
      svg: { fill: '#DA6C8C' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 7,
      value: 35,
      text: 'Thursday',
      svg: { fill: '#D46A6B' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 8,
      value: 35,
      text: 'Thursday',
      svg: { fill: '#D46A6B' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 9,
      value: 35,
      text: 'Thursday',
      svg: { fill: '#D46A6B' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 10,
      value: 70,
      text: 'Thursday',
      svg: { fill: '#D46A6B' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 11,
      value: 65,
      text: 'Thursday',
      svg: { fill: '#D46A6B' },
      arc: { cornerRadius: 10 },
    },
    {
      key: 12,
      value: 45,
      text: 'Thursday',
      svg: { fill: '#D46A6B' },
      arc: { cornerRadius: 10 },
    },
  ];
  const data = [50, 60, 40, 95, 50, 50, 80];
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7
    );

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));
    
  const Labels = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          
         // fill={'black'}
          //textAnchor={'middle'}
          //alignmentBaseline={'middle'}
          fontSize={20}
          stroke={'black'}
          strokeWidth={0.2}>
          {data.value}
        </Text>
      );
    });
  };
  const Labels1 = ({ slices, height, width }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <TextSvg
          key={index}
          x={pieCentroid[0]}
          y={labelCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={15}
        //stroke={'black'}
        // strokeWidth={0.2}
        >
          {data.value}
        </TextSvg>
      );
    });
  };

  return (
    <View>
      <PieChart
        style={{
          height: height,
          width: width,
          alignSelf: 'center',
          borderColor: '#000',
          arc: { cornerRadius: 5 },
        }}
        data={data13}
        outerRadius="100%"
        innerRadius="25%"
        startAngle
        endAngle="-90"
        animate={{duration:3000}}
        animationDuration={5000}
        //svg={{ stroke: 'rgb(134, 65, 244)' }}
      >
        <Labels1 />
      </PieChart>
      <View style={{
        marginTop: 120,
        // width: 160,
        // height: 160,
        //elevation: 2,
        borderRadius: 80,
        borderColor: "#fff",
        position: 'absolute',
        alignSelf: 'center',
      }}>
        <MyText />
      </View>




    </View>
  );
};

export default PieChartTest;
/*

*/
/*
  <Image
        style={{
          width: 130,
          height: 150,
          marginTop: 130,   
          marginRight:40,       
          position: 'absolute',
          alignSelf:"center"
        }}
        source={{
          uri: 'data:image/png;base64,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',
        }}>

      </Image>
*/
/*
 <Text
        style={{
          marginTop: 150,
          marginRight: 40,
          width: 100,
          height: 100,
          position: 'absolute',
          alignSelf: 'center',
        }}>
        HAI
      </Text>


       <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
      </Svg>

*/

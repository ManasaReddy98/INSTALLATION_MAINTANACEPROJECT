import React, {useState ,useEffect} from 'react';

export const getPieChartDataSteps = listData => {
  //console.log(' CIS PIE CHART STEPS FUNCTION' + JSON.stringify(listData));
  const[colorsData,setColorsData]= useState([]);
  const keys = listData.consumption;
  const values = listData.consumption;
  let colors ;
  console.log("Array Length ## " + listData.length);

  useEffect(() => {  
    colors = generateRandomColorsArray(listData.length)
    console.log(colors);
    setColorsData(colors);
  }, [listData.length>0])
  console.log("Array Length ## " + colorsData.length, colorsData , colorsData[0]);
  
  const texts = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
  const randomColor = () => {
    const color = ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7,);
    return color;
  }

  function generateRandomColorsArray(count) {
    const colorsArray = [];
    for (let i = 0; i < count; i++) {     
      colorsArray.push(randomColor());
    }
    return colorsArray;
  }
 
  // const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter']
  // const values = [15, 25, 35, 45, 55,30,40,50,60]
  // const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff','#d966ff', '#ecb3ff']
   //const texts = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter']

  // return values.map((key, index) => {
  //     return {
  //         key,
  //         value: values[index],
  //         text: texts[index],
  //         svg: { fill: colors[index], stroke: colors[index - 1], strokeWidth: 2 },
  //         arc: { cornerRadius:10},
  //     }
  // })
  return listData.map((item, index) => {
    return {
      item,
      value: item.consumption,
      text: texts[0],//item.sts,
      svg: {fill: colorsData[index]},
      arc: {cornerRadius: 10},
    };
  });
};

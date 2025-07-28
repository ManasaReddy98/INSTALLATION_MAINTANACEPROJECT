import React, {useState, useEffect, useRef} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Login1 from './Login1';
import Login2 from './Login2';
import Round4 from './Round4';
import Login3 from './Login3';

var screenWidth = Dimensions.get('window').width;
import {HeaderStyleInterpolators} from '@react-navigation/stack';
import {FlatList} from 'react-native-gesture-handler';
import tick from '../images/tick.png';
import {GlobalStyles} from '../appstyles/GlobalStyles';

export default function AssetInstallationProgress({navigation, route}) {
  const {coloring, Language} = route.params;
  const [color, setColor] = useState(coloring);
  
  const sopObj=  {
      SopId: '1234',
      Name: 'TMU Installation',
      InstallationId: 'TMU_I-23455678',
      BRNo: '1',
      Category: 'Installation',
      SubCategory: 'Load',
      Type: 'Manual',
      CreatedBy: 'SE',
      Modifiedby: 'SE',
      Steps: [
        {
          StepID: 1,
          StepName: 'TMU Installation Step - 1',
          Activities: [
            {
              ActivityID: 1,
              Activity: 'Location Finding',
            },
            {
              ActivityID: 2,
              Activity: 'Recieve Exact location from the department',
            },
            {
              ActivityID: 3,
              Activity: 'for where TMU has to be installed',
            },
            {
              ActivityID: 4,
              Activity: 'Check the TMU functionalities before transport',
            },
          ],
        },
        {
          StepID: 2,
          StepName: 'TMU Installation Step - 2',
          Activities: [
            {
              ActivityID: 5,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 6,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
        {
          StepID: 3,
          StepName: 'TMU Installation Step - 3',
          Activities: [
            {
              ActivityID: 7,
              Activity: 'Transporatation & Precheck',
            },
            {
              ActivityID: 8,
              Activity: 'Find & Reach the production company',
            },
          ],
        },
      ],
    };
  
 // const dataArray = Object.keys(sopObj).flatMap(key => sopObj[key]);

  const [listdata, setListdata] = useState([
    {
      inde: 0,
      id: '01',
    },
    {
      inde: 1,
      id: '02',
    },
    {
      inde: 2,
      id: '03',
    },
    {
      inde: 3,
      id: '04',
    },
  ]);

  const [boolean1, setBoolean1] = useState(true);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);
  const [boolean4, setBoolean4] = useState(false);
  const [images, setImages] = useState(true);
  const [images1, setImages1] = useState(true);
  const [images2, setImages2] = useState(true);
  const [height, setHeight] = useState(40);
  const [width, setWidth] = useState(40);
  const [index, setIndex] = useState(0);

  const [totalIntervals, setTotalIntervals] = React.useState(0);
  const scrollRef = useRef();

  const changing = () => {
    if (index == listdata.length - 1) {
      return;
    } else {
      scrollRef.current.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    }
    [index];
  };

  const handlechange = index => {
    const images = () => {
      return (
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 40, width: 40, alignSelf: 'center'}}
            source={tick}
          />
        </View>
      );
    };
    const newUsers = [...listdata];

    newUsers[index].id = images();

    setListdata(newUsers);
  };
  {
    /* <AntDesign name="checkcircle" size={40} color="green" />*/
  }

  return (
    <View style={styles.MainContainer}>

        {/* <FlatList
            data={sopObj.Steps}
            keyExtractor={(item) => item.StepID.toString()}
            renderItem={({ item: step }) => (
            <View>
                <Text>{step.StepID}</Text>
                <Text>{step.StepName}</Text>
                <FlatList
                data={step.Activities}
                keyExtractor={(activity) => activity.ActivityID.toString()}
                renderItem={({ item: activity }) => (
                    <Text>{activity.Activity}</Text>
                )}
                />
            </View>
            )}
        /> */}
     
      <FlatList
        style={{
          backgroundColor: 'white',
          height: '20%',
          elevation: 5,
          borderBottomLeftRadius: 40,
          flexDirection: 'row',
          borderBottomRightRadius: 40,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        //data={sopObj.Steps}
        data={listdata}
        renderItem={({item: step, index: findex}) => {
          return (
            <View
              key={findex}
              style={{
                margin: 25,
                height: findex == index ? 80 : 40,
                width: findex == index ? 80 : 40,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: coloring,
                borderRadius: 40,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                {/* {step.StepID} */}
                {step.id}
              </Text>
            </View>
          );
        }}
      />


      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}>
        <View style={styles.ScrollContainer}>
          {/* <Login1 color={color} Language={Language} /> */}
          <FlatList
            data={sopObj.Steps}
            keyExtractor={(item) => item.StepID.toString()}
            renderItem={({ item: step }) => (
            <View> 
                <Text style={{color:"#000000",size:20,marginLeft:10,marginTop:20,marginBottom:20,fontWeight:'700'}}>{step.StepName}</Text>              
                <FlatList
                data={step.Activities}
                keyExtractor={(activity) => activity.ActivityID.toString()}
                renderItem={({ item: activity }) => (
                    <Text style={{color:coloring,size:20,marginLeft:10,marginTop:20,marginBottom:20,fontWeight:'700'}}>{activity.Activity}</Text>
                )}
                />
            </View>
            )}>                
            </FlatList>

          <TouchableOpacity
            style={{}}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth}) &
                setIndex(index + 1) &
                setBoolean1(false) &
                handlechange(index);
            }}>
            <Text style={[GlobalStyles.button, {backgroundColor: coloring}]}>
              {Language.InstallationButtonText}
            </Text>
          </TouchableOpacity>
        </View>
       
       
        <View style={styles.ScrollContainer1}>
          <Login2 color={color} Language={Language} />
          <TouchableOpacity
            style={{}}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 2}) &
                setIndex(index + 1) &
                handlechange(index);
            }}>
            <Text style={[GlobalStyles.button, {backgroundColor: coloring}]}>
              {Language.InstallationButtonText}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ScrollContainer1}>
          <Login3 color={color} Language={Language} />

          <TouchableOpacity
            style={{}}
            onPress={() => {
              scrollRef.current.scrollTo({x: screenWidth * 3}) &
                setIndex(index + 1) &
                handlechange(index);
            }}>
            <Text style={[GlobalStyles.button, {backgroundColor: coloring}]}>
              {Language.InstallationButtonText}
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.ScrollContainer1}>
          <Round4 Language={Language} />

          <TouchableOpacity
            style={
              {
                // borderRadius: 40,
                // alignSelf: 'center', marginBottom: 5
              }
            }
            onPress={() => {
              navigation.navigate('Signature', {
                coloring: coloring,
                Language: Language,
              }) &
                handlechange(index) &
                setIndex(index + 1);
            }}>
            <Text style={[GlobalStyles.button, {backgroundColor: coloring}]}>
              {Language.InstallationButtonText}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  scrollViewContainer: {
    justifyContent: 'space-around',
    backgroundColor: 'blue',
  },
  ScrollContainer: {
    flexGrow: 1,
    marginTop: 0,
    //marginHorizontal:screenWidth
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollContainer1: {
    flexGrow: 1,
    marginTop: 0,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollTextContainer: {
    height: 300,
    fontSize: 20,
    padding: 15,
    color: '#000',
    textAlign: 'center',
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: 'green',
  },
  ButtonContainer: {
    padding: 30,
  },
});

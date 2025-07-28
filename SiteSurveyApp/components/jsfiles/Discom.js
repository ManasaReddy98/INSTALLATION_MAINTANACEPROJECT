import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import AssettypeDropdown1 from './AssettypeDropdown1';


const { width } = Dimensions.get('window');


const Discom = ({ route, navigation }) => {
    const { LanguageOpt } = route.params;
    let SbStnArray = [];
    let fednumArray = [];
    const Zones = [LanguageOpt('Ariyalur'), LanguageOpt('Chengalpattu'), LanguageOpt('Chennai'), LanguageOpt('Coimbatore'), LanguageOpt('Madurai')];
    const [zone, setzone] = useState('');
    const [subStnData, setSubStnData] = useState([]);
    const [fednumData, setfednumData] = useState();
    /*
   {"employees":[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
]}  
    */
    const [substantionDetailed, setSubstationDetailed] = useState([
        {
            "id": 0,
            "name": "Admin",
            "age": 36,
            "rights": [
                "a",
                "b",
                "c"
            ],

            "feedernum": [
                ["a", "b", "c"],
                ["m", "n", "o"],
                ["x", "y", "z"]
            ],

        },
        {
            "id": 1,
            "name": "Admin",
            "age": 36,
            "rights": [
                "d",
                "e",
                "f"
            ],
            "feedernum": [
                ["a", "b", "c"],
                ["m", "n", "o"],
                ["x", "y", "z"]

            ],
        }
    ],
    );


    const [Substation, setSubstation] = useState([
        {
            "id": 0,
            "name": "Admin",      // substn.rights.index ===substn.feedernumer.index
            "age": 36,
            "rights": [{
                "a": [
                    { "feedernumber": ['fed01', 'fed02', 'fed03'] }
                ]
            },

            {
                "b": [
                    { "feedernumber": ['fed04', 'fed05', 'fed06'] }
                ]
            },
            {
                "c": [
                    { "feedernumber": ['fed07', 'fed08', 'fed09'] }
                ]
            }
            ],
        },
        {
            "id": 1,
            "name": "Admin",
            "age": 36,
            "rights": ["e", "f", "g", "h", "i"],//0,1,2,3,4
            "feedernum": ['fed05', 'fed06', 'fed07', 'fed08', 'fed0']
        },
        {
            "id": 2,
            "name": "Admin",
            "age": 36,
            "rights": ["i", "j", "k"],//0,1,2
            "feedernum": ['fed09', 'fed10', 'fed11']
        },
        {
            "id": 3,
            "name": "Admin",
            "age": 36,
            "rights": ["l", "m", "n"],//0,1,2
            "feedernum": ['fed13', 'fed14', 'fed15']
        }
    ]);


    const handleOnchange = (text, index) => {

        //setzone(text);


        {
            substantionDetailed.map((sub) => {
                if (sub.id == index) {
                    console.log("SUB STN VERIFIED")
                    console.log("SUB STN VERIFIED" + sub.rights.length)
                    for (let i = 0; i < sub.rights.length; i++) {
                        SbStnArray.push(sub.rights[i])

                    }



                }


            })
        }
        console.log("SUB STN ARRAY LEN: " + SbStnArray.length);
        console.log("SUB STN ARRAY LEN: " + JSON.stringify(SbStnArray));

        setSubStnData(SbStnArray);


    };

    const handleOnchange1 = (text, indexData) => {
        let newArray = [];
        let ArraySample = [];
        //setzone(text);
        console.log("index data outside is ..." + indexData)
        {
            // subStnData.map((sub,index) => {

            substantionDetailed.map((feed, index) => {

                // console.log("index data inside is ......." + JSON.stringify(feed.feedernum[0]));
                // console.log("index data inside is ......." + JSON.stringify(feed.feedernum[1]));
                // console.log("index data inside is ......." + JSON.stringify(feed.feedernum[2]));
                // console.log("index data inside is ......."+ indexData)
                // console.log('index is +++++'+ JSON.stringify(feed.feedernum[index]))
                console.log('index is for sub  #### ' + JSON.stringify(feed.feedernum[indexData]));
                console.log('index is for feeder ##### ' + JSON.stringify(feed.feedernum[index]));



                if (index == indexData) {
                    console.log('Dataaaa siissss:::' + JSON.stringify(feed.feedernum[index]));
                    newArray.push(feed.feedernum[index]);

                    // for(let i=0 ;i<feed.length;i++){
                    //     fednumArray.push(feed[i])

                    // }

                } else {
                    //  console.log("FEEDER NOT  VERIFIED" +JSON.stringify(feed.index ,index));
                }
                console.log("NEW ARRAY LEN  VERIFIED  " + JSON.stringify(newArray.length));
                console.log("NEW ARRAY LEN  VERIFIED  " + JSON.stringify(newArray));

                if (newArray.length > 0) {
                    let data = newArray.toString().split(',');
                    //     let data1 = data.replace(']','');
                    //    // let data2 = data1.replace()
                    console.log("NEW ARRAY LEN  VERIFIED  " + JSON.stringify(data[0]));
                    console.log("NEW ARRAY LEN  VERIFIED  " + JSON.stringify(data[1]));
                    console.log("NEW ARRAY LEN  VERIFIED  " + JSON.stringify(data[2]));
                    ArraySample.push(data[0], data[1], data[2]);
                }



            })

            // })

        }


        setfednumData(ArraySample);
    };






    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 18 }}>{LanguageOpt('Select_Zone')}</Text>
                    <AssettypeDropdown1 LanguageOpt={LanguageOpt} Data={Zones} onPress={(text, index) => handleOnchange(text, index)} />
                </View>

                <View style={{}}>
                    <Text style={{ fontSize: 17, color: '#181952', paddingLeft: 5, paddingTop: 18 }}>{LanguageOpt('Select_Substation')}</Text>
                    <AssettypeDropdown1 Data={subStnData} onPress={(text, index) => handleOnchange1(text, index)} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 100 }}>
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: 17, color: '#181952' }}>{LanguageOpt('Select_Feeder_Name')}</Text>
                    <TextInput style={{
                        width: 200, height: 55, backgroundColor: '#FFF', borderRadius: 8,
                        elevation: 3, marginTop: 10, color: '#476c3f'
                    }} > </TextInput>
                </View>
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 17, color: '#181952' }}>{LanguageOpt('Select_Feeder_Number')}</Text>
                    <AssettypeDropdown1 Data={fednumData} />
                </View>


            </View>
        </View>
    )
}
export default Discom;
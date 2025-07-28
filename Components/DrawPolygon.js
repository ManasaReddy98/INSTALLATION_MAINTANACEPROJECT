import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    InteractionManager,Image
  } from 'react-native';
  import React, {useEffect, useRef, useState} from 'react';
  import MapView, {Marker, Polygon} from 'react-native-maps';
  import {useNavigation} from '@react-navigation/native';
  import {COLOR_PLOT_BORDER} from '../../utils/colors';
  
  let polygonsCoordinates = [
    [
      {latitude: 42.9348443, longitude: -72.287181},
      {latitude: 42.9345929, longitude: -72.2832328},
      {latitude: 42.9335415, longitude: -72.2834162},
      {latitude: 42.9335572, longitude: -72.2852186},
      {latitude: 42.9336671, longitude: -72.2869996},
      {latitude: 42.934704, longitude: -72.2871498},
    ],
    [
      {latitude: 42.9345437, longitude: -72.2811199},
      {latitude: 42.9347204, longitude: -72.2795911},
      {latitude: 42.9343119, longitude: -72.2792585},
      {latitude: 42.9341077, longitude: -72.2810394},
      {latitude: 42.9345358, longitude: -72.2811146},
    ],
    [
      {latitude: 42.9329962, longitude: -72.2825093},
      {latitude: 42.9333065, longitude: -72.2804494},
      {latitude: 42.9322775, longitude: -72.2801382},
      {latitude: 42.931979, longitude: -72.2824235},
      {latitude: 42.9329726, longitude: -72.2824932},
    ],
  ];
  
  export default function DrawPolygon({gatewayMeters,navigation, color,item, Language,selectedAssetDetails,assetTypeName }) {
    // const {gatewayMeters,coloring,color, Language,item} = route.params;
    console.log("GATEWAY PARAMS LIST ","DRAW POLYGON ####################### "+ gatewayMeters.length );

    const mapRef = useRef(null);
    const [region, setRegion] = useState({});
    const [polygonCenters, setPolygonCenters] = useState([]);
  
    useEffect(() => {
      InteractionManager.runAfterInteractions(() => {
        goToLocation();
        getCenterOfAllPolygon();
      });
    }, []);
  
    const getCenterOfAllPolygon = () => {
      let centers = [];
      polygonsCoordinates.map((v, i) => {
        let c = getCenterPolygon(v);
        centers.push(c);
      });
      setPolygonCenters(centers);
      console.log('centers', centers);
    };
  
    const keeneRegion = {
      latitude: 42.9329962,
      longitude: -72.2825093,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
    useEffect(() => {
        mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
    }, [polygonsCoordinates])
    
    const goToLocation = () => {
      //complete this animation in 5 seconds
      mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
    };
  
    let getCenterPolygon = coordinates => {
      let x = coordinates.map(c => c.latitude);
      let y = coordinates.map(c => c.longitude);
  
      let minX = Math.min.apply(null, x);
      let maxX = Math.max.apply(null, x);
  
      let minY = Math.min.apply(null, y);
      let maxY = Math.max.apply(null, y);
  
      console.log('adsasdad', minX, maxX, minY, maxY);
  
      return {
        latitude: (minX + maxX) / 2,
        longitude: (minY + maxY) / 2,
      };
    };
  
    const onPressPolygon = coordinates => {
      let newCoordinates = getCenterPolygon(coordinates);
      const goToRegion = {
        ...newCoordinates,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      mapRef.current.animateToRegion(goToRegion, 1 * 1000);
    };
    return (
      <View>
        <Text style={{marginTop:400 , fontSize:30 ,color:{color}}} ></Text>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          ref={mapRef}
          style={styles(color).mapStyle}
          initialRegion={{
            latitude: 0, // This the position data
            longitude: 0, // This is also position data
            latitudeDelta: 200,
            longitudeDelta: 1,
          }}
          loadingEnabled={true}
          onRegionChangeComplete={r => setRegion(r)}>
          {polygonsCoordinates.map((polygon, i) => (
            <View key={i}>  
                          
              <Polygon
                coordinates={polygon}
                strokeColor={color} // fallback for when `strokeColors` is not supported by the map-provider
                fillColor={i === 0 ? 'blue' : i === 2 ? 'green' : 'yellow'}
                strokeWidth={0.3}
                tappable
                geodesic
                onPress={() => onPressPolygon(polygon)}
              />              

            <Marker
                anchor={{x: 0.5, y: 0.5}}
                centerOffset={{x: 0.5, y: 0.5}}
                zIndex={10}
                coordinate={polygonCenters[i]}>
                <Image style={{height: 30, width: 30}} source={require('../images/map.png')}/>
                
                <Text note style={{color: '#000', fontSize: 15}}>
                  1001
                </Text>
              </Marker>
             
            </View>
          ))}

          {/* {polygonsCoordinates.map((coordinate, index) => (
                <Marker
                    key={index}
                    coordinate={coordinate}
                    title={`Marker ${index + 1}`}
                    description={`Lat: ${coordinate.latitude}, Lng: ${coordinate.longitude}`}                    
                >
                <Image style={{height: 30, width: 30}} source={require('../images/map.png')}/>
                <Text note style={{color: '#000', fontSize: 15}}>
                    {`Marker ${index + 1}`} {`Lat: ${coordinate.latitude}, Lng: ${coordinate.longitude}`}
                </Text>
                </Marker>
                ))} */}
        </MapView>

        <TouchableOpacity style={{height:40,width:150,backgroundColor:"#000",borderRadius:15,alignSelf:'center'}}
            onPress={() => goToLocation()} >
            <Text style={{color: '#ffffff', fontSize: 16,paddingLeft:15,paddingTop:5}}>
                  Current Location
            </Text>
            {/* <Image style={{height: 30, width: 30}} source={require('../images/map.png')}></Image> */}
      </TouchableOpacity>       
        <Text style={{fontSize:10,paddingLeft:25,paddingBottom:5}}>Current latitude{region.latitude}</Text>
        <Text style={{fontSize:10,paddingLeft:25,paddingBottom:5}}>Current longitude{region.longitude}</Text>
      </View>
    );
  }

  const styles = coloring =>
    StyleSheet.create({
      MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      containerCamera: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      mapStyle: {
        position: 'absolute',
        top: 5,
        left: 15,
        right: 15,
        bottom: 5,
      },
      container: {
        flex: 2,
        backgroundColor: '#ffffff', //'#464646',//'#323232',//'#243034',
        /*backgroundImage: 'url('+bg+')',*/
        alignItems: 'center',
        justifyContent: 'center',
        //margin: 10,
      },
      mapcontainer: {
        flex: 1,
        /* ...StyleSheet.absoluteFillObject,
              flex: 1, //the container will fill the whole screen.
              justifyContent: "flex-end",
              alignItems: "center",*/
      },
      mapmarker: {
        ...StyleSheet.absoluteFillObject,
      },
  
      inputView: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '80%',
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
      },
  
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
      },
      tinyLogo: {
        //margin: '30',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        marginBottom: 10,
      },
      headtext: {
        alignSelf: 'center',
        justifyContent: 'center',
        //fontSize: '100',
        marginBottom: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
      },
  
      loginBtn: {
        width: '50%',
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        color: '#fff',
        backgroundColor: '#61dafb',
      },
  
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      separator: {
        margin: 20,
      },
  
      cardImage: {
        height: 60,
        width: 60,
        alignSelf: 'center',
      },
      card: {
        shadowColor: '#474747',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        //backgroundColor: "#e2e2e2",
        //flexBasis: '42%',
        //borderRadius: 60,
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
      },
  
      touchable: {
        width: 140,
        borderRadius: 40,
        backgroundColor: coloring,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
  
        alignItems: 'center',
        height: '10%',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    });
//   const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       flex: 1,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//     text: {
//       fontSize: 20,
//       backgroundColor: 'lightblue',
//     },
//   });
  
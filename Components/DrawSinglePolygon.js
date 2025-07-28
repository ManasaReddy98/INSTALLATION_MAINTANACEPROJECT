import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  InteractionManager,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {Polygon, Marker} from 'react-native-maps';
export default function DrawSinglePolygon({
  gatewayMetersByDCUID,
  specificLocation,
  navigation,
  color,
  item,
  Language,
  selectedAssetDetails,
  assetTypeName,
}) {
  console.log(
    'GATEWAY PARAMS LIST ',
    'DRAW SINGLE POLYGON ####################### ' +
      gatewayMetersByDCUID.length,
  );

  console.log(
    'GATEWAY PARAMS LIST ',
    'DRAW SINGLE POLYGON ####################### ' +
      JSON.stringify(gatewayMetersByDCUID),
  );

  const mapRef = useRef(null);
  const [region, setRegion] = useState({});
  // const [polygonCenters, setPolygonCenters] = useState([]);
  const [polygonCoordinates, setPolygonCoordinates] = useState([
    {latitude: '', longitude: ''},
  ]);

  useEffect(() => {
    // Create a new array with the new coordinates
    const updatedCoordinates = gatewayMetersByDCUID.map(meterData => ({
      latitude: parseFloat(meterData.latitude),
      longitude: parseFloat(meterData.longitude),
    }));

    // Update the state with the new array of coordinates
    setPolygonCoordinates(updatedCoordinates);
  }, [gatewayMetersByDCUID]);
  console.log(
    'METER DATA cordinates',
    'MeterData Cordinates ##############' + polygonCoordinates.length,
    JSON.stringify(polygonCoordinates),
  );

  //   const polygonCoordinates = [
  //     { latitude: 37.8025259, longitude: -122.4351431 },
  //     { latitude: 37.7896386, longitude: -122.421646 },
  //     { latitude: 37.7665248, longitude: -122.4161628 },
  //     { latitude: 37.7734153, longitude: -122.4577787 },
  //     { latitude: 37.7948605, longitude: -122.4596065 }
  //   ];
  //   const specificLocation = {

  //     latitude:  37.787794,
  //     longitude: -122.447560,
  //     latitudeDelta: 0.02,
  //     longitudeDelta: 0.02,
  //   };
  const keeneRegion = {
    latitude: 17.394822,
    longitude: 78.424593,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const goToLocation = () => {
    //complete this animation in 5 seconds
    mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
    //mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
  };
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      goToLocation();
    });
  }, []);

  useEffect(() => {
    mapRef.current.animateToRegion(keeneRegion, 1 * 1000);
  }, [polygonCoordinates]);

  const isValidCoordinate = coordinate => {
    const {latitude, longitude} = coordinate;
    return (
      typeof latitude === 'number' &&
      typeof longitude === 'number' &&
      !isNaN(latitude) &&
      !isNaN(longitude) &&
      latitude >= -90 &&
      latitude <= 90 &&
      longitude >= -180 &&
      longitude <= 180
    );
 
  };

  const validCoordinates = polygonCoordinates.filter(isValidCoordinate);
  useEffect(() => {
    if (mapRef.current && validCoordinates.length > 0) {
      mapRef.current.fitToCoordinates(validCoordinates, {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        animated: true,
      });
    }
  }, [validCoordinates]);
  return (
    <View>
      <Text
        style={{
          marginTop: 400,
          paddingLeft: 30,
          fontSize: 30,
          color: {color},
        }}></Text>
      <MapView
        style={styles(color).mapStyle}
        ref={mapRef}
        initialRegion={{
          latitude: 17.394822,
          longitude: 78.424593,
          latitudeDelta: 6.795218101812615,
          longitudeDelta: 79.9008869173333,
        }}>
        {(() => {
          if (validCoordinates.length > 0) {
            return (
              <Polygon
                coordinates={validCoordinates}
                fillColor="rgba(0, 200, 0, 0.5)"
                strokeColor="rgba(0,0,0,0.5)"
                strokeWidth={2}
              />
            );
          } else {
            return( <Text> No Data Available</Text>);
          }
        })()}

        {validCoordinates.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={coordinate}
            title={`Point ${index + 1}`}
            description={`Latitude: ${coordinate.latitude}, Longitude: ${coordinate.longitude}`}
          />
        ))}
        <Marker
          coordinate={specificLocation}
          title={item.assetId}
          pinColor="blue"></Marker>
      </MapView>
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

      alignItems: 'center',
      justifyContent: 'center',
      //margin: 10,
    },
    mapcontainer: {
      flex: 1,
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

/*
      {polygonCoordinates.map((coordinate, index) => {
            if (typeof coordinate.latitude === 'number' && 
                coordinate.latitude <= 90 && 
                coordinate.latitude >= -90) {
              return (
                <Marker
                  key={index}
                  coordinate={coordinate}
                  title={`Marker ${index + 1}`}
                  description={`Lat: ${coordinate.latitude}, Lng: ${coordinate.longitude}`}
                />
              );
            } else {
              return null; // You can return null or handle the "else" case differently
            }

            {(() => {
              if (typeof specificLocation.latitude==='number' && specificLocation.latitude<=90 && specificLocation.latitude>= -90){
                  return (
                    <Marker
                      coordinate={specificLocation}
                      title={item.assetId}
                      pinColor="blue">                        
                    </Marker>
                  )
              }            
            
            })()}
          })}

    */

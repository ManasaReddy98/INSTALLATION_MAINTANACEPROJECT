import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {BackgroundCarousel} from './BackgroundCarousel';

const images = [
 {image:require('../images/ic_dt.jpg')},
 {image:require('../images/ic_meter.jpg')},
 {image:require('../images/ic_rmu.png')},
 {image:require('../images/ic_lt_line.jpg')},
 {image:require('../images/ic_section.jpg')}
];

export default class Carousel extends Component {
  render() {
    return (
      <View style={styles.container}>
       <BackgroundCarousel images={images}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "#F5FCFF"
  }
  
});

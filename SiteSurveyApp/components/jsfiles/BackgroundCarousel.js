import React from 'react';
import { Text,ScrollView, View,StyleSheet,Dimensions,Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class BackgroundCarousel extends React.Component{
  scrollRef = React.createRef();
  constructor(props){
    super(props);
    this.state={
      selectedIndex:0
    }
  }

  componentDidMount=()=>{
    setInterval(()=>{
      this.setState(
        prev=>({selectedIndex:prev.selectedIndex===this.props.images.length-1?0:prev.selectedIndex+1}),
        ()=>{
          this.scrollRef.current.scrollTo({
            animated:true,
            y:0,
            x:DEVICE_WIDTH * this.state.selectedIndex
          });
        }
      );
    },3000);
  };

  setSelectedIndex = event =>{
      const viewSize = event.nativeEvent.layoutMeasurement.width;
      const contentOffset = event.nativeEvent.contentOffset.x;

      const selectedIndex = Math.floor(contentOffset/viewSize);
      this.setState({selectedIndex});

  };

  render(){
    const {images} = this.props;
    const {selectedIndex} = this.state;
    return(

      <View style={{height:DEVICE_HEIGHT/4,width:'100%'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled onMomentumScrollEnd={this.setSelectedIndex}
      ref={this.scrollRef}>
      
        {images.map((images,index)=>(
           <Image
             key={index}
             source={images.image}
             style={styles.backgroundImage}
             />
             

        ))
        }
      
      </ScrollView>
       <View style={styles.circleDiv}>
       {images.map((image,i)=>(
         <View
          key={i}
          style={[styles.whiteCircle,{backgroundColor:i===selectedIndex?'#98e9a2':'white'}]}
         />
       ))}
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    height:DEVICE_HEIGHT/5,
    width:DEVICE_WIDTH-20,
    borderRadius:10,margin:10
  },
  circleDiv:{
   // position:'absolute',
    //bottom:20,
    width:'100%',
    height:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  whiteCircle:{
    width:10,
    height:10,
    borderRadius:5,
    margin:5,
    backgroundColor:'white'
  }
});

export {BackgroundCarousel};
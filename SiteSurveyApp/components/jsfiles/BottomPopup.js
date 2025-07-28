import React, { useState } from 'react';
import {View,Text,Modal,StyleSheet,TouchableWithoutFeedback} from 'react-native';

/*const BottomPopup = ({click})=>{
    const [show,setshow] = useState(false);

    const Show =()=>{
        setshow(true);
    }

    const Close =()=>{
        setshow(false);
    } 
    return(
         <Modal animationType='fade' transparent={true}
         visible={show} onRequestClose={Close}>
            <View style={{flex:1,backgroundColor:'000000AA'}}>
               
            </View>


         </Modal>
            
         
    )
}
export default BottomPopup;*/

export class BottomPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }

    show=()=>{
        this.setState({show:true})
    }

    close=()=>{
        this.setState({show:false})
    }
 render(){
    let show = this.state;
    return(
        <Modal animationType={'fade'} transparent={true}
        visible={show} onRequestClose={this.close}>
           <View style={{flex:1,backgroundColor:'green'}}>
              
           </View>


        </Modal>

    )
 }   
}
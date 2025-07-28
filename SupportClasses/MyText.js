import React from 'react'
import { Text, View } from 'react-native';
const MyText = (props) => {
    const {source, children, style} = props
    console.log("Array Length ## " + props.sum);
    let floatingSum=props.sum;
    floatingSum =  parseFloat(floatingSum.toFixed(2));
    return (
        <View style={{ flexDirection: "column", alignItems: 'center' }}>
            <Text
                style={{
                    marginTop: 50,
                    borderColor: "#fff",
                    //position: 'absolute',
                    color: "#25428f",
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: "bold"
                }}> {floatingSum}

            </Text>
            <Text
                style={{
                    //marginTop: 1,
                    borderColor: "#fff",
                    color: "#25428f",
                    // position: 'absolute',
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: "bold"
                }}> Units

            </Text>
        </View>
    )
}

export default MyText


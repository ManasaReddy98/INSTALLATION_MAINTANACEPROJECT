import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const height = DEVICE_WIDTH * 0.8;

class BackgroundCarousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState(
                prev => ({
                    selectedIndex:
                        prev.selectedIndex === this.props.images.length - 1
                            ? 0
                            : prev.selectedIndex + 1
                }),                                                              
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: DEVICE_WIDTH * this.state.selectedIndex
                    });
                })
        }, 3000)
    }
    setSelectedIndex = event => {
        //width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        //get current position of yhe scrollview
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.ceil(contentOffset / viewSize)
        this.setState({ selectedIndex })
    }
    render() {
        const { images ,Language} = this.props;
        const { selectedIndex } = this.state;
        return (
            <View style={{ height: 100, width: DEVICE_WIDTH }}>
                <ScrollView horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                >
                    {images.map((image, index) => (
                        <View key={index} style={{ width: DEVICE_WIDTH, marginTop: 5 }}>
                            <Text style={{ color: '#fff', textAlign:'center',marginHorizontal:'3%' }}>{image.name}</Text>                            
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, i) => (
                        <View
                            key={i}
                            style={[
                                styles.whiteCircle,
                                { backgroundColor: i === selectedIndex ? "#94eaa9" : "white" },
                            ]}
                        />
                    ))}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        //   backgroundColor: 'red',
        height: '50%',
        width: DEVICE_WIDTH,
        resizeMode: 'contain'

    },
    circleDiv: {
        position: 'absolute',
        top: 90,
        height: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: '#fff',
    },
});
export default BackgroundCarousel;







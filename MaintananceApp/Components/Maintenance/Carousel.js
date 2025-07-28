import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const images = [
    {
        name: 'one',
        name1: 'two',
        name2: 'three'
    },
    {
        name: 'four',
        name1: 'five',
        name2: 'six'
    },
    {
        name: 'seven',
        name1: 'eight',
        name2: 'nine'
    },
    {
        name: 'ten',
        name1: 'eleven',
        name2: 'thirteen'
    },
    {
        name: 'fourteen',
        name1: 'fifteen',
        name2: 'sixteen'
    },
];

const CarouselFun = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollRef = useRef();
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSelectedIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                animated: true,
                y: 0,
                x: DEVICE_WIDTH * selectedIndex,
            });
        }
    }, [selectedIndex]);
   

    const handleScroll = event => {
        console.log(event.nativeEvent.layoutMeasurement.width,event.nativeEvent.contentOffset.x)
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const index = Math.ceil(contentOffset / viewSize);
        setSelectedIndex(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={handleScroll}
                    ref={scrollRef}
                >
                    {images.map((image, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Text style={styles.text}>{image.name}</Text>
                            <Text style={styles.text}>{image.name1}</Text>
                            <Text style={styles.text}>{image.name2}</Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, i) => (
                        <View
                            key={i}
                            style={[
                                styles.whiteCircle,
                                { backgroundColor: i === selectedIndex ? "orange" : "white" },
                            ]}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink', // Optional: background color for the entire page
    },
    carouselContainer: {
        height: 200,
        width: DEVICE_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: DEVICE_WIDTH,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'green',
        alignSelf: 'center',
    },
    circleDiv: {
        position: 'absolute',
        bottom: 10,
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

export default CarouselFun;




// In the context of scrolling and animations in React Native (and in many UI frameworks), x, y, and animated refer to different aspects of movement and animations:

// x:

// This typically refers to horizontal scrolling or movement.
// For example, in a horizontal ScrollView, setting the x position will scroll the view left or right.
// In your carousel, x: DEVICE_WIDTH * selectedIndex moves the view horizontally to the next "page" (image).
// y:

// This refers to vertical scrolling or movement.
// Although y is not used as often in horizontal carousels, it would move the view up or down in a vertical ScrollView.
// If you set y in a horizontal carousel, it usually wouldn’t have any effect unless you were trying to scroll vertically.
// animated:

// This indicates whether the scrolling or movement should be smooth and animated.
// If animated: true, the transition between positions (either x or y) will be smooth and gradual, creating an animation effect.
// If animated: false, the scroll or movement will happen instantly without any animation.
// Summary:
// x: Horizontal movement (used in carousels for page transitions).
// y: Vertical movement (less common in horizontal carousels, used in vertical scrolling).
// animated: Controls whether the movement is smooth (animated) or immediate (without animation).
// In your carousel code:

// x is used to move between images horizontally.
// animated: true ensures that the movement between images is smooth.
// If you were creating a vertical carousel or scrollable content, you would adjust the y value instead.








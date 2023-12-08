import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';

const Slider = () => {
    const images = [
        require('../images/image1.jpeg'),
        require('../images/image2.jpeg'),
        require('../images/image3.jpeg'),
        require('../images/image4.jpeg'),
        require('../images/image5.jpeg'),
    ];
    return (
        <SafeAreaView>
            <SliderBox images={images}
                dotColor="white"
                inactiveDotColor="black"
                imageLoadingColor="red"
                circleLoop={true}
                paginationBoxVerticalPadding={5}
                onCurrentImagePressed={(index) => alert("Image No :" + (index + 1))}
                //autoplay={true}
                autoplayInterval={3000}
                dotStyle={{
                    height: 12,
                    width: 12,
                    borderRadius: 15
                }}
            />
        </SafeAreaView>
    )
}

export default Slider

const styles = StyleSheet.create({})
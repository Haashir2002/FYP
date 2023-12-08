import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native"
import Footer from '../components/Footer'

const SingleCar = () => {
    const route = useRoute()
    const pic = route.params.pic
    const name = route.params.name
    const c_name = route.params.c_name
    const location = route.params.location
    const price = route.params.price
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body_view}>
                <Image
                    source={{
                        uri: pic
                    }}
                    style={{
                        width: "98%",
                        height: 250,
                        marginTop: 10,
                        borderRadius: 10,
                        marginHorizontal: "1%"
                    }}
                    resizeMode="contain"
                />

                <View style={styles.name_view}>
                    <Text style={styles.name_view_text}>{name}</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.description_view}>

                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://cdn-icons-png.flaticon.com/512/2061/2061866.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>PETROL</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://cdn-icons-png.flaticon.com/512/638/638428.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>5</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://cdn-icons-png.flaticon.com/512/3409/3409869.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>Automatic</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://www.pngmart.com/files/22/Car-Logo-PNG-Image.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 70
                                    }}
                                    resizeMode="cover"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>{c_name}</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://cdn-icons-png.flaticon.com/512/2373/2373974.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>Gujrat</Text>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://static.thenounproject.com/png/1256134-200.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>{price}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.image_view}>
                                <Image
                                    source={{
                                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Model_Holding_Logo_2021.svg/1280px-Model_Holding_Logo_2021.svg.png",
                                    }}
                                    style={{
                                        height: 50,
                                        width: 50
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.description_text}>2020</Text>
                            </View>
                        </View>
                        <View style={styles.confirm_buton}>
                            <TouchableOpacity style={styles.to}>
                                <Text style={styles.to_text}>BOOK   NOW</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>

            </View>
            <View style={styles.f_view}>
                <Footer />
            </View>

        </SafeAreaView>
    )
}

export default SingleCar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        color: "white",
        height: "100%",
        width: "100%"
    },
    body_view: {
        height: "94%",
        width: "100%",
        //backgroundColor: "red"
    },
    image_view: {
        //borderWidth: 1,
        height: 70,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "15%"
    },
    text_view: {
        //borderWidth: 1,
        marginLeft: "35%",
        width:"34%"
    },
    description_view: {
        width: "100%",
        height: "auto",
        //backgroundColor:"green",
        //borderWidth:1
        //paddingLeft:40
    },
    name_view: {
        //borderWidth: 1,
        width: "100%",
        height: "auto",
        padding: 5,
        margin: 5
    },
    name_view_text: {
        fontSize: 23,
        fontWeight: "bold",
        letterSpacing: 2
    },
    row: {
        borderBottomColor: "#C3C3C3",
        //borderWidth: 1,
        width: "100%",
        height: "auto",
        borderBottomWidth: 1,
        paddingVertical: 10,
        flexDirection: "row",
        //justifyContent: "space-around",
        alignItems: "center",
    },
    description_text: {
        fontSize: 15,
        fontWeight: "400",
        letterSpacing: 1,
        //left:"100%"
    },
    f_view: {
        height: "6%",
        width: "100%",
        //backgroundColor:"white"
    },
    confirm_buton: {
        width: "100%",
        height: "auto"
    },
    to: {
        //borderWidth:1,
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "10%",
        marginVertical: "10%",
        borderRadius: 10,
        // backgroundColor: "#BCEEBC"
        backgroundColor:"#DE8172",
    },
    to_text: {
        fontSize: 20,
        fontWeight: "500",
        letterSpacing: 3
    },
})
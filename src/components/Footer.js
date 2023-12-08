import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
//import { createDrawerNavigator } from '@react-navigation/drawer';

const Footer = () => {
    const navigation = useNavigation();
    //const drawer=createDrawerNavigator();
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btn_view} onPress={()=>navigation.navigate("home")}>
                    <Image
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                            //borderWidth: 1,
                            //borderColor: "red"
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_view}>
                    <Image
                        source={{ uri: "https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                            //borderWidth: 1,
                            //borderColor: "red"
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_view}>
                    <Image
                        source={{ uri: "https://www.freepnglogos.com/uploads/plus-icon/add-big-new-plus-icon-3.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                            //borderWidth: 1,
                            //borderColor: "red"
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_view}>
                    <Image
                        source={{ uri: "https://icons.veryicon.com/png/o/leisure/crisp-app-icon-library-v3/booking-history.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                            //borderWidth: 1,
                            //borderColor: "red"
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_view}>
                    <Image
                        source={{ uri: "https://static.thenounproject.com/png/638636-200.png" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                            //borderWidth: 1,
                            //borderColor: "red"
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Footer

const styles = StyleSheet.create({
    view: {
        //marginTop: "40%",
        width: "100%",
        height: 50,
        borderWidth: 1,
        //borderColor: "black",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-evenly"

    },
    btn_view: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#D6D6D6",
        bottom: 25,
        padding: 10

    },
})
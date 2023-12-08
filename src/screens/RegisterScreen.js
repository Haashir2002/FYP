import { SafeAreaView, Image, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
//import { CheckBox } from 'react-native'

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* ==================== LOGO VIEW ==================== */}
            <View style={styles.logo_view}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqXc0JXkUmEzWfVG_BC-5flCOfi8IeeLFJg&usqp=CAU"
                    }}
                    style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "cover",
                        borderRadius: 20
                        //borderWidth:1,
                        //borderColor:"red",
                    }}
                />
            </View>
            {/* ==================== BODY VIEW ==================== */}
            <View style={styles.body_view}>
                <ScrollView>
                    <View style={styles.input_view}>
                        <TextInput style={styles.input}
                            label="EMAIL"
                            underlineColor="none"
                        />
                        <TextInput style={styles.input}
                            label="PASSWORD"
                            underlineColor="none"
                        />
                        <TextInput style={styles.input}
                            label="USERNAME"
                            underlineColor="none"
                        />
                        <TextInput style={styles.input}
                            label="ADDRESS"
                            underlineColor="none"
                        />
                        <TextInput style={styles.input}
                            label="CNIC NUMBER"
                            underlineColor="none"
                        />
                        <TextInput style={styles.input}
                            label="LICENSE CARD NO"
                            underlineColor="none"
                        />
                        <TextInput style={styles.input}
                            label="PHONE NO"
                            underlineColor="none"
                        />
                        {/* ========== ADD IMAGE VIEW ========== */}
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-evenly"
                        }}>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                borderColor: "#F4F4F4",
                                height: 150,
                                width: '35%',
                                borderRadius: 15,
                                margin: '2%',
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image
                                    source={{
                                        uri: "https://static.thenounproject.com/png/3557455-200.png"
                                    }}
                                    style={{
                                        height: 100,
                                        width: 100
                                    }}
                                />
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: "bold"
                                }}>ADD CNIC</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                borderColor: "#F4F4F4",
                                height: 150,
                                width: '35%',
                                borderRadius: 15,
                                margin: '2%',
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image
                                    source={{
                                        uri: "https://static.thenounproject.com/png/3557455-200.png"
                                    }}
                                    style={{
                                        height: 100,
                                        width: 100
                                    }}
                                />
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: "bold"
                                }}>ADD LICENSE</Text>
                            </TouchableOpacity>
                        </View>
                        {/* ========== TERM & CONDITION VIEW ========== */}
                        <View style={{
                            flexDirection: "row",
                            margin: "5%",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity style={{
                                height: 30,
                                width: 30,
                                borderWidth: 2,
                            }}>
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 20,
                            }}>
                                Accept all term and conditions
                                <TouchableOpacity><Text style={{ color: "red", letterSpacing: 2 }}>(TM & CN)</Text></TouchableOpacity>
                            </Text>
                        </View>


                        {/* ========== BUTTON VIEW ========== */}
                        <TouchableOpacity style={styles.signup}>
                            <Text style={{
                                color: "white",
                                fontSize: 25,
                                fontWeight: "bold",
                                letterSpacing: 10,
                            }}>
                                REGISTER
                            </Text>
                        </TouchableOpacity>

                        {/* ========== BOTTOM VIEW ========== */}

                        <View style={styles.bottom_view}>
                            <Text style={{
                                letterSpacing: 2,
                                fontSize: 20,
                                fontWeight:"bold",
                                //color: "red",
                                margin: "2%"
                            }}>OR</Text>
                            <Text style={{
                                letterSpacing: 3,
                                fontWeight: "bold"
                            }}>
                                Already have an account..
                                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                                    <Text style={{
                                        color: "blue",
                                        fontWeight: "bold",
                                        fontSize:15,
                                        letterSpacing: 1
                                    }}>( LogIN )</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDC5CA',
        color: "white",
    },
    logo_view: {
        //backgroundColor:"red",
        //borderWidth:1,
        width: "100%",
        height: "20%",
        padding: 10,

    },
    body_view: {
        //backgroundColor:"red",
        height: "80%",
        width: "100%"
    },
    input_view: {
        //borderWidth: 1,
        //borderColor: "red",
        width: "100%",
        alignItems: "center",
        // /marginTop: '15%'
    },
    input: {
        width: '95%',
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: '2%',
        backgroundColor: "white"

    },
    signup: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: '95%',
        borderRadius: 15,
        marginTop: '10%',
        backgroundColor: "#BC0000"
    },
    bottom_view:{
        width:"100%",
        height:120,
        alignItems:"center",
        justifyContent:"center"
    },
})
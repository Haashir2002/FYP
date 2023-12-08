import { View, Text,Image, TouchableOpacity } from 'react-native'
import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* ==================== DESIGN VIEW ==================== */}
            <View style={styles.design_view}>

            <Image
                    source={require('../images/login_1.png')}
                    style={{
                        height: "80%",
                        width: "100%",
                        resizeMode: "center",
                        marginTop:"5%"
                    }}
                />
            </View>
            {/* ==================== lOGIN VIEW ==================== */}
            <KeyboardAwareScrollView style={styles.login_view}>

                {/* ========== INPUT VIEW ========== */}

                <View style={styles.input_view}>
                    <TextInput style={styles.input}
                        label="UserID"
                        underlineColor="none"

                    />
                    <TextInput style={styles.input}
                        label="Password"
                        underlineColor="none"

                    />
                    <TouchableOpacity>
                        <Text style={{
                            color: "blue",
                            letterSpacing: 2
                        }}>
                            Forget Password
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* ========== LOGIN BUTTON VIEW ========== */}

                <View style={styles.lb_view}>
                    <TouchableOpacity style={styles.to} onPress={()=>navigation.replace("home")}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* ========== REGISTER BUTTON VIEW ========== */}

                <View style={styles.rb_view}>
                    <Text style={{
                        letterSpacing: 2,
                        fontSize: 15,
                        color: "black",
                        margin: "2%"
                    }}>OR</Text>
                    <Text style={styles.rb_text}>
                        Don't have an account..
                        <TouchableOpacity onPress={()=>navigation.navigate("register")}>
                            <Text style={{
                                color: "blue",
                                fontWeight: "bold",
                                letterSpacing: 1
                            }}>( Sign-UP )</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        color: "white",
    },
    text: {
        color: "#343434",
        fontSize: 25,
        fontWeight: "normal",
        letterSpacing: 8,
    },
    design_view: {
        //borderWidth: 1,
        //borderColor: "white",
        width: "100%",
        height: "35%"
    },
    login_view: {
        //borderWidth: 1,
        //borderColor: "red",
        width: "100%",
        height: "65%",
        backgroundColor: "#BDC5CA",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    input_view: {
        //borderWidth: 1,
        //borderColor: "red",
        width: "100%",
        alignItems: "center",
        marginTop: '10%'
    },
    input: {
        width: '95%',
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: '2%'

    },
    lb_view: {
        //borderWidth: 1,
        //borderColor: "red",
        width: '100%',
        alignItems: "center",
        marginTop:"3%"
    },
    to: {
        // borderColor:"black",
        // borderWidth:1,
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: '95%',
        borderRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        margin: '4%',
        backgroundColor: "#CBB26A"

    },
    rb_view: {
        //borderWidth: 1,
        //borderColor: "red",
        width: '100%',
        padding: '4%',
        justifyContent: "center",
        alignItems: "center",
        //marginTop:"1%"
    },
    rb_text: {
        letterSpacing: 3,
        fontWeight: "bold"
    },
});
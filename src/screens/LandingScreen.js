import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const LandingScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageview}>
                <Image
                    source={require('../images/main-logo.jpg')}
                    style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "contain",
                    }}
                />
            </View>
            <View style={styles.textview}>
                <View style={styles.uper_view}>
                    <Text style={styles.uper_view_text}>The best solution for vehicles</Text>
                </View>
                <View style={styles.lower_view}>
                    <Text style={styles.lower_view_text}>Best Car Sharing Platform</Text>
                </View>
            </View>
            <View style={styles.button_view}>
                <TouchableOpacity style={styles.to} onPress={()=>navigation.replace('login')}>
                    <Text style={styles.to_text}>
                        Get Started
                    </Text>
                </TouchableOpacity>
              
            </View>

            {/* <View style={styles.textview}>
                <View style={styles.to_view}>
                    <TouchableOpacity style={styles.to} onPress={()=>navigation.navigate("login")}
                    >
                        <Text style={styles.text}>
                            GeT StarteD
                        </Text>
                    </TouchableOpacity>
                </View> */}


                {/* <View style={styles.to_view}> 
                    <TouchableOpacity style={styles.to}>
                        <Text style={styles.text}>LogIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.to_view}> 
                    <TouchableOpacity style={styles.to}>
                        <Text style={styles.text}>GuesT</Text>
                    </TouchableOpacity>
                </View> */}
            {/* </View> */}
        </SafeAreaView>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        color: "white",
    },
    imageview: {
        alignItems: "center",
        //justifyContent:"center",
        //borderColor:"white",
        //borderWidth:2,
        height: "40%",
        //marginTop: '20%'
    },
    textview: {
        //borderWidth:1,
        //borderColor:"red",
        width:"100%",
        height:"auto",
        marginTop:20
    },
    uper_view:{
        //borderWidth:1,
        //borderColor:"white",
        width:"100%",
        height:"auto",
        padding:10
    },
    uper_view_text:{
        color:"#B31E20",
        fontSize:30,
        fontWeight:"bold",
        letterSpacing:3,
        width:"85%",
        height:"auto",
        padding:10
    },
    lower_view:{
        //borderWidth:1,
        //borderColor:"white",
        width:"100%",
        height:"auto",
        paddingHorizontal:10
    },
    lower_view_text:{
        color:"#A3A3A3",
        //borderWidth:1,
        //borderColor:"white",
        width:"60%",
        height:"auto",
        fontSize:20,
        fontWeight:"500",
        paddingHorizontal:10
    },
    to:{
        //borderWidth:1,
        //borderColor:"white",
        backgroundColor:"#171717",
        width:"80%",
        height:"auto",
        padding:10,
        borderRadius:10,
        marginHorizontal:"10%",
        marginVertical:"20%",
        justifyContent:"center",
        alignItems:"center",
        elevation:35,
        shadowColor:"white",
    },
    to_text:{
        color:"#A3A3A3",
        fontSize:25,
        fontWeight:"bold",
        letterSpacing:3
    },
});
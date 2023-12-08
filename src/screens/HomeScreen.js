import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import CarSuggestions from '../components/CarSuggestions'
import BikeSuggestions from '../components/BikeSuggestions'
import Slider from '../components/Slider'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({navigation}) => {
  
  const[state,setState]=useState(0)

  return (
    <SafeAreaView style={styles.container}>
    <View style={{height:"94%"}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topoffertextview}>
                <Text style={styles.topoffertext}>TOP-OFFERS</Text>
            </View>
            <Slider/>
            <View style={styles.toggle_view}>
                {/* <View style={{width:"auto",backgroundColor:"#C7C7C7",padding:5,
                justifyContent:"center",alignItems:"center",borderTopRightRadius:10,
                borderBottomRightRadius:10,}}>
                <Text style={styles.toggle_view_text}>Categories</Text>
                </View> */}
                <TouchableOpacity style={{width:"20%",height:"auto",backgroundColor: state=="0"? 'white':"#D6D6D6",
                padding:3,justifyContent:"center",alignItems:"center",margin:2,borderRadius:10}}  onPress={()=>setState(0)}>
                    <Text style={styles.to_toggle_text}>CARS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"20%",height:"auto",backgroundColor: state=="1"? "white":"#D6D6D6",
                padding:3,justifyContent:"center",alignItems:"center",margin:2,borderRadius:10}} onPress={()=>setState(1)}>
                    <Text style={styles.to_toggle_text}>BIKES</Text>
                </TouchableOpacity>
            </View>

            {state=="0"? <Cars/>:
            state=="1"? <Bikes/>:null}
            {state=="0"? <Car_suggestions/>:
            state=="1"? <Bike_suggestions/>:null}
          
        </ScrollView>
    </View>
    {/* ==================== FOOTER VIEW ==================== */}
       <View style={styles.f_view} >
         <Footer />
       </View >
    </SafeAreaView>

    
  )
}

const Bikes=()=>{
    const bike_categories=[
        {
            id:1,
            c_name:"HONDA 125",
            colour:"green",
        },
        {
            id:2,
            c_name:"CD 70",
            colour:"red",
        },
        {
            id:3,
            c_name:"YAMAHA YBR",
            colour:"black",
        },
        {
            id:4,
            c_name:"METRO",
            colour:"gray",
        },
        {
            id:5,
            c_name:"KAWASAKI",
            colour:"blue",
        },
        {
            id:6,
            c_name:"SPORTS",
            colour:"yellow",
        },
        {
            id:7,
            c_name:"TRAIL",
            colour:"pink",
        },
      ];
      const check = (name) => {
        alert(name);
      }
      const navigation = useNavigation();
    return(
        <View style={styles.bike_categoryview_body}>
                <View style={styles.bike_headingview}>
                    <Text style={styles.bike_heading_categorytext}>[CATEGORIES]</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("allbikecategories")}
                                        style={{marginLeft:"54%"}}>
                      <Text style={styles.bike_heading_seealltext}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bike_categoriesview}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {bike_categories.map((item,key)=>(
                        <TouchableOpacity key={key} style={styles.bike_categoryinnerview} 
                        onPress={()=>check(item.c_name)}>
                            <Image
                            style={{
                                height:40,
                                width:40,
                                borderRadius:40,
                                backgroundColor:item.colour,
                            }}/>
                            <Text style={{
                                fontSize:11,
                                letterSpacing:1,
                                padding:2,
                                marginTop:3
                            }}>{item.c_name}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                    
                </View>
            </View>
    )
}
const Cars=()=>{
    const car_categories=[
        {
            id:1,
            c_name:"SEDAN",
            colour:"green",
        },
        {
            id:2,
            c_name:"SUV",
            colour:"red",
        },
        {
            id:3,
            c_name:"COASTERS",
            colour:"black",
        },
        {
            id:4,
            c_name:"PICK-UP",
            colour:"gray",
        },
        {
            id:5,
            c_name:"HIACE",
            colour:"blue",
        },
        {
            id:6,
            c_name:"HIACE",
            colour:"yellow",
        },
        {
            id:7,
            c_name:"HIACE",
            colour:"pink",
        },
      ];
      const check = (name) => {
        alert(name);
      }
      const navigation = useNavigation();
    return(
        <View style={styles.car_categoryview_body}>
                <View style={styles.car_headingview}>
                    <Text style={styles.car_heading_categorytext}>[CATEGORIES]</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("allcarcategories")}
                                      style={{marginLeft:"54%"}}>
                      <Text style={styles.car_heading_seealltext}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.car_categoriesview}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {car_categories.map((item,key)=>(
                        <TouchableOpacity key={key} style={styles.car_categoryinnerview}
                        onPress={()=>check(item.c_name)}>
                            <Image
                            style={{
                                height:40,
                                width:40,
                                borderRadius:40,
                                backgroundColor:item.colour,
                            }}/>
                            <Text style={{
                                fontSize:11,
                                letterSpacing:1,
                                padding:2,
                                marginTop:3
                            }}>{item.c_name}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                    
                </View>
            </View>
    )
}
const Car_suggestions=()=>{
    return(
        <View>
            <View style={styles.suggested_cartextview}>
            <Text style={styles.suggested_cartext}>SUGGESTED-CARS</Text>
            <TouchableOpacity style={{marginLeft:"36%"}}>
                <Text style={styles.seeall_cartext}>See All</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.carsuggestions}>
                <CarSuggestions/>
            </View>
        </View>
    )
}
const Bike_suggestions=()=>{
    return(
        <View>
            <View style={styles.suggested_biketextview}>
            <Text style={styles.suggested_biketext}>SUGGESTED-BIKES</Text>
            <TouchableOpacity style={{marginLeft:"34%"}}>
              <Text style={styles.seeall_biketext}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bikesuggestions}>
            <BikeSuggestions/>
        </View>
        </View>
    )
}

export default HomeScreen




 const styles=StyleSheet.create({
   container: {
         flex: 1,
         backgroundColor: '#D6D6D6',
         color: "white",
         height:"100%",
         width:"100%"
       },
       
       toggle_view:{
        width:"100%",
        height:"auto",
        //height:50,
        backgroundColor:"#D6D6D6",
        flexDirection:"row",
        //padding:5
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:"white",
        justifyContent:"center"
       },
       toggle_view_text:{
        fontSize:20,
        fontWeight:"500",
        letterSpacing:2
       },
       to_toggle_text:{
        fontSize:15,
        fontWeight:"500",
        letterSpacing:3
       },

       carsuggestions:{
         // borderBlockColor:"black",
         // borderWidth:1,  
         width:"100%",
         height:"auto",
         marginBottom:25
       },
       bikesuggestions:{
         // borderBlockColor:"black",
         // borderWidth:1,  
         width:"100%",
         height:"auto",
         marginBottom:25
       },
       topoffertextview:{
        padding:5,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5,
        //marginHorizontal:60,
        borderRadius:10,
        backgroundColor:"#C6DFF7"
       },
       topoffertext:{
         letterSpacing:4,
         fontSize:20,
         fontWeight:"bold"
       },
       suggested_cartextview:{
        paddingHorizontal:7,
        paddingVertical:6,
        //justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
         //marginHorizontal:60,
        borderRadius:10,
        backgroundColor:"#C6DFF7",flexDirection:"row",
        //justifyContent:"space-between",
        elevation:30,
        shadowColor:"black",
       },
       suggested_cartext:{
         letterSpacing:2,
         fontSize:18,
         fontWeight:"bold"
       },
       seeall_cartext:{
        fontSize:14,
        letterSpacing:1,
        fontWeight:"500"
       },
       suggested_biketextview:{
        paddingHorizontal:7,
        paddingVertical:6,
        //justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
         //marginHorizontal:60,
        borderRadius:10,
        backgroundColor:"#C6DFF7",flexDirection:"row",
        //justifyContent:"space-between",
        elevation:30,
        shadowColor:"black",
       },
       suggested_biketext:{
        letterSpacing:2,
        fontSize:18,
        fontWeight:"bold"
      },
      seeall_biketext:{
       fontSize:14,
       letterSpacing:1,
       fontWeight:"500"
      },
       car_categoryview_body:{
        width:"100%",
        height:"auto",
        //marginTop:10
        //borderWidth:1
       },
       car_headingview:{
        height:"auto",
        width:"100%",
        //marginLeft:"69%",
        //justifyContent:"center",
        //alignItems:"center",
        flexDirection:"row",
        //justifyContent:"space-between",
         padding:5,
        // borderBlockColor:"black",
        //borderWidth:1
        backgroundColor:"#C7C7C7",
        elevation:20,
        shadowColor:"black",
        borderRadius:10
       },
       car_heading_categorytext:{
        letterSpacing:2,
        fontWeight:"500",
        fontSize:14
       },
       car_heading_seealltext:{
        letterSpacing:1,
        fontWeight:"500"
       },
       car_categoriesview:{
        width:"100%",
        height:"auto",
        //borderWidth:1,
        padding:5
        //flexDirection:"row"
       },
       car_categoryinnerview:{
        width:"auto",
        height:"auto",
        //borderWidth:1,
        padding:5,
        //backgroundColor:"red",
        marginLeft:15,
        marginRight:15,
        //elevation:0.2,
        justifyContent:"center",
        alignItems:"center"
       },
       bike_categoryview_body:{
        width:"100%",
        height:"auto",
        //marginTop:0
        //borderWidth:1
       },
       bike_headingview:{
        height:"auto",
        width:"100%",
        //marginLeft:"69%",
        //justifyContent:"center",
        //alignItems:"center",
        flexDirection:"row",
        //justifyContent:"flex-start",
         padding:5,
        // borderBlockColor:"black",
        //borderWidth:1
        backgroundColor:"#C7C7C7",
        elevation:20,
        shadowColor:"black",
        borderRadius:10
       },
       bike_heading_categorytext:{
        letterSpacing:2,
        fontWeight:"500",
        fontSize:14
       },
       bike_heading_seealltext:{
        letterSpacing:1,
        fontWeight:"500",
        //fontSize:50
       },
       bike_categoriesview:{
        width:"100%",
        height:"auto",
        //borderWidth:1,
        padding:5
        //flexDirection:"row"
       },
       bike_categoryinnerview:{
        width:"auto",
        height:"auto",
        //borderWidth:1,
        padding:5,
        //backgroundColor:"red",
        marginLeft:15,
        marginRight:15,
        //elevation:0.2,
        justifyContent:"center",
        alignItems:"center"
       },
       f_view: {
             height: "6%",
             width: "100%",
             //backgroundColor:"white"
        },
      
 })


// <SafeAreaView style={styles.container}>
    //   {/* ==================== BODY VIEW ==================== */}

    //   <View style={styles.b_view}>
    //     <ScrollView >
    //       {/* ========== CAR CATEGORY VIEW ========== */}
    //       <View style={styles.category_view}>
    //         <Text style={{
    //           margin: 10,
    //           letterSpacing: 3,
    //           fontWeight: "bold",
    //           fontSize: 15,
    //           backgroundColor: "#F0F1F5",
    //           padding: 10,
    //           borderRadius: 15
    //         }}>
    //           CAR-CategorieS
    //         </Text>
    //         <ScrollView horizontal showsHorizontalScrollIndicator={false}
    //           style={{ padding: 10, borderTopWidth: 1, borderColor: "#DEDEDE", }}>


    //           {car_category_data.map((item, key) => (
    //             <TouchableOpacity key={key} style={styles.category_banner_view} onPress={() => navigation.navigate("singlecarcategory")}>
    //               <Image
    //                 source={{ uri: item.c_picture }}
    //                 style={{
    //                   width: "100%",
    //                   height: 140,
    //                   borderRadius: 10,
    //                   resizeMode: "contain"
    //                 }}
    //               />

    //               <Text style={{
    //                 fontSize: 15, letterSpacing: 2, color: "#0073B0", padding: 5,
    //                 borderRadius: 13, marginTop: 8,
    //                 backgroundColor: "#F0F1F5"
    //               }}>
    //                 {item.c_name}
    //               </Text>

    //             </TouchableOpacity>
    //           ))}

    //           <TouchableOpacity style={{
    //             //width:140,
    //             height: 80,
    //             // /backgroundColor:"#DEDEDE",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             padding: 10,
    //             marginRight: 10,
    //             borderRadius: 20,
    //             top: "4%"
    //           }}

    //             onPress={() => navigation.navigate("allcarcategories")}

    //           >
    //             <Text style={{
    //               fontSize: 20, letterSpacing: 0, color: "#0073B0", padding: 15,
    //               borderRadius: 13,
    //               backgroundColor: "#F0F1F5", fontWeight: "bold"
    //             }}>SEE ALL</Text>
    //           </TouchableOpacity>


    //         </ScrollView>
    //       </View>


    //       {/* ========== BIKE CATEGORY VIEW ========== */}


    //       <View style={styles.category_view}>
    //         <Text style={{
    //           margin: 10,
    //           letterSpacing: 3,
    //           fontWeight: "bold",
    //           fontSize: 15,
    //           backgroundColor: "#F0F1F5",
    //           padding: 10,
    //           borderRadius: 15
    //         }}>
    //           BIKE-CategorieS
    //         </Text>
    //         <ScrollView horizontal showsHorizontalScrollIndicator={false}
    //           style={{ padding: 10, borderTopWidth: 1, borderColor: "#DEDEDE", }}>


    //           {bike_category_data.map((item, key) => (
    //             <TouchableOpacity key={key} style={styles.category_banner_view} onPress={() => navigation.navigate("singlebikecategory")}>
    //               <Image
    //                 source={{ uri: item.c_picture }}
    //                 style={{
    //                   width: "100%",
    //                   height: 140,
    //                   borderRadius: 10,
    //                   resizeMode: "contain"
    //                 }}
    //               />

    //               <Text style={{
    //                 fontSize: 15, letterSpacing: 2, color: "#0073B0", padding: 5,
    //                 borderRadius: 13, marginTop: 8,
    //                 backgroundColor: "#F0F1F5"
    //               }}>
    //                 {item.c_name}
    //               </Text>

    //             </TouchableOpacity>
    //           ))}

    //           <TouchableOpacity style={{
    //             //width:140,
    //             height: 80,
    //             // /backgroundColor:"#DEDEDE",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             padding: 10,
    //             marginRight: 10,
    //             borderRadius: 20,
    //             top: "4%"
    //           }}

    //             onPress={() => navigation.navigate("allbikecategories")}

    //           >
    //             <Text style={{
    //               fontSize: 20, letterSpacing: 0, color: "#0073B0", padding: 15,
    //               borderRadius: 13,
    //               backgroundColor: "#F0F1F5", fontWeight: "bold"
    //             }}>SEE ALL</Text>
    //           </TouchableOpacity>


    //         </ScrollView>
    //       </View>

    //       {/* ========== SUGGESTIONS VIEW ========== */}

    //       <View>
    //         <View style={styles.sug_text_view}> 
    //           <Text style={styles.sug_text}>SUGGESTIONS</Text>
    //         </View>

    //       </View>

    //     </ScrollView>
    //   </View >

    //   {/* ==================== FOOTER VIEW ==================== */}
    //   <View style={styles.f_view} >
    //     <Footer />
    //   </View >
    // </SafeAreaView >


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#A9A9A9',
//     color: "white",
//   },
//   text: {
//     color: "white",
//   },
//   f_view: {
//     height: 60,
//     width: "100%",
//     //backgroundColor:"white"
//   },
//   b_view: {
//     //backgroundColor:"red",
//     height: '93.7%',
//     width: '100%',
//     //justifyContent:"center",
//     //alignItems: "center"
//   },
//   category_view: {
//     borderColor: "#A9A9A9",
//     borderWidth: 4,
//     borderRadius: 10,
//     height: "auto",
//     width: "100%",
//     backgroundColor: "white",
//     marginRight: 0,
//     alignItems: "center"
//   },
//   category_banner_view: {
//     backgroundColor: "#DEDEDE",
//     height: "auto",
//     width: 200,
//     alignItems: "center",
//     // marginTop: 10,
//     // marginBottom: 25,
//     borderRadius: 10,
//     //borderBlockColor: "black",
//     //borderWidth: 1,
//     marginRight: 15,
//     padding: 10
//   },
//   sug_text_view:{
//     backgroundColor: "#F0F1F5",
//     justifyContent:"center",
//     alignItems:"center",
//     marginVertical:10,
//     marginHorizontal:5,
//     borderRadius:10,
//     padding:5
//   },
//   sug_text: {
//     letterSpacing: 5,
//     fontWeight: "bold",
//     fontSize: 15,
//     borderRadius: 15,
    
//   },
// })
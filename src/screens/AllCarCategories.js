import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SingleCarCategory from './SingleCarCategory';
import { useRoute } from "@react-navigation/native"
import Footer from '../components/Footer';

const AllCarCategories = ({ navigation }) => {
  const categories = [
    {
      id: 1,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/sedan-car-e1611596783187.jpg",
      c_name: "..SEDAN..",
    },
    {
      id: 2,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/crossover-car-e1611597762386.jpg",
      c_name: ".CUV..",
    },
    {
      id: 3,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/suv-land-cruiser-e1611598179812.jpg",
      c_name: "..SUVs..",
    },
    {
      id: 4,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/hatchback-golf-e1611596370575.jpg",
      c_name: "..HATCHBACK..",
    },
    {
      id: 5,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/pickup-truck-e1611598692870.jpg",
      c_name: "..PICK-UP-TRUCK..",
    },
    {
      id: 6,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/minivan-e1611599600455.jpg",
      c_name: "..MPV..",
    },
    {
      id: 7,
      c_picture: "https://mechanicbase.com/wp-content/uploads/2019/08/roadster-car.jpg",
      c_name: "..ROADSTER..",
    },
    {
      id: 8,
      c_picture: "https://toyota-indus.com/wp-content/uploads/2022/10/hiace-gallery-thumb-1.jpg",
      c_name: "..HIACE..",
    },
    {
      id: 9,
      c_picture: "https://cache3.pakwheels.com/system/car_generation_pictures/6586/original/White-Base-PS.jpg?1660303912",
      c_name: "..PICK-UP..",
    },
    {
      id: 10,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
    },

  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "94%", width: "100%" }}>
        <ScrollView showsVertical ScrollIndicator={false}>
          <View style={styles.bodyview}>
            {categories.map((item, key) => (
              <TouchableOpacity key={key} style={styles.postview}
                onPress={() => navigation.navigate("singlecarcategory", { category_name: item.c_name, pic:item.c_picture })}>
                <View style={styles.imageview}>
                  <Image
                    source={{
                      uri: item.c_picture,
                    }}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 10
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.textview}>
                  <Text style={styles.text}>{item.c_name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.f_view}>
        <Footer/>
      </View>

    </SafeAreaView>

  )
}

export default AllCarCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6',
    color: "white",
    height: "100%",
    width: "100%"
  },
  bodyview: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom:15
  },
  postview: {
    width: "48%",
    height: "auto",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1%",
    marginBottom: "3%",
    padding: 3,
    backgroundColor: "white",
    borderRadius: 10,

  },
  imageview: {
    width: 180,
    height: 100,
    borderRadius: 10
  },
  textview: {
    margin: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "auto"
  },
  text: {
    fontSize: 17,
    letterSpacing: 2,
    fontWeight: "500"
  },
  f_view:{
    width:"100%",
    height:"6%"
  },
})
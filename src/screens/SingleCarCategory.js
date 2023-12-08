import { StyleSheet, SafeAreaView,Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native"
import Footer from '../components/Footer';

const SingleCarCategory = ({ navigation }) => {
  const data = [
    {
      id: 1,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 2,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 3,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 4,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 5,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 6,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 7,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 8,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 9,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 10,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 11,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 12,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 12,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },
    {
      id: 14,
      c_picture: "https://static.autox.com/uploads/2017/04/Toyota-Corolla-Altis-Exterior-92969.jpg",
      c_name: "Corolla Altis 1.6",
      c_location: "GUJRAT",
      c_price: "Rs. 5000/day",
    },

  ];
  const route = useRoute()
  const category_name = route.params.category_name
  const category_pic = route.params.pic
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body_view}>
        <View style={styles.heading_view}>
          <Text style={styles.heading_text}>{"[" + category_name + "]"}</Text>
          <Image
          source={{
            uri:category_pic
          }}
          style={{
            height:40,
            width:60,
            //borderWidth:1,
            borderRadius:10
          }}
          resizeMode="contain"
          />
        </View>

        <ScrollView>
          <View style={styles.data_view}>
            {data.map((item, key) => (
              <TouchableOpacity key={key} style={styles.to}
              onPress={()=>navigation.navigate("singlecar", {c_name:category_name,pic:item.c_picture, name:item.c_name,
              location:item.c_location, price:item.c_price})}>
                <Image
                source={{
                  uri:item.c_picture
                }}
                style={{
                  height:100,
                  width:175,
                  margin:5,
                  borderRadius:10
                }}
                />
                <Text style={styles.text}>{item.c_name}</Text>
                <Text style={styles.text}>{item.c_location}</Text>
                <Text style={[styles.text, styles.price_text]}>{item.c_price}</Text>
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

export default SingleCarCategory

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
    width: "100%"
  },
  heading_view: {
    height: "auto",
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "#AEAEAE",
    //borderWidth:1,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    elevation: 40,
    shadowColor: "black",
    borderRadius: 10,
    marginTop: 7,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  heading_text: {
    fontSize: 18,
    letterSpacing: 3,
    fontWeight: "600"

  },
  data_view: {
    width: "100%",
    height: "auto",
    //backgroundColor: "red",
    //padding: 5,
    marginTop: 5,
    justifyContent:"center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  to: {
    width: "47%",
    height: "auto",
    backgroundColor: "white",
    margin: 5,
    marginBottom:25,
    borderRadius:10,
  },
  f_view:{
    width:"100%",
    height:"6%"
  },
  text:{
    marginHorizontal:8,
    marginVertical:1
  },
  price_text:{
    marginBottom:5
  },

})
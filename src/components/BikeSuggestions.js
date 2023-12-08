import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BikeSuggestions() {
  const data = [
    {
      id: 1,
      B_picture: "https://autodealsjapan.com/blog/wp-content/uploads/2023/06/34860793955_a072538cca.jpg",
      B_name: "Kawasaki Ninja H2R",
      B_location: "GUJRAT",
      B_price: "Rs. 10000/day",
    },
    {
      id: 2,
      B_picture: "https://autodealsjapan.com/blog/wp-content/uploads/2023/06/34860793955_a072538cca.jpg",
      B_name: "Kawasaki Ninja H2R",
      B_location: "GUJRAT",
      B_price: "Rs. 10000/day",
    },
    {
      id: 3,
      B_picture: "https://autodealsjapan.com/blog/wp-content/uploads/2023/06/34860793955_a072538cca.jpg",
      B_name: "Kawasaki Ninja H2R",
      B_location: "GUJRAT",
      B_price: "Rs. 10000/day",
    },
    {
      id: 4,
      B_picture: "https://autodealsjapan.com/blog/wp-content/uploads/2023/06/34860793955_a072538cca.jpg",
      B_name: "Kawasaki Ninja H2R",
      B_location: "GUJRAT",
      B_price: "Rs. 10000/day",
    },
    {
      id: 5,
      B_picture: "https://autodealsjapan.com/blog/wp-content/uploads/2023/06/34860793955_a072538cca.jpg",
      B_name: "Kawasaki Ninja H2R",
      B_location: "GUJRAT",
      B_price: "Rs. 10000/day",
    },
    
  ];
  return (
    <SafeAreaView style={{ alignItems: "center" }}>

      <ScrollView>
        <View style={styles.bodyview}>
          {data.map((item, key) => (
            <TouchableOpacity key={key} style={styles.postview}>
              <View style={styles.imageview}>
                <Image
                  source={{
                    uri: item.B_picture,
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10
                  }}
                />
              </View>
              <View style={styles.textview}>
                <Text style={styles.text}>{item.B_name}</Text>
                <Text style={styles.text}>{item.B_location}</Text>
                <Text style={styles.text}>{item.B_price}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {/* <View style={styles.viewmore}>
            <TouchableOpacity>
            <Text style={styles.viewmoretext}>VIEW-MORE</Text>
            </TouchableOpacity>
          </View> */}



        </View>
      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  bodyview: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth:0,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  postview: {
    width: "48%",
    height: 220,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1%",
    marginBottom: "1%",
    padding: 3,
    backgroundColor:"white",
    borderRadius:10
  },
  imageview: {
    width: "100%",
    height: "60%",
    borderRadius: 10
  },
  textview: {
    margin: 5,
  },
  text: {
    fontSize: 14,
    letterSpacing: 1
  },
  viewmore:{
    width: "48%",
    height: 220,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1%",
    marginBottom: "1%",
    padding: 3,
    //backgroundColor:"white",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  viewmoretext:{
    fontSize:15,
    letterSpacing:4,
    fontWeight:"bold",
    backgroundColor:"#C6DFF7",
    padding:13,
    borderRadius:10
  },
})
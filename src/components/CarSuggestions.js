import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CarSuggestions() {
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
    
  ];

  const check=(name)=>{
    alert(name)
  };
  return (
    <SafeAreaView style={{ alignItems: "center" }}>

      <ScrollView>
        <View style={styles.bodyview}>
          {data.map((item, key) => (
            <TouchableOpacity key={key} style={styles.postview} onPress={()=>check(item.c_name)}>
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
                />
              </View>
              <View style={styles.textview}>
                <Text style={styles.text}>{item.c_name}</Text>
                <Text style={styles.text}>{item.c_location}</Text>
                <Text style={styles.text}>{item.c_price}</Text>
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
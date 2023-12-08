import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AllBikeCategories = () => {
  const[first,setFirst]=useState(0)
  const[second,setSecond]=useState(1)
  return (
    <SafeAreaView>
      {
        first=="0" && second=="1"? <Test/>: null
      }
      <TouchableOpacity onPress={()=>setFirst(1)}>
      <Text>FIRST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSecond(0)}>
      <Text>SECOND</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const Test=()=>{
  return(
    <View>
      <Text style={{fontSize:30, color:"red"}}>HAASHIR</Text>
    </View>
  )
}
const Test2=()=>{
  return(
    <View>
      <Text style={{fontSize:30, color:"green"}}>SHAFIQ</Text>
    </View>
  )
}

export default AllBikeCategories

const styles = StyleSheet.create({})
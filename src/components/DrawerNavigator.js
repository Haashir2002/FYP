import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
const drawer=createDrawerNavigator()
const DrawerNavigator = () => {
  return (
    <Drawer.DrawerNavigator>
        <Drawer.Screen />
    </Drawer.DrawerNavigator>
  );
}

export default DrawerNavigator

const styles = StyleSheet.create({})
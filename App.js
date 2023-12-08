import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AllCarCategories from './src/screens/AllCarCategories';
import AllBikeCategories from './src/screens/AllBikeCategories';
import SingleBikeCategory from './src/screens/SingleBikeCategory';
import SingleCarCategory from './src/screens/SingleCarCategory';
import SingleCar from './src/screens/SingleCar';





export default function App() {
  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="landing" component={LandingScreen}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              //borderBottomColor: "#DDC765",
              height: 70,
              backgroundColor: '#171717',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />

        <Stack.Screen name="login" component={LoginScreen}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#BDC5CA",
              height: 70,
              backgroundColor: '#2F2F2F',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />


        <Stack.Screen name="register" component={RegisterScreen}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#BDC5CA",
              height: 70,
              backgroundColor: '#2F2F2F',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />

        <Stack.Screen name="home" component={HomeScreen}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#BDC5CA",
              height: 70,
              backgroundColor: '#2F2F2F',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />

        <Stack.Screen name="allcarcategories" component={AllCarCategories}
          options={{
            title: "| CAR Categories |",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#BDC5CA",
              height: 70,
              backgroundColor: '#2F2F2F',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />

        <Stack.Screen name="allbikecategories" component={AllBikeCategories}
          options={{
            title: "| BIKE Categories |",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#BDC5CA",
              height: 70,
              backgroundColor: '#2F2F2F',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />

<Stack.Screen name="singlecarcategory" component={SingleCarCategory}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              //borderBottomWidth: 1,
              //borderBottomColor: "#BDC5CA",
              height: 50,
              //backgroundColor: '#2F2F2F',
              backgroundColor:"#D6D6D6"
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />
<Stack.Screen name="singlecar" component={SingleCar}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {
              //borderBottomWidth: 1,
              //borderBottomColor: "#BDC5CA",
              height: 50,
              //backgroundColor: '#2F2F2F',
              backgroundColor:"#D6D6D6"
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />

<Stack.Screen name="singlebikecategory" component={SingleBikeCategory}
          options={{
            title: "| Bikes |",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#BDC5CA",
              height: 70,
              backgroundColor: '#2F2F2F',
            },
            headerTitleStyle: {
              color: "white",
              fontStyle: "italic",
              //textDecorationStyle:"double",
              fontWeight: "normal",
              //fontSize:"30"
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

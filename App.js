import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Components/AppTabNavigator/feed";
import Core from "./Components/AppTabNavigator/core";
import Topic from "./Components/AppTabNavigator/topics";
import Ionicons from "@expo/vector-icons/Ionicons";
//import MainScreen from "./Components/MainScreen";
//import { Icon } from "native-base";

const tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "core") {
              iconName = focused ? "ios-disc" : "ios-disc";
            } else if (route.name === "feed") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "topics") {
              iconName = focused ? "ios-paper" : "ios-paper";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "black",
        }}
      >
        <tab.Screen name="feed" component={Feed} />
        <tab.Screen name="core" component={Core} />
        <tab.Screen name="topics" component={Topic} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

/*<NavigationContainer independent={true}>
<Stack.Navigator>
  <Stack.Screen
    name="Core"
    component={MainScreen}
    options={{
      headerRight: (props) => (
        <Icon style={{ paddingRight: 20 }} name="ios-add" />
      ),
    }}
  />
</Stack.Navigator>
</NavigationContainer>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

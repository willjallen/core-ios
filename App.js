// React Components
import React from "react";
import {Platform, StatusBar, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import Ionicons from "@expo/vector-icons/Ionicons";
// Navigators
import Feed from "./Components/FeedPage/FeedTab";
import Core from "./Components/CorePage/Main";
// Components
import TopicSingleView from "./Components/TopicSingleView";
import Profile from "./Components/Profile";
import Topic from "./Components/TopicsPage/Main";
import LoginScreen from "./Components/LoginPage/LoginScreen";
// Redux-saga
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
// Reducers
import reducer from './reducers/reducer'
// Redux generators
import {helloSaga} from './sagas/sagas'


// Sagae-redux handling
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
//sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})



const tab = createBottomTabNavigator();
const topicStack = createStackNavigator();
const coreStack = createStackNavigator();

const loginStack = createStackNavigator();
const mainStack = createStackNavigator();

function topicNavigateFunc() {
  return (
    <topicStack.Navigator headerMode={"none"}>
      <topicStack.Screen name="Topic" component={Topic}/>
      <topicStack.Screen name="TopicSingleView" component={TopicSingleView}/>
    </topicStack.Navigator>
  );
}

function coreNavigateFunc() {
  return (
    <coreStack.Navigator headerMode={"none"}>
      <coreStack.Screen name="Core" component={Core}/>
      <coreStack.Screen name="Profile" component={Profile}/>
    </coreStack.Navigator>
  );
}



/*
If no login cookie is present, navigate to login page
Otherwise navigate to Main
*/
export default function App() {

    // Get this from deep storage later
    let isLoggedIn = true;

  return (
    <NavigationContainer>{
        isLoggedIn ? (
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
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "black",
        }}
      >
        <tab.Screen name="feed" component={Feed}/>
        <tab.Screen name="core" component={coreNavigateFunc}/>
        <tab.Screen name="topics" component={topicNavigateFunc}/>
      </tab.Navigator>
      ) : (
         <loginStack.Navigator>
            <loginStack.Screen name = "login" component = {LoginScreen}  options={{headerShown:false}}/>
         </loginStack.Navigator>
         )


    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

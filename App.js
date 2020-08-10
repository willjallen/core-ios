// React Components
import React, {Component} from "react";
import {Platform, StatusBar, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import { Ionicons } from '@expo/vector-icons';

// Navigators
import Feed from "./Components/FeedPage/FeedTab";
import Core from "./Components/CorePage/Main";
// Components
import TopicSingleView from "./Components/TopicSingleView";
import Profile from "./Components/Profile";
import Topic from "./Components/TopicsPage/Main";
import LoginScreen from "./Components/LoginPage/LoginScreen";
import ChatScreen from "./Components/ChatPage/ChatScreen"
// Redux
import { Provider } from 'react-redux';
// Redux-saga
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
// Reducers
import combineReducers from './redux/reducers/RootReducer'
// Redux-saga generators
import rootSaga from './redux-saga/sagas/RootSaga'

// Contexts
import SessionContext  from './Contexts/SessionContext'

import { useNavigation } from '@react-navigation/native';

import * as Font from 'expo-font';
// Sagae-redux handling
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

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
    <coreStack.Navigator headerMode={"none"} initialRouteName="Chat" >
      <coreStack.Screen name="Core" component={Core}/>
      <coreStack.Screen name="Profile" component={Profile}/>
      <coreStack.Screen name="Chat" component={ChatScreen}/>
    </coreStack.Navigator>
  );
}





/*
If no login cookie is present, navigate to login page
Otherwise navigate to Main
*/
export default class App extends Component {



    constructor(props){
        super(props);
      
      this.updateSession = () => {
            this.setState({
                isLoggedIn : true
            });

            console.log(this.state.isLoggedIn);
        };
        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            loading: false,
            isLoggedIn: true,
            updateSession: this.updateSession,
        };

    }


  render() {
    if(!this.state.loading){
      return (
          <Provider store={store}>
              <SessionContext.Provider value={this.state}>
              <NavigationContainer>{
                  this.state.isLoggedIn ? (
                      <>
                          <tab.Navigator
                              screenOptions={({route}) => ({
                                  tabBarIcon: ({focused, color, size}) => {
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
                              initialRouteName = "core"
                          >
                              <tab.Screen name="feed" component={Feed}/>
                              <tab.Screen name="core" component={coreNavigateFunc}/>
                              <tab.Screen name="topics" component={topicNavigateFunc}/>
                          </tab.Navigator>

                      </>
                  ) : (
                      <>
                          <loginStack.Navigator>
                              <loginStack.Screen name="login" component={LoginScreen} options={{headerShown: false}} setLoginState={this.updateSession}/>
                          </loginStack.Navigator>
                      </>
                  )
              }</NavigationContainer>
              </SessionContext.Provider>
          </Provider>

    );
  } else {
    return null;
  }
}
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

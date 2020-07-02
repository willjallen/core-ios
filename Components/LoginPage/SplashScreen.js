import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {useSpring, animated, config} from 'react-spring';



export default function App() {
 const textProps = useSpring({
    color: 'white',
    fontFamily: 'Palatino',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 1, from: {opacity: 0},
    config: {duration: 5000}
   
   })

   /*

    0%{background-position:0% 92%}
    50%{background-position:100% 9%}
    100%{background-position:0% 92%}
   */
  const backgroundProps = useSpring({
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '(29deg, #486696, #364d72, #1e2b41)',
    backgroundPosition: 100, from: {backgroundPosition: 0},
    padding: 8,
  })

   const AnimatedText = animated(Text);
   const AnimatedBackground = animated(View);
  return (

    <AnimatedBackground style={backgroundProps}>
        <AnimatedText style={textProps}>CORE</AnimatedText> 
    </AnimatedBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#486696',
    padding: 8,
  },
  text: {
    color: 'white',
    fontFamily: 'Palatino',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

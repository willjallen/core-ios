import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, Form, Input, Item, StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import custom from '../../native-base-theme/variables/custom';


export default class LoginScreen extends Component {

	render(){
		return(
            <StyleProvider style={getTheme(custom)}>
			<View style={styles.container}>
				<Form style={styles.form}>
					<View style={{height: 100}}>
						<Item fixedLabel rounded={true}>
							<Input placeholderTextColor={"white"} color={"white"} placeholder="Username"/>
						</Item>
					</View>
                    <View style={{height: 100}}>
						<Item fixedLabel rounded={true}>
							<Input placeholderTextColor={"white"} placeholder="Password"/>
						</Item>
					</View>
					<View>
							<Button rounded light>
								<Text>Click Me!</Text>
							</Button>
					</View>
				</Form>
			</View>
			</StyleProvider>


		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",


    },
	form: {
    	margin: 50,
    	placeholderTextColor: "white",
	}
})





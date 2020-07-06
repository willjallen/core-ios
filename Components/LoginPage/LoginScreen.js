import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, Container, Form, Header, Input, Item, StyleProvider} from "native-base";
import SessionContext from "../Contexts/SessionContext";


export default class LoginScreen extends Component {


	constructor(props){
		super(props);
		console.log(props);

	}




	render(){
		return(
            <Container style={styles.container}>
				<Text style={styles.header}>CORE</Text>
				<Form style={styles.form}>
					<View style={{height: 60}}>
						<Item fixedLabel style={{marginLeft: 0}}>
							<Input placeholderTextColor={"white"} style={{ color: "#fff" }}  placeholder="Username"/>
						</Item>
					</View>
                    <View style={{height: 60, paddingBottom: 100}}>
						<Item fixedLabel style={{marginLeft: 0}}>
							<Input placeholderTextColor={"white"} style={{ color: "#fff" }}  placeholder="Password"/>
						</Item>
					</View>
					<View style={{height: 100}}>
							<Button style={{justifyContent: "center", backgroundColor: "#fff", opacity: 0.8}}>
								<Text style={{color: "#000", opacity: 1.0, fontSize: 18}}>Log In</Text>
							</Button>
                    </View>
					<View>
						<SessionContext.Consumer>
                            {({updateSession}) => (
							<Button style={{justifyContent: "center", backgroundColor: "#fff", opacity: 0.8}} onClick={updateSession}>
								<Text style={{color: "#000", opacity: 1.0, fontSize: 18}}>Bypass [Debug]</Text>
							</Button>
                            )}
						</SessionContext.Consumer>
					</View>
				</Form>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#486696",
        justifyContent: "center",


    },
	form: {
    	margin: 50,
	},
	header: {
        color: 'white',
        fontFamily: 'Palatino',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
	}
})





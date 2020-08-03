import React, {Component} from "react";
import { connect } from "react-redux";
import {StyleSheet, Text, View, Image} from "react-native";
import {Button, Container, Form, Header, Input, Item, StyleProvider} from "native-base";
import SessionContext from "../.././Contexts/SessionContext";

import { fetchUserAuthToken } from "../../redux/actions/./AuthTokenActions";

import FiresideLogo from "../../assets/./fireside.png"

class LoginScreen extends Component {


	constructor(props){
		super(props);
        this.state = { userInput: "" , passwordInput: ""};

        //this.handleLoginRequest.bind(this);
        this.debugUpdateSession.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);

	}

    updateUserInput = input => {
        this.setState({ userInput: input});
        console.log(input);
    };


    updatePasswordInput = input => {
        this.setState({ passwordInput: input });
    };


    handleLoginRequest = () => {
        //const {userInput, passwordInput} = this.state;
        const userInput = this.state.userInput;
        const passwordInput = this.state.userInput;
        this.props.fetchUserAuthToken({userInput, passwordInput});
		//console.log(userInput, passwordInput);
	};



	debugUpdateSession = () => {
		console.log("hello");
		console.log(this.props.setLoginState)
		this.props.setLoginState();
	}

	render(){
		return(
            <Container style={styles.container}>
				<Image style={styles.header} source={FiresideLogo} alt="Fireside"/>

				<Form style={styles.form}>
					<View >
						<Item fixedLabel style={{marginLeft: 0}}>
							<Input placeholderTextColor={"black"} style={{ color: "#000" }}  placeholder="Username" onChangeText={e => this.updateUserInput(e)} value={this.state.userInput}/>
						</Item>
					</View>
                    <View style={{paddingBottom: 100}}>
						<Item fixedLabel style={{marginLeft: 0}}>
							<Input placeholderTextColor={"black"} style={{ color: "#000" }}  placeholder="Password" onChangeText={e => this.updatePasswordInput(e)} value={this.state.passwordInput}/>
						</Item>
					</View>
					<View>
							<Button style={{justifyContent: "center", backgroundColor: "#fff", opacity: 0.8}} onPress={this.handleLoginRequest}>
								<Text style={{color: "#000", opacity: 1.0, fontSize: 18}}>Log In</Text>
							</Button>
                    </View>
					<View>
						<SessionContext.Consumer>
                            {({updateSession}) => (
							<Button style={{justifyContent: "center", backgroundColor: "#fff", opacity: 0.8}} onPress={updateSession}>
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



export default connect(
	null,
	{ fetchUserAuthToken }
)(LoginScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",


    },
	form: {
    	margin: 50,
	},
	header: {
		alignSelf: 'center',
	}
})


// backgroundColor: "#486696"


import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, Container, Form, Header, Input, Item, StyleProvider} from "native-base";





export default class App extends Component {


    constructor(props){
        super(props);
        this.state = { userInput: "" , passwordInput: ""};

    }



    render(){
        return(
            <Container style={styles.container}>
                <Text style={styles.header}>CORE</Text>
                <Form style={styles.form}>
                    <View style={{height: 60}}>
                        <Item regular fixedLabel style={{marginLeft: 0}}>
                            <Input placeholderTextColor={"white"} style={{ color: "#fff" }} placeholder="Mobile Number or Email"/>
                        </Item>
                    </View>
                    <View style={{height: 60}}>
                        <Item regular fixedLabel style={{marginLeft: 0}}>
                            <Input placeholderTextColor={"white"} style={{ color: "#fff" }}  placeholder="Full Name"/>
                        </Item>
                    </View>
                    <View style={{height: 60}}>
                        <Item regular fixedLabel style={{marginLeft: 0}}>
                            <Input placeholderTextColor={"white"} style={{ color: "#fff" }}  placeholder="Username"/>
                        </Item>
                    </View>
                    <View style={{height: 60, paddingBottom: 100}}>
                        <Item regular fixedLabel style={{marginLeft: 0}}>
                            <Input placeholderTextColor={"white"} style={{ color: "#fff" }}  placeholder="Password"/>
                        </Item>
                    </View>
                    <View style={{height: 100}}>
                        <Button style={{justifyContent: "center", backgroundColor: "#fff", opacity: 0.8}}>
                            <Text style={{color: "#000", opacity: 1.0, fontSize: 18}}>Sign Up</Text>
                        </Button>
                    </View>
                </Form>
            </Container>
        );
    }
}

//#486696
//#293b59

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#293b59",
        justifyContent: "center",


    },
    form: {
        margin: 50,

    },
    item: {
        backgroundColor: "#486696",
    },
    header: {
        color: 'white',
        fontFamily: 'Palatino',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})





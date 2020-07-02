import React, {Component} from "react";
import {Alert, Image, StyleSheet, Text} from "react-native";
import {Body, Button, Card, CardItem, Icon, Left, Right, Thumbnail,} from "native-base";

class CardComponent extends Component {
  render() {
    /*const imageBank {
        "1": require("source images from database"),
      }*/

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: "https://picsum.photos/196/300" }} />
            <Body>
              <Text>Noah Shelton</Text>
              <Text note>June 15, 2020</Text>
            </Body>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() =>
                Alert.alert("Respond to ______'s post", "text field insert", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancelled message"),
                  },
                  { text: "Send", onPress: () => console.log("message sent") },
                ])
              }
            >
              <Icon name="ios-chatbubbles" style={{ color: "black" }}/>
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: "https://picsum.photos/300/401",
            }}
            style={{ height: 300, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

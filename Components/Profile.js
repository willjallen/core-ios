import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

/*
    Main Screen for User Profile
 */
var { width, height } = Dimensions.get("window");

class Profile extends Component {
  renderImage() {
    return (
      <TouchableOpacity>
        <Image
          source={{ uri: "https://picsum.photos/75/75" }}
          style={{
            width: width / 3 - 5,
            height: width / 3 - 5,
            marginRight: 5,
            marginTop: 5,
          }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, marginTop: 10 }}>
              <Image
                source={{ uri: "https://picsum.photos/75/75" }}
                style={{ width: 119, height: 150, borderRadius: 10 }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                paddingRight: 40,
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {" "}
                First Last{" "}
              </Text>
              <Text> @username</Text>
              <Text> Last Interacted: </Text>
              <Text> All {">"} </Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Button transparent style={{ paddingRight: 10 }}>
                <Icon
                  name="ios-chatbubbles"
                  style={{ fontSize: 40, color: "orange" }}
                />
              </Button>
              <Button transparent>
                <Icon
                  name="ios-add"
                  style={{ fontSize: 40, color: "orange" }}
                />
              </Button>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: "black",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <FlatList
              numColumns={3}
              onEndReachedThreshold={0}
              onEndReached={({ distanceFromEnd }) => {
                console.debug("on end reached ", distanceFromEnd);
              }}
              data={[
                { key: "a" },
                { key: "b" },
                { key: "c" },
                { key: "d" },
                { key: "e" },
                { key: "f" },
              ]}
              renderItem={this.renderImage}
            />
          </View>
          <View
            style={{
              padding: 15,
              justifyContent: "center",
              alignItems: "center ",
            }}
          >
            <Text style={{ fontSize: 20 }}>"Photons have mass -Henry</Text>
          </View>
          <FlatList
            numColumns={3}
            onEndReachedThreshold={0}
            onEndReached={({ distanceFromEnd }) => {
              console.debug("on end reached ", distanceFromEnd);
            }}
            data={[
              { key: "a" },
              { key: "b" },
              { key: "c" },
              { key: "d" },
              { key: "e" },
              { key: "f" },
            ]}
            renderItem={this.renderImage}
          />
        </Content>
      </Container>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

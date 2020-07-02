import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ImageBackground,
	ScrollView,
} from "react-native";
import { Content, Container } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import PostCell from "./PostCell";

export default class Posts extends Component {
	render() {
		return (
			<ScrollView>
				<Container style={styles.container}>
					<FlatList
						numColumns={2}
						onEndReachedThreshold={0}
						onEndReached={({ distanceFromEnd }) => {
							console.debug("on end reached ", distanceFromEnd);
						}}
						contentContainerStyle={styles.list}
						data={[
							{ key: "a" },
							{ key: "b" },
							{ key: "c" },
							{ key: "d" },
							{ key: "e" },
							{ key: "f" },
						]}
						renderItem={() => <PostCell/>}
					/>
				</Container>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		justifyContent: "center",
	},
});

/*
					ListHeaderComponent={
						<View>
							<ProfileHeader/>
							<Text style={{ padding: 10, fontWeight: "bold" }}>
								Your Core
							</Text>
						</View>
					}

					*/

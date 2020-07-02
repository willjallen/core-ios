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

function PostCell() {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={{ margin: 9 }}
			onPress={() => navigation.navigate("Profile")}
		>
			<View
				style={{
					flex: 1,
					minWidth: 170,
					maxWidth: 223,
					height: 250,
					borderRadius: 10,
				}}
			>
				<ImageBackground
					source={{
						uri: "https://picsum.photos/170/223",
					}}
					style={{ flex: 1 }}
					imageStyle={{ borderRadius: 10 }}
				>
					<Text
						style={{
							color: "white",
							textAlign: "center",
							paddingTop: 200,
							fontWeight: "bold",
							textShadowColor: "black",
							textShadowOffset: {
								width: -1,
								height: 1,
							},
							textShadowRadius: 10,
							fontSize: 17,
						}}
					>
						Everett Dickinson
					</Text>
					<Text
						style={{
							color: "white",
							textAlign: "center",
							paddingTop: 2,
							textShadowColor: "black",
							textShadowOffset: {
								width: -1,
								height: 1,
							},
							textShadowRadius: 10,
							fontSize: 12,
						}}
					>
						@edick
					</Text>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
}

export default PostCell;

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

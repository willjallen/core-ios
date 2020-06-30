import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  RefreshControl,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function TopicCell(){
 	const navigation = useNavigation();


		return (
			<TouchableOpacity
				style={{ margin: 9 }}
				onPress={() => navigation.navigate("TopicSingleView")}
			>
				<View
					style={{
						flex: 1,
						minWidth: 170,
						maxWidth: 223,
						height: 280,
						maxHeight: 280,
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
								position: "absolute",
								bottom: 20,
								right: 10,
								fontWeight: "bold",
								textShadowColor: "black",
								textShadowOffset: { width: -1, height: 1 },
								textShadowRadius: 10,
							}}
						>
							Topic
						</Text>
					</ImageBackground>
				</View>
			</TouchableOpacity>
		);
	
}

export default TopicCell;

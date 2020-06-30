import React, { Component } from "react";
import { Header } from "react-native-elements";


export default class TopicHeader extends Component {
	render() {
		return (
			<Header
				linearGradientProps={{
					colors: ["dodgerblue", "white"],
					start: { x: 0, y: 0 },
					end: { x: 1, y: 1 },
				}}
				centerComponent={{ text: "CORE", style: { color: "#fff" } }}
				rightComponent={{ icon: "add", color: "orange" }}
			/>
		);
	}
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import CarItem from "./components/CarItem";

export default function App() {
	return (
		<View>
			<CarItem />
			<StatusBar style="auto" />
		</View>
	);
}

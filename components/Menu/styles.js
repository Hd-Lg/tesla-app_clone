import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	menuItems: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
	},
	menuRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 50,
	},
	icon: {
		color: "white",
	},
	menuTextBox: {
		flexGrow: 1,
	},
	menuText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 15,
		textTransform: "uppercase",
	},
	arrowIcon: {
		color: "#4d4d4e",
	},
	subTitle: {
		color: "gray",
		fontSize: 14,
		marginLeft: 15,
	},
});

export default styles;

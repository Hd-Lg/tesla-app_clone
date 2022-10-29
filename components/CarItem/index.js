import React, { useState } from "react";
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faCog,
	faToolbox,
	faFan,
	faKey,
	faLock,
	faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/index.js";

import styles from "./styles";

export default function CarItem() {
	const [locked, setlocked] = useState(false);

	function clickLock() {
		if (locked) {
			setlocked(false);
		} else {
			setlocked(true);
		}
	}

	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/background.png")}
				style={styles.backgroundImage}
			/>
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity>
					<FontAwesomeIcon
						icon={faCog}
						size={24}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>My Model 3</Text>
				<TouchableOpacity>
					<FontAwesomeIcon
						icon={faToolbox}
						size={24}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
			{/* Mileage */}
			<View style={styles.batterySection}>
				<Image
					source={require("../../assets/battery.png")}
					style={styles.batteryImage}
				/>
				<Text style={styles.batteryText}>150 Km</Text>
			</View>
			{/* Status */}
			<View style={styles.status}>
				<Text style={styles.statusText}>Parked</Text>
			</View>
			{/* Control Icons */}
			<View style={styles.controls}>
				<TouchableOpacity>
					<View style={styles.controlsButton}>
						<FontAwesomeIcon style={styles.icon} icon={faFan} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.controlsButton}>
						<FontAwesomeIcon style={styles.icon} icon={faKey} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={clickLock}>
					<View style={styles.controlsButton}>
						<FontAwesomeIcon
							style={styles.icon}
							icon={locked ? faLock : faUnlockAlt}
						/>
					</View>
				</TouchableOpacity>
			</View>
			{/* Menu */}
			<ScrollView>
				<Menu />
			</ScrollView>
		</View>
	);
}

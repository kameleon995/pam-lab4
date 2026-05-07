import { useNavigation } from "@react-navigation/native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function ScanScreen() {
	const [facing, setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();
	const navigation = useNavigation();

	if (!permission) {
		return <View
			style={styles.topLevelContainer}>
			<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
			<Text>Camera permission is required.</Text>
		</View>;
	}

	if (!permission.granted) {
		return (
			<View style={styles.topLevelContainer}>
				<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
				<Text>Camera permission is required.</Text>
				<Button title="Grant Permission" onPress={requestPermission} />
			</View>
		);
	}

	function toggleCameraFacing() {
		setFacing(current => (current === 'back' ? 'front' : 'back'));
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
				<CameraView style={styles.camera} facing={facing} />
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
						<Text style={styles.text}>Flip Camera</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
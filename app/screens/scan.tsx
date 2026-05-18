import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProps } from "../_layout";
import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function ScanScreen() {
	const [facing, setFacing] = useState<CameraType>('back');
	const [enableTorch, setEnableTorch] = useState(false);
	const [permission, requestPermission] = useCameraPermissions();
	const navigation = useNavigation<StackNavigationProps>();
	const { width, height } = useWindowDimensions();
	const indicatorSize = Math.min(width, height) * 0.8;

	if (!permission) {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.topLevelContainer}>
					<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
					<Text>Camera permission is required but could not be granted.</Text>
				</View>
			</SafeAreaView>
		);
	}

	if (!permission.granted) {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.topLevelContainer}>
					<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
					<Text style={{ padding: 10 }}>Camera permission is required.</Text>
					<Button title="Grant Permission" onPress={requestPermission} />
				</View>
			</SafeAreaView>
		);
	}

	function toggleCameraFacing() {
		setFacing(current => (current === 'back' ? 'front' : 'back'));
	}

	function toggleTorch() {
		setEnableTorch(current => !current);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
				<View style={styles.container}>
					<CameraView
						style={styles.camera}
						facing={facing}
						enableTorch={enableTorch}
						barcodeScannerSettings={{
							barcodeTypes: ["ean13", "ean8"]
						}}
						onBarcodeScanned={(event) => {
							setEnableTorch(false)
							navigation.navigate('ItemPresentation', { barcode: event.data });
						}} />
					<Image
						source={require('../resources/scanner.png')}
						style={{
							width: indicatorSize,
							height: indicatorSize,
							top: (height - indicatorSize) / 2,
							left: (width - indicatorSize) / 2,
							position: 'absolute',
						}}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
						<Ionicons
							name="camera-reverse"
							size={32}
							color="white"
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cameraButton} onPress={toggleTorch}>
						<Ionicons
							name={enableTorch ? "flashlight" : "flashlight-outline"}
							size={32}
							color="white"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

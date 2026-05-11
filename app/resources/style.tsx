import { StyleSheet } from "react-native";

export default function Style() {
	const styles = StyleSheet.create({
		topLevelContainer: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		container: {
			flex: 1,
			justifyContent: 'center',
		},
		message: {
			textAlign: 'center',
			paddingBottom: 10,
		},
		camera: {
			flex: 1,
		},
		buttonContainer: {
			position: 'absolute',
			bottom: 24,
			flexDirection: 'row',
			backgroundColor: 'transparent',
			width: '100%',
			paddingHorizontal: 64,
		},
		cameraButton: {
			flex: 1,
			alignItems: 'center',
		},
		flipCameraButtonText: {
			fontSize: 24,
			fontWeight: 'bold',
			color: 'white',
		},
		backButton: {
			position: 'absolute',
			top: 16,
			left: 16,
			zIndex: 1,
			alignSelf: 'flex-start',
		},
		// Presentation Screen Styles
		scrollContentContainer: {
			paddingBottom: 20,
		},
		productImage: {
			width: '100%',
			height: 250,
			resizeMode: 'contain',
			marginBottom: 20,
		},
		productName: {
			fontSize: 24,
			fontWeight: 'bold',
			marginBottom: 20,
		},
		brandText: {
			fontSize: 14,
			marginBottom: 15,
			fontStyle: 'italic',
		},
		nutritionTitle: {
			fontSize: 18,
			fontWeight: 'bold',
			marginBottom: 10,
			marginTop: 15,
		},
		nutritionBox: {
			backgroundColor: '#f0f0f0',
			padding: 15,
			borderRadius: 8,
			marginBottom: 15,
		},
		nutritionItem: {
			marginBottom: 10,
		},
		barcodeText: {
			fontSize: 12,
			color: '#666',
			marginTop: 10,
		},
		// Button Styles
		button: {
			backgroundColor: '#007AFF',
			paddingHorizontal: 16,
			paddingVertical: 10,
			borderRadius: 8,
			margin: 10,
			alignItems: 'center',
		},
		buttonText: {
			color: 'white',
			fontSize: 16,
			fontWeight: '600',
		},
	});
	return styles;
}
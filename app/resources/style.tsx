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
			paddingVertical: 20,
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
		// Image Loading Styles
		imageLoadingContainer: {
			position: 'relative',
			width: '100%',
			height: 250,
			marginBottom: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		imageSpinner: {
			position: 'absolute',
		},
		// Keyboard Input Screen Styles
		keyboardScreenContent: {
			flex: 1,
			justifyContent: 'center',
			paddingHorizontal: 24,
		},
		keyboardCard: {
			backgroundColor: '#ffffff',
			borderRadius: 20,
			padding: 24,
			shadowColor: '#000',
			shadowOpacity: 0.08,
			shadowRadius: 18,
			shadowOffset: { width: 0, height: 8 },
			elevation: 4,
		},
		keyboardTitle: {
			fontSize: 28,
			fontWeight: '700',
			color: '#111827',
			marginBottom: 8,
		},
		keyboardSubtitle: {
			fontSize: 15,
			lineHeight: 22,
			color: '#4b5563',
			marginBottom: 18,
		},
		barcodeInput: {
			borderWidth: 1,
			borderColor: '#d1d5db',
			borderRadius: 14,
			paddingHorizontal: 16,
			paddingVertical: 14,
			fontSize: 18,
			backgroundColor: '#f9fafb',
			color: '#111827',
		},
		barcodeHint: {
			marginTop: 10,
			fontSize: 13,
			color: '#6b7280',
		},
		barcodeError: {
			marginTop: 10,
			fontSize: 13,
			color: '#b91c1c',
		},
		buttonSpacing: {
			marginTop: 18,
		},
		// Banner Styles
		appBanner: {
			backgroundColor: '#007AFF',
			paddingVertical: 24,
			paddingHorizontal: 16,
			alignItems: 'center',
			marginBottom: 32,
		},
		appBannerText: {
			fontSize: 32,
			fontWeight: '700',
			color: '#ffffff',
			letterSpacing: 0.5,
		},
	});
	return styles;
}
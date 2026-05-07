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
		button: {
			flex: 1,
			alignItems: 'center',
		},
		text: {
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
	});
	return styles;
}
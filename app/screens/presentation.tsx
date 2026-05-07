import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function PresentationScreen({ route }: any) {
	const navigation = useNavigation();
	const { barcode } = route.params;
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
				<Text style={styles.message}>This is the presentation screen, here goes item details.</Text>
				<Text style={styles.message}>Scanned barcode is {barcode}</Text>
			</View>
		</SafeAreaView>
	);
}
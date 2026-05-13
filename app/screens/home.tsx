import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProps } from "../_layout";

import Style from "../resources/style";
const styles = Style();

export default function HomeScreen() {
	const navigation = useNavigation<StackNavigationProps>();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.appBanner}>
				<Text style={styles.appBannerText}>OpenFoodFacts gui</Text>
			</View>
			<View style={styles.topLevelContainer}>
				<Text style={styles.message}>This is a basic nutrition fact lookup app with an integrated code scanner. Click the button below to get started.</Text>
				<Pressable onPress={() => navigation.navigate('KeyboardInput')} style={styles.button}>
					<Text style={styles.buttonText}>Input code from keyboard</Text>
				</Pressable>
				<Pressable onPress={() => navigation.navigate('Scan')} style={styles.button}>
					<Text style={styles.buttonText}>Go to Scanner</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

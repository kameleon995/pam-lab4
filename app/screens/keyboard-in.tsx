import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { StackNavigationProps } from "../_layout";
import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function KeyboardInput() {
	const navigation = useNavigation<StackNavigationProps>();
	const [barcode, setBarcode] = useState("");

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.topLevelContainer}>
				<Text>Keyboard Input Screen</Text>
				<TextInput
					placeholder="Enter barcode"
					onChangeText={(text) => setBarcode(text)}
				/>
				<Pressable onPress={() => navigation.navigate('ItemPresentation', { barcode })} style={styles.button}>
					<Text style={styles.buttonText}>Submit</Text>
				</Pressable>
				<BackButton style={styles.backButton} onClick={() => navigation.goBack()} />
			</SafeAreaView>
		</View>
	);
}
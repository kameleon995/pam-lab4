import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProps } from "../_layout";
import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function KeyboardInput() {
	const navigation = useNavigation<StackNavigationProps>();
	const [barcode, setBarcode] = useState("");
	const [error, setError] = useState<string | null>(null);

	function handleBarcodeChange(value: string) {
		const digitsOnly = value.replace(/\D/g, "");
		setBarcode(digitsOnly);
		if (error) {
			setError(null);
		}
	}

	function handleSubmit() {
		if (!barcode.trim()) {
			setError("Enter a barcode before continuing.");
			return;
		}

		navigation.navigate("ItemPresentation", { barcode: barcode.trim() });
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<BackButton style={styles.backButton} onClick={() => navigation.goBack()} />
				<View style={styles.keyboardScreenContent}>
					<View style={styles.keyboardCard}>
						<Text style={styles.keyboardTitle}>Enter barcode</Text>
						<Text style={styles.keyboardSubtitle}>
							Type the product barcode from the package or receipt to load its nutrition details.
						</Text>
						<TextInput
							style={styles.barcodeInput}
							value={barcode}
							onChangeText={handleBarcodeChange}
							placeholder="e.g. 5901234123457"
							placeholderTextColor="#9ca3af"
							keyboardType="number-pad"
							returnKeyType="done"
							maxLength={32}
							textAlign="center"
						/>
						<Text style={styles.barcodeHint}>Only digits are kept while typing.</Text>
						{error && <Text style={styles.barcodeError}>{error}</Text>}
						<TouchableOpacity style={[styles.button, styles.buttonSpacing]} onPress={handleSubmit}>
							<Text style={styles.buttonText}>Show product</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
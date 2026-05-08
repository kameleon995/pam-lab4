import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function PresentationScreen({ route }: any) {
	const navigation = useNavigation();
	const { barcode } = route.params;

	const [facts, setFacts] = useState<any>(null);

	useEffect(() => {
		// Simulate fetching item details based on the scanned barcode
		setTimeout(async () => {
			const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
			const data = await response.json();
			setFacts(data.product);
			// need error checking because not all products are defined in api, it returns a json: 
			/*
			{
  				"code": "0590758983248",
  				"status": 0,
  				"status_verbose": "product not found"
			}
			*/
			// otherwise status is 1 and verbose is "product found"
		}, 1000);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
				<Text style={styles.message}>This is the presentation screen, here goes item details.</Text>
				<Text style={styles.message}>Scanned barcode is {barcode}</Text>
				<Text style={styles.message}>Fetched item name is {facts ? facts.product_name : "Loading..."}</Text>
			</View>
		</SafeAreaView>
	);
}
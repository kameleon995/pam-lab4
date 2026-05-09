import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackButton from "../resources/back_button";
import Style from "../resources/style";
const styles = Style();

export default function PresentationScreen({ route }: any) {
	const navigation = useNavigation();
	const { barcode } = route.params;

	const [loading, setLoading] = useState(true);
	const [apiError, setApiError] = useState<string | null>(null);
	const [product, setProduct] = useState<any | null>(null);

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
				const data = await response.json();
				if (!response.ok) {
					if (response.status !== 404) throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
					
					if (!data) {
						throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
					}
				}

				if (data.status === 1) {
					setProduct(data.product);
					setApiError(null);
				} else {
					setProduct(null);
					setApiError(`API error: ${data.status_verbose || "Unknown error"}`);
				}
				// need error checking because not all products are defined in api, it returns a json: 
				/*
				{
						"code": "0590758983248",
						"status": 0,
						"status_verbose": "product not found"
				}
				*/
				// can also get "no code or invalid code" and otherwise status is 1 and verbose is "product found"
			} catch (error: any) {
				setApiError(error.message || "unknown error");
				setProduct(null);
			} finally {
				setLoading(false);
			}
			// do loading status and network error handling
		};
		fetchProductDetails();
	}, []);

	if (loading) {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.container}>
					<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
					<Text style={styles.message}>Loading product details...</Text>
					<ActivityIndicator size="large" color="#8f8f8f" />
				</View>
			</SafeAreaView>
		);
	}

	if (apiError) {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.container}>
					<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
					<Text style={styles.message}>Error reported when fetching product details. Error description:</Text>
					<Text style={styles.message}>{apiError}</Text>
				</View>
			</SafeAreaView>
		);
	}

	if (!product) {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.container}>
					<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
					<Text style={styles.message}>No product returned but api reported no error.</Text>
				</View>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<BackButton style={styles.backButton} onClick={() => { navigation.goBack() }} />
				<Text style={styles.message}>This is the presentation screen, here goes item details.</Text>
				<Text style={styles.message}>Scanned barcode is {barcode}</Text>
				<Text style={styles.message}>Fetched item name is {product ? product.product_name : "Loading..."}</Text>
			</View>
		</SafeAreaView>
	);
}
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
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
				<ScrollView contentContainerStyle={styles.scrollContentContainer}>
					{/* Product Image */}
					{product.image_url && (
						<Image
							source={{ uri: product.image_url }}
							style={styles.productImage}
						/>
					)}

					{/* Product Name */}
					<Text style={[styles.message, styles.productName]}>
						{product.product_name || "Unknown Product"}
					</Text>

					{/* Brand */}
					{product.brands && (
						<Text style={[styles.message, styles.brandText]}>
							Brand: {product.brands}
						</Text>
					)}

					{/* Nutrition Facts Section */}
					<Text style={[styles.message, styles.nutritionTitle]}>
						Nutrition Facts
					</Text>

					<View style={styles.nutritionBox}>
						{/* Energy */}
						{product.nutriments?.energy_kcal && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Energy: {Math.round(product.nutriments.energy_kcal)} kcal
							</Text>
						)}

						{/* Protein */}
						{product.nutriments?.proteins && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Protein: {product.nutriments.proteins}g
							</Text>
						)}

						{/* Fat */}
						{product.nutriments?.fat && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Fat: {product.nutriments.fat}g
							</Text>
						)}

						{/* Carbohydrates */}
						{product.nutriments?.carbohydrates && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Carbohydrates: {product.nutriments.carbohydrates}g
							</Text>
						)}

						{/* Fiber */}
						{product.nutriments?.fiber && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Fiber: {product.nutriments.fiber}g
							</Text>
						)}

						{/* Sugars */}
						{product.nutriments?.sugars && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Sugars: {product.nutriments.sugars}g
							</Text>
						)}

						{/* Salt */}
						{product.nutriments?.salt && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Salt: {product.nutriments.salt}g
							</Text>
						)}

						{/* Sodium */}
						{product.nutriments?.sodium && (
							<Text style={[styles.message, styles.nutritionItem]}>
								• Sodium: {product.nutriments.sodium}mg
							</Text>
						)}
					</View>

					{/* Barcode */}
					<Text style={[styles.message, styles.barcodeText]}>
						Barcode: {barcode}
					</Text>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
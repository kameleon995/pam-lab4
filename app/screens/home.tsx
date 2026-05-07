import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Style from "../resources/style";
const styles = Style();

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
	<SafeAreaView style={styles.topLevelContainer}>
	  <Text style={styles.message}>Welcome to the QR code scanner demo! Click the button below to get started.</Text>
	  <Button title="Go to Scanner" onPress={() => navigation.navigate('Scan')} />
	  <Button title="Go to Result" onPress={() => navigation.navigate('ItemPresentation', { barcode: '123456789' })} />
	</SafeAreaView>
  );
}
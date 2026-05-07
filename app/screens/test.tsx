import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Style from "../resources/style";
const styles = Style();

export default function Test({ route }: any) {
  const navigation = useNavigation();
  const { uwu } = route.params;

  return (
	<SafeAreaView style={styles.topLevelContainer}>
	  <Text>Result Screen, result is {uwu}</Text>
	  <Button title="Go Back" onPress={() => navigation.goBack()} />
	</SafeAreaView>
  );
}
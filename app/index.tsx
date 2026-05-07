import { Text, View } from "react-native";

import Style from "./resources/style";
const styles = Style();

export default function Lab4() {
  return (
    <View style={styles.topLevelContainer}>
      <Text>If you're seeing this something is very broken.</Text>
    </View>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/home";
import PresentationScreen from "./screens/presentation";
import ScanScreen from "./screens/scan";
import Test from "./screens/test";

import Style from "./resources/style";
const styles = Style();

const NavStack = createNativeStackNavigator();

function RootStack() {
	return (
		<NavStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
			<NavStack.Screen name="Home" component={HomeScreen} />
			<NavStack.Screen name="Scan" component={ScanScreen} />
			<NavStack.Screen name="Result" component={Test} initialParams={{ uwu: "UwU" }} />
			<NavStack.Screen name="ItemPresentation" component={PresentationScreen} initialParams={{ barcode: "" }} />
		</NavStack.Navigator>
	);
}

export default function RootLayout() {
	return (
		<RootStack />
	);
}

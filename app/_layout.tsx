import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/home";
import KeyboardInput from "./screens/keyboard-in";
import PresentationScreen from "./screens/presentation";
import ScanScreen from "./screens/scan";

import { NavigationProp } from "@react-navigation/native";
import Style from "./resources/style";
const styles = Style();


export type RootStackParamList = {
	Home: undefined;
	Scan: undefined;
	KeyboardInput: undefined;
	ItemPresentation: { barcode: string };
};

export type StackNavigationProps = NavigationProp<RootStackParamList>;

const NavStack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
	return (
		<NavStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
			<NavStack.Screen name="Home" component={HomeScreen} />
			<NavStack.Screen name="Scan" component={ScanScreen} />
			<NavStack.Screen name="KeyboardInput" component={KeyboardInput} />
			<NavStack.Screen name="ItemPresentation" component={PresentationScreen} initialParams={{ barcode: "" }} />
		</NavStack.Navigator>
	);
}

export default function RootLayout() {
	return (
		<RootStack />
	);
}

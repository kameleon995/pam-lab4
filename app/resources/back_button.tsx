
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function BackButton({ onClick, style }: { onClick: () => void; style: any }) {
	return (
		<View style={style}>
			<Pressable onPress={onClick} style={{ padding: 10, backgroundColor: "white", borderRadius: 50 }}>
				<MaterialIcons name="arrow-back" size={28} color="black" />
			</Pressable>
		</View>
	);
}
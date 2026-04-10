import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.customText}>Hello nvim!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  customText: {
    backgroundColor: "pink",
    fontWeight: "bold",
  },
});

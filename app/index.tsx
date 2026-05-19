import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <View
        style={{
          paddingTop: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            fontWeight: "700",
            color: "#111",
          }}
        >
          Hello, Emerson
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "200",
          }}
        >
          {" "}
          Drive safe my love.
        </Text>
      </View>
    </View>
  );
}

import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
      }}
    >
      <View
        style={{
          paddingTop: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 38,
            fontWeight: "700",
            color: "#222222",
          }}
        >
          Hello, Emerson
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "200",
          }}
        >
          {" "}
          Drive safe my love.
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 45,
        }}
      >
        <TouchableOpacity
          style={{
            width: 260,
            height: 260,
            borderRadius: 130,
            borderColor: "#ffffff",
            borderWidth: 7,
            backgroundColor: "#F4B6C2",

            justifyContent: "center",
            alignItems: "center",

            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 15,
            shadowOffset: {
              width: 0,
              height: 6,
            },
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            START DRIVE
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 140,
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "#A8D5BA",
            padding: 20,

            borderRadius: 24,
            borderWidth: 7,
            borderColor: "#b6e5c9",

            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 15,
            shadowOffset: {
              width: 0,
              height: 6,
            },
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "500",
            }}
          >
            This Month
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: "#fff",
              fontSize: 30,
            }}
          >
            0 mi
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "#F4B6C2",
            padding: 20,

            borderRadius: 24,
            borderWidth: 7,
            borderColor: "#fedbe3",

            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 15,
            shadowOffset: {
              width: 0,
              height: 6,
            },
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "500",
            }}
          >
            This Year
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: "#fff",
              fontSize: 30,
            }}
          >
            0 mi
          </Text>
        </View>
      </View>
    </View>
  );
}

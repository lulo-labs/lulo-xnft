import React from "react";
import { View, Image, Text } from "react-native";
import { RecoilRoot } from "recoil";
import tw from "twrnc";
import { THEME } from "./theme";

function Root() {
  return (
    <View
      style={tw`h-full flex justify-center items-center bg-[${THEME.colors.background}]`}
    >
      <View
        style={tw`flex justify-center items-center w-1/2 p-8 bg-[${THEME.colors.cardBackground}] rounded-[${THEME.borderRadius.radius}] border border-[${THEME.colors.cardBorder}]`}
      >
        <Image
          style={tw`h-32 w-32 p-8`}
          // source={require("./lulo.png")}
        />
        <Text
          style={tw`text-white`}
        >
          Coming soon
        </Text>
      </View>
    </View>
  );
}
export default function App() {
  return (
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  );
}

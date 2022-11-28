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
          style={tw`w-[131px] h-[33px]`}
          source={{
            uri: "https://i.imgur.com/KT2BiJv.png"}}
        />
        <Text
          style={tw`text-white mt-4`}
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

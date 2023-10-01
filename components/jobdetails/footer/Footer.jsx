import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { COLORS, icons } from "../../../constants";
import tw from "twrnc";

const Footer = ({ url }) => {
  return (
    <View
      style={tw`flex p-2 flex-row items-center pt-3 gap-2 border-t-[1px] border-[#e4e4e4]`}
    >
      <TouchableOpacity
        style={tw`self-start border-2 border-[#B4B4B3] rounded-xl p-2`}
      >
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={[tw`w-[25px] h-[25px]`, { tintColor: "#B4B4B3" }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-[${COLORS.tertiary}] rounded-xl p-2 px-4 h-[45px] flex flex-1 items-center justify-center`}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={tw`text-white text-lg font-semibold`}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

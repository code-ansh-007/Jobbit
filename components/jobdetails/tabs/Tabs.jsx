import React, { useState } from "react";
import { View, Text } from "react-native";

import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <View>
      <View style={tw`flex flex-row items-center gap-3`}>
        <TouchableOpacity style={tw`w-[120px]`}>
          <Text
            style={tw`${
              activeTab
                ? "bg-[#312651] text-white"
                : "bg-[#E6E4E6] text-neutral-600"
            } p-3 text-lg inline rounded-2xl`}
          >
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[120px]`}>
          <Text
            style={tw`${
              activeTab
                ? "bg-[#312651] text-white"
                : "bg-[#E6E4E6] text-neutral-600"
            } p-3 text-lg inline rounded-2xl`}
          >
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`w-[120px]`}>
          <Text
            style={tw`${
              activeTab
                ? "bg-[#312651] text-white"
                : "bg-[#E6E4E6] text-neutral-600"
            } p-3 text-lg inline rounded-2xl`}
          >
            Description
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabs;

import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";
import { COLORS } from "../../../constants";
import tw from "twrnc";

const Specifics = ({ title, points }) => {
  return (
    <View style={tw`flex flex-col items-start pl-1`}>
      <Text style={tw`font-bold text-xl text-[${COLORS.primary}]`}>
        {title}
      </Text>
      <View style={tw`mt-3 px-3`}>
        {points.map((point, index) => (
          <View key={`point-${index}`} style={tw`relative flex flex-row gap-1`}>
            <Text
              style={tw`text-2xl text-[#312651] absolute left-[-10px] top-[-6px]`}
            >
              •
            </Text>
            <Text style={tw`text-neutral-500 text-md`}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;

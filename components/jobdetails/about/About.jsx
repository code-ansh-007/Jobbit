import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";
import { COLORS } from "../../../constants";
import tw from "twrnc";

const About = ({ about }) => {
  return (
    <View>
      <Text style={tw`font-bold text-xl text-[${COLORS.primary}]`}>
        About the job:
      </Text>
      <Text style={tw`mt-3 text-neutral-500 text-md pl-2`}>{about}</Text>
    </View>
  );
};

export default About;

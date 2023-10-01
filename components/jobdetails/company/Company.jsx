import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";
import tw from "twrnc";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View>
      <View style={tw`flex flex-col items-center justify-center gap-3`}>
        <View
          style={tw`border-2 border-white p-1 rounded-3xl bg-white shadow-xl`}
        >
          <Image
            source={{
              uri: checkImageURL(companyLogo)
                ? companyLogo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode="contain"
            width={100}
            height={100}
            style={tw`rounded-2xl bg-white`}
          />
        </View>
        <Text style={tw`text-[#312651] text-2xl font-bold`} numberOfLines={1}>
          {jobTitle}
        </Text>
        <View style={tw`flex flex-row items-center gap-1`} numberOfLines={1}>
          <Text style={tw`text-xl text-[#312651] font-semibold `}>
            {companyName} /
          </Text>
          <View style={tw`flex flex-row items-center`}>
            <Image
              source={icons.location}
              resizeMode="contain"
              style={tw`w-[20px] h-[20px]`}
            />
            <Text style={tw`text-xl text-[#312651]`}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Company;

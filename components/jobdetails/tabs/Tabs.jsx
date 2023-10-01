import React, { useState } from "react";
import { View, Text } from "react-native";

import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import Specifics from "../specifics/Specifics";
import { JobAbout } from "../..";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("about");

  const displayTabContent = () => {
    switch (activeTab) {
      case "about":
        return <JobAbout about={data.job_description ?? "No data provided."} />;
      case "qualifications":
        return (
          <Specifics
            title="Qualifications:"
            points={data.job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "responsibilities":
        return (
          <Specifics
            title="Responsibilities:"
            points={data.job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        break;
    }
  };

  return (
    <View style={tw`flex flex-col items-center justify-center w-full mt-5`}>
      <View style={tw`flex flex-row items-center justify-center gap-2 w-full`}>
        <TouchableOpacity style={tw``} onPress={() => setActiveTab("about")}>
          <Text
            style={tw`${
              activeTab === "about"
                ? "bg-[#312651] text-white"
                : "bg-[#f0eff0] text-neutral-600"
            } px-3 py-2 text-lg  rounded-2xl`}
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw``}
          onPress={() => setActiveTab("qualifications")}
        >
          <Text
            style={tw`${
              activeTab === "qualifications"
                ? "bg-[#312651] text-white"
                : "bg-[#f0eff0] text-neutral-600"
            } px-3 py-2 text-lg  rounded-2xl`}
          >
            Qualifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw``}
          onPress={() => setActiveTab("responsibilities")}
        >
          <Text
            style={tw`${
              activeTab === "responsibilities"
                ? "bg-[#312651] text-white"
                : "bg-[#f0eff0] text-neutral-600"
            } px-3 py-2 text-lg  rounded-2xl`}
          >
            Responsibilities
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`w-full mt-5`}>{displayTabContent()}</View>
    </View>
  );
};

export default Tabs;

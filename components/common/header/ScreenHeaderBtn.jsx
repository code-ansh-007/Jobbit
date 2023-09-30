import React from "react";
import { View, Text } from "react-native";

import styles from "./screenheader.style";
import { TouchableOpacity, Image } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;

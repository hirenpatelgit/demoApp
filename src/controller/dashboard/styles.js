import React from "react";
import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { COLORS } from "../../config/themes/colors";

const Styles = StyleSheet.create({
  touchOpaAdd: {
    width: scale(90),
    height: scale(40),
    backgroundColor: COLORS.PRIMARY,
    borderRadius: scale(20),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: moderateScale(70, 0.5),
    right: moderateScale(10),
  },
  imgPlus: {
    width: scale(25),
    height: scale(25),
    resizeMode: "contain",
    tintColor: "white",
  },
});

export { Styles };

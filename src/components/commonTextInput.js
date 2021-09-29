/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Common Input Box
 **/
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { COLORS } from "../config/themes/colors";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { INPUT_STYLE } from "../config/themes/fontStyle";

const CommonTextInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.inputField, INPUT_STYLE.textInput, props.addStyle]}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: scale(5),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    height: verticalScale(40),
  },
});

export { CommonTextInput };

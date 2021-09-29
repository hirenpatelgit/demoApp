/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Login Screen
 **/
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { CommonTextInput } from "../../components/commonTextInput";
import { COLORS } from "../../config/themes/colors";
import { SCREEN_DASHBOARD, SCREEN_REGISTER } from "../../navigation/screenName";
import { Styles } from "./styles";
import Toast from "react-native-toast-message";
import {
  updateLoginStatus,
  updateLoginInfo,
} from "../../store/reducer/loginAuthReducer";
import { isEmulator } from "../../utils/helper";

const Login = ({ route, navigation }) => {
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const listAllUser = useSelector((state) => state.rAuth.listUser);

  const dispatch = useDispatch();

  function getDeviceType() {
    console.log("Check Device Console -> ", isEmulator());
  }

  useEffect(() => {
    console.log("user all list----->", listAllUser);
    getDeviceType();
  }, [listAllUser]);

  /**
   * action btn
   */
  function btnLoginClicked() {
    if (txtEmail.length > 0 && txtPassword.length > 0) {
      if (listAllUser.length > 0) {
        let result = listAllUser.filter(
          (item) =>
            item["email"] === txtEmail && item["password"] === txtPassword
        );
        if (result.length > 0) {
          dispatch(updateLoginStatus(true));
          dispatch(updateLoginInfo(result[0]));
          navigation.replace(SCREEN_DASHBOARD);
        } else {
          let result = listAllUser.filter((item) => item["email"] === txtEmail);
          if (result.length > 0) {
            commonToastMsg("error", "email id or password is wrong");
          } else {
            commonToastMsg("error", "User not found");
          }
        }
      } else {
        commonToastMsg("error", "User not found");
      }
    } else if (txtEmail.length <= 0 || txtPassword.length <= 0) {
      /**
       * show toast
       */
      commonToastMsg("error", "Please enter email and password");
    }
  }

  const commonToastMsg = (strType, strMsg) => {
    Toast.show({
      type: strType,
      text1: strMsg,
      position: "bottom",
    });
  };

  function btnregisterClicked() {
    navigation.push(SCREEN_REGISTER);
  }

  /**
   * main
   */
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollV} contentContainerStyle={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <Text style={Styles.txtLable}>Email</Text>
        <CommonTextInput
          placeholder="email"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtEmail((preview) => (preview = text.replace(/ /g, "")));
          }}
        />
        <Text style={[Styles.txtLable, { marginTop: 20 }]}>Password</Text>
        <CommonTextInput
          placeholder="password"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtPassword((preview) => (preview = text.replace(/ /g, "")));
          }}
          secureTextEntry={true}
        />

        <TouchableOpacity style={Styles.touchOpaBtn} onPress={btnLoginClicked}>
          <Text style={Styles.txtBtnTitle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.touchOpaReg}
          onPress={btnregisterClicked}
        >
          <Text style={Styles.txtBtnReg}>Register</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center" }}>
          {isEmulator()
            ? "Running App On Emulator"
            : "Running App On Real Device"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

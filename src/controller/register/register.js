/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Register Screen
 **/
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { CommonTextInput } from "../../components/commonTextInput";
import { Styles } from "./styles";
import { COLORS } from "../../config/themes/colors";
import Toast from "react-native-toast-message";
import { addUserList } from "../../store/reducer/userAuthReducer";
import { SCREEN_DASHBOARD } from "../../navigation/screenName";
import {
  updateLoginInfo,
  updateLoginStatus,
} from "../../store/reducer/loginAuthReducer";

const Register = ({ route, navigation }) => {
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");
  const [txtConfPassword, setTxtConfPassword] = useState("");
  const [txtFirstName, setTxtFirstName] = useState("");
  const [txtLastName, setTxtLastName] = useState("");

  const dispatch = useDispatch();
  const listAllUser = useSelector((state) => state.rAuth.listUser);

  function btnregisterClicked() {
    if (
      txtFirstName.length > 0 &&
      txtLastName.length > 0 &&
      txtEmail.length > 0 &&
      txtPassword.length > 0 &&
      txtConfPassword.length > 0
    ) {
      if (String(txtPassword) === String(txtConfPassword)) {
        /**
         * store data
         */
        let result = listAllUser.filter((item) => item["email"] === txtEmail);
        if (result.length <= 0) {
          let dict_info = {
            firstName: txtFirstName,
            lastName: txtLastName,
            email: txtEmail,
            password: txtPassword, // here we can also encryption passowrd store
          };
          dispatch(updateLoginStatus(true));
          dispatch(addUserList(dict_info));
          dispatch(updateLoginInfo(dict_info));
          Toast.show({
            type: "success",
            text1: "Congrats! register successfully",
            position: "top",
            visibilityTime: 3000,
            onHide: () => {
              navigation.push(SCREEN_DASHBOARD);
            },
          });
        } else {
          commonToastMessage("error", "Email address already exist");
        }
      } else {
        commonToastMessage(
          "error",
          "Password and confirm password should match"
        );
      }
    } else {
      commonToastMessage("error", "Please enter all fields");
    }
  }

  const commonToastMessage = (strType, strMsg) => {
    Toast.show({
      type: strType,
      text1: strMsg,
      position: "bottom",
    });
  };

  /**
   * main
   */
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollV} contentContainerStyle={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <Text style={Styles.txtLable}>First Name</Text>
        <CommonTextInput
          placeholder="First Name"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtFirstName((preview) => (preview = text.replace(/ /g, "")));
          }}
          addStyle={Styles.txtInput}
          value={txtFirstName}
        />

        <Text style={Styles.txtLable}>Last Name</Text>
        <CommonTextInput
          placeholder="Last Name"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtLastName((preview) => (preview = text.replace(/ /g, "")));
          }}
          addStyle={Styles.txtInput}
          value={txtLastName}
        />

        <Text style={Styles.txtLable}>Email</Text>
        <CommonTextInput
          placeholder="email"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtEmail((preview) => (preview = text.replace(/ /g, "")));
          }}
          addStyle={Styles.txtInput}
          value={txtEmail}
        />

        <Text style={Styles.txtLable}>Password</Text>
        <CommonTextInput
          placeholder="Password"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtPassword((preview) => (preview = text.replace(/ /g, "")));
          }}
          addStyle={Styles.txtInput}
          value={txtPassword}
          secureTextEntry={true}
        />

        <Text style={Styles.txtLable}>Confirm Password</Text>
        <CommonTextInput
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.GRAY}
          onChangeText={(text) => {
            setTxtConfPassword((preview) => (preview = text.replace(/ /g, "")));
          }}
          addStyle={Styles.txtInput}
          value={txtConfPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={Styles.touchOpaBtn}
          onPress={btnregisterClicked}
        >
          <Text style={Styles.txtBtnTitle}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

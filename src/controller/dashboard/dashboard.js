/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Dashboard Screen
 **/
import React, { useEffect } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Toast from "react-native-toast-message";

/***
 * bottom tab
 */
import BottomTab from "../../navigation/bottomTab";

/**
 * navigation container for add tab
 */
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { Styles } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { SCREEN_LOGIN } from "../../navigation/screenName";

const Dashboard = ({ route, navigation }) => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  const isAlreadyLogin = useSelector((state) => state.rLogin.isLogin);

  useEffect(() => {
    if (!isAlreadyLogin) {
      //   navigation.push(SCREEN_LOGIN);
      navigation.reset({
        index: 0,
        routes: [{ name: SCREEN_LOGIN }],
      });
    }
  }, [isAlreadyLogin]);

  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <BottomTab />
      <TouchableOpacity
        style={Styles.touchOpaAdd}
        onPress={() => {
          Toast.show({
            type: "info",
            text1: "Sample Info Toast.",
            position: "bottom",
            visibilityTime: 4000,
          });
        }}
      >
        <Text style={{ color: "#FFFFFF" }}>Show Toast</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

export default Dashboard;

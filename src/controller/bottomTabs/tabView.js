/**
 * Author         : Hiren Patel
 * Modification   : Initial Version
 * Date           : 29th Sept 2021
 * Email          : hirenpatel.1088@gmail.com
 * purpose        : Common Tabs View to display tab content
 **/
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { SCREEN_LOGIN } from "../../navigation/screenName";
import { updateLoginStatus } from "../../store/reducer/loginAuthReducer";

const TabsView = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.rLogin.userInfo);

  function btnLogout() {
    dispatch(updateLoginStatus(false));
    // navigation.push(SCREEN_LOGIN)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <TouchableOpacity onPress={() => btnLogout()}>
          <Text
            style={{
              fontSize: 14,
              paddingRight: 12,
              color: "green",
              fontWeight: "bold",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      ),
    });
    return () => {};
  }, [navigation]);
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", width: "100%", height: "100%" }}>
        <Text style={{ alignSelf: "center" }}>
          {"Tabs Content Will Be Here"}
        </Text>
        <Text style={{ alignSelf: "center" }}>
          Welcome, {userInfo.firstName + " " + userInfo.lastName}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TabsView;

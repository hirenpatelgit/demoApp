/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CommonTabs from "../controller/bottomTabs/tabView";
import { COLORS } from "../config/themes/colors";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const renderTabImage = (imgSrc, color, size) => {
    return (
      <Image
        source={imgSrc}
        style={{
          height: size,
          width: size,
          resizeMode: "contain",
          tintColor: color,
        }}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "gray" },
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={CommonTabs}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) =>
            renderTabImage(require("../assets/images/home.png"), color, size),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CommonTabs}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) =>
            renderTabImage(require("../assets/images/search.png"), color, size),
        }}
      />
      <Tab.Screen
        name="Account"
        component={CommonTabs}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) =>
            renderTabImage(
              require("../assets/images/account.png"),
              color,
              size
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={CommonTabs}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) =>
            renderTabImage(
              require("../assets/images/completed.png"),
              color,
              size
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

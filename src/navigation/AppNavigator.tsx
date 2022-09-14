import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Actions, Home, News, Settings, Prices, Portfolio } from "../screens";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TabBar } from "../components";

const TabBarNavigator = createBottomTabNavigator();

const navigationOption: BottomTabNavigationOptions = {
  headerShown: false,
};

const HomeStackNavigator = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="News" component={News} />
    </HomeStackNavigator.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={navigationOption}
    >
      <TabBarNavigator.Screen name="Home" component={Home} />
      <TabBarNavigator.Screen name="Portfolio" component={Portfolio} />
      <TabBarNavigator.Screen name="Actions" component={Actions} />
      <TabBarNavigator.Screen name="Prices" component={Prices} />
      {/* <TabBarNavigator.Screen name="News" component={News} /> */}

      <TabBarNavigator.Screen name="Settings" component={Settings} />
    </TabBarNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

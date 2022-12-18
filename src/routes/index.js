import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";

const TabNavigation = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator screenOptions={{ headerShown: false }}>
        <TabNavigation.Screen name="Home" component={Home} />
        <TabNavigation.Screen name="Details" component={Details} />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
}

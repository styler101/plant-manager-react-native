import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { Icon } from "../components/Icon";

const TabNavigation = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <TabNavigation.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="thunderstorm" size={18} color="#ccc" />
            ),
            title: "",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />
        <TabNavigation.Screen
          name="Cube"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="cube-outline" size={18} color="#ccc" />
            ),
            title: "",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />
        <TabNavigation.Screen
          name="Search"
          component={Home}
          options={{ tabBarIcon: () => <Icon />, title: "" }}
        />

        <TabNavigation.Screen
          name="Details"
          component={Home}
          options={{
            tabBarIcon: () => <Ionicons name="search" size={18} color="#ccc" />,
            title: "",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />
        <TabNavigation.Screen
          name="Like"
          component={Details}
          options={{
            tabBarIcon: () => <Ionicons name="heart" size={18} color="#ccc" />,
            title: "",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
}

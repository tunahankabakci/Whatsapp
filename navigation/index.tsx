import {DarkTheme, DefaultTheme, NavigationContainer,} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {ColorSchemeName} from "react-native";
import Colors from "../constants/Colors";

import NotFoundScreen from "../screens/NotFoundScreen";
import {RootStackParamList} from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import {FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {View} from "../components/Themed";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
                                       colorScheme,
                                   }: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                    shadowOpacity: 0,
                    elevation: 0,
                },
                headerTintColor: Colors.light.background,
                headerTitleAlign: "left",
            }}
        >
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options={{
                    title: "WhatsApp",
                    headerRight: () => (
                        <View
                            style={{
                                backgroundColor: Colors.light.tint,
                                flexDirection: "row",
                                marginRight: 10,
                                width: 60,
                                justifyContent: "space-between",
                            }}
                        >
                            <Ionicons
                                name="md-search-outline"
                                size={24}
                                color={Colors.light.background}
                            />
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={24}
                                color={Colors.light.background}
                            />
                        </View>
                    ),
                }}
            />

            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({route}) => ({
                    title: route.params.name,
                    headerRight: () => (
                        <View
                            style={{
                                backgroundColor: Colors.light.tint,
                                flexDirection: "row",
                                marginRight: 10,
                                width: 110,
                                justifyContent: "space-between",
                                marginBottom: -15,
                            }}
                        >
                            <FontAwesome5
                                name="video"
                                size={20}
                                color={Colors.light.background}
                                style={{
                                    marginRight: 8
                                }}
                            />
                            <Ionicons
                                name="md-call"
                                size={20}
                                color={Colors.light.background}
                            />
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={24}
                                color={Colors.light.background}
                                style={{
                                    marginTop: -1.5,
                                }}
                            />
                        </View>
                    )
                })}
            />

            <Stack.Screen
                name="Contacts"
                component={ContactsScreen}
            />

            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{title: "Oops!"}}
            />
        </Stack.Navigator>
    );
}

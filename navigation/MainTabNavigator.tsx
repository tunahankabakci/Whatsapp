import {Ionicons} from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CameraScreen from '../screens/CameraScreen';
import ChatsScreen from '../screens/ChatsScreen';
import CallsScreen from "../screens/CallsScreen";
import {MainTabParamList} from '../types';


import { Fontisto } from '@expo/vector-icons';



const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Sohbetler"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].background,
                style: {
                    backgroundColor: Colors[colorScheme].tint
                },
                indicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4
                },
                labelStyle: {
                    fontWeight: 'bold'
                },
                showIcon:true,
            }}>
            <MainTab.Screen
                name="Kamera"
                component={CameraScreen}
                options={{
                    tabBarIcon: ({color}) => <Fontisto name="camera" size={18} color={color} />,
                    tabBarLabel:()=>null
                }}

            />
            <MainTab.Screen
                name="Sohbetler"
                component={ChatsScreen}
            />
            <MainTab.Screen
                name="Aramalar"
                component={CallsScreen}
            />
        </MainTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

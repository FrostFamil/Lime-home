import React, { useEffect } from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreens from './src/screens/SearchScreens/SearchScreens';
import MapScreens from './src/screens/MapScreens/MapScreens';
import SavedScreens from './src/screens/SavedScreens/SavedScreens';
import ProfileScreens from './src/screens/ProfileScreens/ProfileScreens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({ route }) {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        style: {
          backgroundColor: '#F1F1F0',
          position: 'absolute',
        },
      }}
    >
      <Tab.Screen
        name={"SEARCH"}
        component={SearchScreens}
      />
      <Tab.Screen
        name={"MAP"}
        component={MapScreens}
        options={({ route }) => ({
          headerShown: false
        })}
      />
      <Tab.Screen
        name={"SAVED"}
        component={SavedScreens}
      />
      <Tab.Screen
        name={"PROFILE"}
        component={ProfileScreens}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {

  return (
    <Stack.Navigator
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <Stack.Screen name={"TABSCREENS"} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
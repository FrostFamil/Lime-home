import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreens from './src/screens/SearchScreens/SearchScreens';
import MapScreens from './src/screens/MapScreens/MapScreens';
import SavedScreens from './src/screens/SavedScreens/SavedScreens';
import ProfileScreens from './src/screens/ProfileScreens/ProfileScreens';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({ route }) {

  return (
    <Tab.Navigator
     screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name={"Search"}
        component={SearchScreens}
        options={({route}) => ({
            tabBarActiveBackgroundColor: '#5b7052',
            tabBarItemStyle: styles.tabItemStyle,
            tabBarIcon: () => {
                return <Feather name="search" size={24} color="white" />
            }
        })}
      />
      <Tab.Screen
        name={"Map"}
        component={MapScreens}
        options={({ route }) => ({
          headerShown: false,
          tabBarActiveBackgroundColor: '#5b7052',
          tabBarItemStyle: styles.tabItemStyle,
          tabBarIcon: () => {
            return <FontAwesome5 name="map-marked-alt" size={24} color="white" />
        }
        })}
      />
      <Tab.Screen
        name={"Saved"}
        component={SavedScreens}
        options={({route}) => ({
            tabBarActiveBackgroundColor: '#5b7052',
            tabBarItemStyle: styles.tabItemStyle,
            tabBarIcon: () => {
                return <Feather name="heart" size={24} color="white" />
            }
        })}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreens}
        options={({route}) => ({
            tabBarActiveBackgroundColor: '#5b7052',
            tabBarItemStyle: styles.tabItemStyle,
            tabBarIcon: () => {
                return  <Ionicons name="person-circle-outline" size={24} color="white" />
            }
        })}
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

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#4d6447', 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    tabItemStyle: {
        borderRadius: 8, 
        top: 8, 
        marginHorizontal: 15
    }
  });

export default AppNavigator;
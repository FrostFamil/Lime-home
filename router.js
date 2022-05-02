import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SearchScreens from './src/screens/SearchScreens/SearchScreens';
import MapScreens from './src/screens/MapScreens/MapScreens';
import SavedScreens from './src/screens/SavedScreens/SavedScreens';
import ProfileScreens from './src/screens/ProfileScreens/ProfileScreens';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons'; 
import DetailsScreen from './src/screens/DetailsScreen/DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MapScreen({ navigation }) {  
    return (
      <Stack.Navigator
        initialRouteName={'Map'}
        screenOptions={({ navigation, route }) => ({
          gestureEnabled: false,
          headerShown: false,
        })}
      >
        <Stack.Screen
            name='Map'
            component={MapScreens}
        />
        <Stack.Screen
          name={'DetailScreen'}
          component={DetailsScreen}
          options={({ navigation, route }) => ({
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.ScaleFromCenterAndroid,
          })}
        />
      </Stack.Navigator>
    );
  }

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
        component={MapScreen}
        options={({ route }) => ({
          headerShown: false,
          tabBarActiveBackgroundColor: '#5b7052',
          tabBarItemStyle: styles.tabItemStyle,
          tabBarStyle: {...styles.tabBarStyle, display: getFocusedRouteNameFromRoute(route) === 'DetailScreen' ? 'none' : 'flex'},
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
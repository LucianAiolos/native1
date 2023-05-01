/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */
/* eslint-disable */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './pages/HomeScreen'
import ProfileScreen from './pages/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Colors,
  DebugInstructions,
  // Header,
  // LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { create } from 'react-test-renderer';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={HomeScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          // navigation={navigation}
        />
      </Tab.Navigator>  
    </NavigationContainer>
  );
}

export default App;

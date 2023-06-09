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
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen';
import Login from './screens/Login/Login'
import SignUp from './screens/SignUp/SignUp'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import theme from './global/styles/theme'

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
        <Provider store={store} >
          <ThemeProvider theme={theme}>
              <Tab.Navigator>
                {/* <Tab.Screen name="LogIn" component={Login} /> */}
                <Tab.Screen
                  name="SignUp"
                  component={SignUp}
                  />
                <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  // navigation={navigation}
                  />
            </Tab.Navigator>
          </ThemeProvider>
       </Provider>
    </NavigationContainer>
  );
}

export default App;

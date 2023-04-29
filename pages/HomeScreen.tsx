/* eslint-disable */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const HomeScreen = ({ navigation } : {navigation: any}) => {

  // const navigation = useNavigation() can be used when navigation cannot be passed (ie deeply nested componenets)


  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="got to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default HomeScreen
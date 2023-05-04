/* eslint-disable */
import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const ProfileScreen = ({navigation} : {navigation: any}) => {
  
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="To HomeScreen"
        onPress={()=> navigation.navigate("Home")}
      />
    </View>
  )
}

export default ProfileScreen
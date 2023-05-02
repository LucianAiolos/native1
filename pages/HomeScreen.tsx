/* eslint-disable */
import React from 'react';
import { ScrollView, Text, View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFormik } from 'formik'

const initialValues = {
  email: '',
  password: '',
};

const HomeScreen = ({ navigation } : {navigation: any}) => {
// const navigation = useNavigation() 
//can be used when navigation cannot be passed (ie deeply nested componenets)
const onSubmit = (values: {}) => {
  console.log(values)
  // setTimeout(() => {
  //   navigation.navigate('Home');
  // }, 3000);
};

const formik = useFormik({
  initialValues,
  // validationSchema,
  onSubmit,
});

const {
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,
  isValid,
  handleSubmit,
} = formik;

return (
  <KeyboardAvoidingView 
    enabled style={{flex: 1}} 
    // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <ScrollView 
      keyboardShouldPersistTaps="handled" 
      contentContainerStyle={{flex: 1}}
    >
      {/* <Container> */}
        <Text>Email</Text>
        <TextInput 
          placeholder="JohnSno@got.com"
          onChangeText={handleChange('password')}
          value={values.password}
          // errorMessage={touched.password && errors.password}
        />
        <Text>Password</Text>
        <TextInput 
          placeholder="Create password"
          onChangeText={handleChange('password')}
          value={values.password}
          // errorMessage={touched.password && errors.password}
        />
        <Button 
          title="Sign in"
          onPress={handleSubmit} 
          // isDisabled={!isValid || isSubmitting}
          // isLoading={isSubmitting}
        />
      {/* </Container> */}
    </ScrollView>
    <Text>Or</Text>
    <Button title="Create Account" onPress={() => navigation.navigate('SignUp')}/>
      {/* <Icon name="log-in" /> */}
      {/* <CreateAccountTitle>Don't have an account? Sign Up</CreateAccountTitle> */}
  </KeyboardAvoidingView>
);
}

export default HomeScreen
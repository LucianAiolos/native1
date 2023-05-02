/* eslint-disable */
import React from 'react';
import { ScrollView, Text, View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  email: '',
  password: '',
};

const validationSchema =  Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered Email'),
  password: Yup.string()
    .label("Password")
    .required("Please enter a password")
    .min(8, "password must be 8 characters long"),
})

const Login = ({ navigation } : {navigation: any}) => {
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
  validationSchema,
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
          // style={InputStyle}
          placeholder="JohnSno@got.com"
          onChangeText={handleChange('password')}
          value={values.password}
          // errorMessage={touched.email && errors.password}
        />
        <Text style={{ backgroundColor: "black", color: "yellow" }} >Password</Text>
        <TextInput 
          style={{ backgroundColor: "black", color: "yellow" }}
          placeholder="Create password"
          onChangeText={handleChange('password')}
          value={values.password}
          // errorMessage={touched.password && errors.password}
        />
        <Button 
          title="Sign in"
          onPress={handleSubmit} 
          disabled={!isValid || isSubmitting} //isDisabled?
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

export default Login
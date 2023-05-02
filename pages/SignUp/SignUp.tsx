/* eslint-disable */
import React from 'react';
import { ScrollView, Text, View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CreateAccountButton, CreateAccountTitle, Input } from './signUpStyles';

const initialValues = {
  name: '',
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

const SignUp = ({ navigation } : {navigation: any}) => {
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
        <Text>Username</Text>
        <Input 
          // style={InputStyle}
          placeholder="John Sno"
          // placeholderTextColor={'red'}
          onChangeText={handleChange('name')}
          value={values.name}
          // errorMessage={touched.email && errors.password}
        />
        <Text>Email</Text>
        <Input 
          // style={InputStyle}
          placeholder="JohnSno@got.com"
          onChangeText={handleChange('email')}
          value={values.email}
          // errorMessage={touched.email && errors.password}
        />
        <Text  >Password</Text>
        <Input 
          style={{marginBottom: 40}}
          placeholder="Create password"
          onChangeText={handleChange('password')}
          value={values.password}
          // errorMessage={touched.password && errors.password}
        />
        <Button 
          style={{background: "goldenrod", borderRadius: 10}}
          title="Submit"
          onPress={handleSubmit} 
          disabled={!isValid || isSubmitting} //isDisabled?
          // isLoading={isSubmitting}
        />
      {/* </Container> */}
    </ScrollView>
    <Text>Or</Text>
    <CreateAccountButton title="Create Account" onPress={() => navigation.navigate('LogIn')}>
      <CreateAccountTitle>Have and Account? Log In</CreateAccountTitle>
    </CreateAccountButton>
      {/* <Icon name="log-in" /> */}
      {/* <CreateAccountTitle>Don't have an account? Sign Up</CreateAccountTitle> */}
  </KeyboardAvoidingView>
);
}

export default SignUp
/* eslint-disable */
import React from 'react';
import { ScrollView, Text, View, Button, TextInput, KeyboardAvoidingView, Pressable, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CreateAccountButton, CreateAccountTitle, Input } from './loginStyles';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema =  Yup.object().shape({
  email: Yup.string()
    // .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered Email'),
  password: Yup.string()
    // .label("Password")
    .min(8, "password must be 8 characters long")
    .required("Please enter a password"),
})


const Login = ({ navigation } : {navigation: any}) => {
// const navigation = useNavigation() 
//can be used when navigation cannot be passed (ie deeply nested componenets)
const onSubmit = (values: {}) => {
  console.log(values, 'in onSubmit')
};

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit,
});

const {
  values,
  touched,
  handleBlur,
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
        <Input 
          // style={InputStyle}
          name="email"
          onBlur={handleBlur('email')}
          placeholder="JohnSno@got.com"
          onChangeText={handleChange('email')}
          value={values.email}
          keyboardType="email-address"
          errorMessage={touched.email && errors.email}
        />
        {errors.email &&
          <Text style={{ fontSize: 10, color: 'red'}}>{errors.email}</Text>
        }
        <Text  >Password</Text>
        <Input 
          name="password"
          onBlur={handleBlur('password')}
          placeholder="Create password"
          onChangeText={handleChange('password')}
          value={values.password}
          secureTextEntry
          errorMessage={touched.password && errors.password}
        />
        {errors.password &&
          <Text style={{ fontSize: 10, color: 'red'}}>{errors.password}</Text>
        }
        <Pressable
          onPress={handleSubmit} 
          // disabled={!isValid || isSubmitting} //isDisabled?
           style={buttonStyles.button}
        >
          <Text style={buttonStyles.text}>Submit</Text>
        </Pressable>
      {/* </Container> */}
    </ScrollView>
    <CreateAccountButton title="Create Account" onPress={() => navigation.navigate('SignUp')}>
      <CreateAccountTitle>Don't have an account? Sign Up</CreateAccountTitle>
    </CreateAccountButton>
      {/* <Icon name="log-in" /> */}
      {/* <CreateAccountTitle>Don't have an account? Sign Up</CreateAccountTitle> */}
  </KeyboardAvoidingView>
);
}


const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'goldenrod',
    marginTop: 42,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})

export default Login
/* eslint-disable */
import React from 'react';
import { ScrollView, Text, View, Button, TextInput, KeyboardAvoidingView, Pressable, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CreateAccountButton, CreateAccountTitle, Input } from './signUpStyles';
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from ''
// import { addUser } from '.../redux/actionCreators'

const initialValues = {
  name: '',
  email: '',
  password: '',
};

type Props = {
  user: IUser
  addUser: (user: IUser) => void
  // what can I return instead of void?
}

const validationSchema =  Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required('Please enter your name.')
    .min(2, "Name just be at least 2 Chars long"),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered Email'),
  password: Yup.string()
    .label("Password")
    .required("Please enter a password")
    .min(8, "password must be 8 characters long"),
})


const SignUp = ({ navigation } : {navigation: any}, user, addUser) => {
  // const dispatch: Dispatch<any> = useDispatch()s


  const onSubmit = (values: IUser) => {
    console.log(values)
    // dispatch(addUser)
    const createUser = React.useCallback(
      (user: IUser) => dispatch(addUser(user)),
      [Dispatch, addUser]
    )
    createUser(values)
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
    handleBlur,
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
            name="name"
            onBlur={handleBlur('name')}
            placeholder="John Sno"
            onChangeText={handleChange('name')}
            value={values.name}
            errorMessage={touched.email && errors.password}
          />
          {errors.email &&
            <Text style={{ fontSize: 10, color: 'red'}}>{errors.name}</Text>
          }
          <Text>Email</Text>
          <Input 
            name="email"
            onBlur={handleBlur('email')}
            placeholder="JohnSno@got.com"
            onChangeText={handleChange('email')}
            value={values.email}
            errorMessage={touched.email && errors.password}
            keyboardType="email-address"
            />
          {errors.email &&
            <Text style={{ fontSize: 10, color: 'red'}}>{errors.email}</Text>
          }
          <Text >Password</Text>
          <Input 
            name="password"
            onBlur={handleBlur('password')}
            placeholder="Create password"
            onChangeText={handleChange('password')}
            value={values.password}
            errorMessage={touched.password && errors.password}
            secureTextEntry
            type="password"
          />
          {errors.email &&
            <Text style={{ fontSize: 10, color: 'red', marginBottom: 42}}>{errors.email}</Text>
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
      <Text>Or</Text>
      <CreateAccountButton title="Create Account" onPress={() => navigation.navigate('LogIn')}>
        <CreateAccountTitle>Have and Account? Log In</CreateAccountTitle>
      </CreateAccountButton>
        {/* <Icon name="log-in" /> */}
        {/* <CreateAccountTitle>Don't have an account? Sign Up</CreateAccountTitle> */}
    </KeyboardAvoidingView>
  ) 
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
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})


export default SignUp
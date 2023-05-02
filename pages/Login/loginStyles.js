/* eslint-disable */
import styled from "styled-components/native";
import {TextInput} from 'react-native'
// import { Feather } from "@expo/vector-icons";

// export const Container = styled.View`
//   flex: 1;
//   background-color: ${({theme}) => theme.colors.dark};
//   padding: 20px;
//   justify-content: center;
//   align-items: center;
// `;

// export const Icon = styled(Feather)`
//   font-size: 20px;
//   color: ${({theme}) => theme.colors.primary};
// `;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.gray800};
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountTitle = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.primary};
  margin-left: 16px;
`;

// export const ErrorMessage = styled.Text`
//   font-size: 12px;
//   color: ${({theme}) => theme.colors.danger};
// `; 

// export const Input = styled.Text`
//   font-size: 20px;
//   background: rgba(200, 200, 200, .5);
//   color: yellow;
//   border-radius: 10px;
//   padding: 5px;
//   margin-bottom: 10px;
// `

export const Input = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray500
}))`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({theme}) => theme.colors.gray800};
  color: ${({theme}) => theme.colors.light};
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 14px;
`;

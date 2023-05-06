/* eslint-disable */
import styled from "styled-components/native";
import { TextInput } from 'react-native'

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
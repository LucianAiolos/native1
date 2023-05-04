/* eslint-disable */
import styled from "styled-components/native";

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

export const Input = styled.Text`
  font-size: 20px;
  background: rgba(200, 200, 200, .5);
  color: yellow;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
`
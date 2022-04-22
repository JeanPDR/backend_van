import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";


import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Spacer,
  Input
} from "../styles";
 
const User = () => {

  

  const [visible, setVisable] = useState(true);

  useEffect(() => {
    const KeyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setVisable(false)
    );

    const KeyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setVisable(true)
    );
    return () => {
      KeyboardDidShowListener.remove();
      KeyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={40}>
      <Spacer height={80} />
        <Title>Cadastre seus dados</Title>
        <SubTitle>Preencha os campos abaixo.</SubTitle>
      </Container>
      <Container>
        <Container justify="flex-start">
          <Spacer height={50} />
          <Input 
          placeholder="Nome"
          />
          <Spacer height={20} />
          <Input placeholder="Sobrenome" 
          
          />
          <Spacer height={20} />
          <Input placeholder="Cargo" />
          <Spacer height={20} />
          <Input placeholder="Empresa" />
        </Container>
      </Container>
      {visible && (
        <Container height={70} justify="flex-end">
          <Button color="red">
            <ButtonText>Começa a usar</ButtonText>
          </Button>
        </Container>
      )}
    </Container>
  );
      
};

export default User;

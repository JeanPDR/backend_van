import React, { useState, useEffect } from "react";
import { Keyboard, Text } from "react-native";


import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  Spacer
} from "../styles";

const Car = () => {

  const [nome, setNome] = useState(null);
  const [sobrenome, setSobrenome] = useState(null);
  const [placaDaVan, setplacaDaVan] = useState(null);
  const [cor, setCor] = useState(null);

  async function registerMotorista()
  {
    console.log('Essa função foi Acionada');
    let request = await fetch ("http://179.188.16.33/" + 'create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        nome: nome,
        sobrenome: sobrenome,
        placa: placaDaVan,
        cor: cor,
      })
    })
  }
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
        {/* <Text>{name} - {sobrenome} - {placaDaVan}</Text> */}

      </Container>
      <Container justify="flex-start">
        <Spacer height={50} />
        <Input 
        placeholder="Nome"
        onChangeText={(text)=>setNome(text)}
         />
        <Spacer height={20} />
        <Input 
        placeholder="Sobrenome"
        onChangeText={(text)=>setSobrenome(text)}
         />
        <Spacer height={20} />
        <Input 
        placeholder="Placa do Veiculo"
        onChangeText={(text)=>setplacaDaVan(text)}
         />
        <Spacer height={20} />
        <Input 
        placeholder="Cor da Van"
        onChangeText={(text)=>setCor(text)} />
      </Container>
      {visible && (
        <Container height={70} justify="flex-end">
          <Button color="red" onPress={registerMotorista}>
            <ButtonText >Começa a usar</ButtonText>
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default Car;

import React from "react";
import { Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  PickerButton,
  Spacer
} from "../styles";

const Type = ({navigation}) => {

  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={40}>
        <Spacer/>
        <Title>Passageiro ou Motorista?</Title>
        <Spacer/>
        <SubTitle>Selecione qual será sua função na Locavan.</SubTitle>
      </Container>
      <Container>
        <PickerButton onPress={() => navigation.navigate('Car')}>
        <Image
          source={require('../../assets/images/van.png')}
          
        />
        
          <Text>Motorista</Text>
        </PickerButton>
        <PickerButton onPress={() => navigation.navigate('User')}>
        <Image
          source={require('../../assets/images/users.png')}
          
        />
          <Text>Locaweber</Text>
        </PickerButton>
      </Container>
      {/* <Container height={70} justify="flex-end">
        <Button color="red">
          <ButtonText>Proximo Passo</ButtonText>
        </Button>
      </Container> */}
    </Container>
  );
};

export default Type;

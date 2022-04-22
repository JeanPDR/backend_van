import React from "react-native";
import { Image } from "react-native";
import { Container, Button, ButtonText, } from "../styles";


const Login = () =>{
  return (
    <Container padding={30} color="background" justify="flex-end">
      
      <Container
        justify="space-around"
        padding={30}
        position="absolute"
        heigth={250}
        top={150}
        zIndex={9}
        
      >
         <Image
          source={require('../../assets/images/van.png')}
        />
      </Container>
     
      <Button>
        <ButtonText>Fazer login com Google</ButtonText>
      </Button>
    </Container>
  );
  }

  export default Login;

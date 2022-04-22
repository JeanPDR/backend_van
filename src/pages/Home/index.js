import React from "react";
import { TouchableOpacity } from "react-native";



import {
  Container,
  Title,
  SubTitle,
  Spacer,
  Map,
  Avatar,
  Button,
  ButtonText,
  PulseCircle,
} from "../styles";
 
const Home = () => {


const tipo = 'M';
const status = 'C';

  return (
    <Container>
      <Container>
      <Map
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    disabled={status === 'P'}
  />
    <Container
       position='absolute'
       justify='space-between'
       align='flex-start'
       padding={20}
       zIndex={999}
       pointerEvents='box-none'
       style={{height: '100%'}}

      >
       {/* PARTE SUPERIOR */}
       <Container height={100} justify='flex-start' align='flex-start'>

          

        {/* AVATAR */}
        <TouchableOpacity>
          <Avatar
           //elevation={50}
          />
        </TouchableOpacity>

      </Container>

      {/* Locaweber Chamando a Van*/}
      {status === "P" && tipo === "P" &&(
          <Container
          padding={20}
          zIndex={-1}
          >
            <PulseCircle
            numPulses={3}
            diameter={400}
            speed={20}
            dutarion={2000}
            />
          </Container>)}

       <Container justify="flex-start" padding={20}  aling="flex-start" elevation={50} height={150} color='ligth'>
       {/* Solicitação Locaweb */}
       {tipo === "P" && status === "S" &&(<Container>
       <SubTitle>Olá, Locaweber.</SubTitle>
        <Title>Deseja chamar a Locavan?</Title>
        <Spacer/>
        <Button color="red">
        <ButtonText >Visualizar Rota</ButtonText>
      </Button>
a
     
       </Container>)}

       {tipo === "P" && status === "I" && (<Container justify="flex-end" aling="flex-start" color='ligth'>
       <Container>
         <SubTitle>Distancia da Locavan até você</SubTitle>
         <Spacer/>
         <Title>5 mins</Title>
         <Spacer/>
       </Container>
        <Button color="red">
        <ButtonText>Chamar</ButtonText>
      </Button>
      
       </Container>)}
        {/* Locaweber em Corrida */}
       {tipo === "P" && (status === "P" || status === "S") && (<Container justify="flex-end" aling="flex-start" color='ligth'>
       <Container>
         <SubTitle>Solicitando a Locavan</SubTitle>
         <Spacer/>
         <Title>5 mins</Title>
         <Spacer/>
       </Container>
        <Button type={status === 'P' ? 'muted' : 'red'}>
        <ButtonText>{status === 'P' ? 'Cancelar Solicitação' : 'Chamar'}</ButtonText>
      </Button>
       </Container>)}

       {tipo === "P" && (status === "P" || status === "C") && (<Container justify="flex-end" aling="flex-start" color='ligth'>
       <Container row>
         <Container align="flex-start" padding={10} row>
           <Avatar
           small
           />
           <Spacer width='3px'/>
           <Container aling='flex-start'>
                <SubTitle bold>Motorista</SubTitle>
                <SubTitle small>Placa da Van</SubTitle>
                <Spacer/>
             </Container>
           <Container/>
           <Container maxWidth={100}>
             <SubTitle bold color="red">Aprox. 5 mins</SubTitle>
           </Container>
        </Container>
       </Container>
        <Button type="muted">
        <ButtonText>Cancelar Solicitação</ButtonText>
      </Button>
       </Container>)}

       {/* Motorista Sem Solicitações */}
       {tipo === "M" && status === "S" &&(
      <Container>
        <SubTitle>Olá, Motorista.</SubTitle>
        <Title>Nenhuma solicitação</Title>
      </Container>)}

      {/* Motorista Está em Corrida */}
      {tipo === "M" && status === "C"  && (<Container justify="flex-end" aling="flex-start" color='ligth'>
       <Container row>
         <Container align="flex-start" padding={10} row>
           <Avatar
           small
           />
           <Spacer width='3px'/>
           <Container aling='flex-start'>
                <SubTitle bold>Locaweber</SubTitle>
                <SubTitle small>2km</SubTitle>
                <Spacer/>
             </Container>
           <Container/>
           <Container width={100}>
             <SubTitle bold color="red">Aprox. 5 mins</SubTitle>
           </Container>
        </Container>
       </Container>
        <Button type="muted">
        <ButtonText>Cancelar Solicitação</ButtonText>
      </Button>
       </Container>)}
      </Container>
      
      
      
      </Container>

      </Container>
     
    </Container>
  );
};

export default Home;

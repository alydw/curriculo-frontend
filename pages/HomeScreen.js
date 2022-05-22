import * as React from 'react';
import { Heading, NativeBaseProvider, VStack, Flex } from 'native-base';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import { Divider } from "native-base";

export default function HomeScreen() {

    function Head() {
      return <VStack alignItems="center">
      <Heading>Sobre mim</Heading>
      </VStack>
    }

    return (
      <View style={styles.container}> 
      <ImageBackground source={require('../assets/fundo.jpg')} style={styles.imageBackground}>   
      <NativeBaseProvider>
      <Head></Head>
      <View style={styles.tela}>
      <Image style={styles.image}
      source={require('../assets/avatar.jpg')}/>
      <Text style={styles.name}>Dionísia Vitória</Text>
      <Divider orientation="horizontal" mx="3" />
      <Flex mx="3" direction="row" justify="space-evenly" h="60">
          <Heading style={styles.heading} py="4">Idade: 23 anos</Heading>
          <Divider orientation="vertical" mx="2" />
          <Heading style={styles.heading} py="4">Endereço: Rua Maruá, 125</Heading>
        </Flex>
        <Divider orientation="horizontal" mx="3" />
        <Heading style={styles.heading} py="2">E-mail: dionisia.v@gmail.com</Heading>
        <Divider orientation="horizontal" mx="3" />
      </View>
      </NativeBaseProvider> 
      </ImageBackground> 
      </View>
    );
  }

  const styles = StyleSheet.create({
    image: {
      width: "120px",
      height: "120px",
      alignSelf: "center",
      margin: "10px",
      borderRadius: "50%"
    },
    tela: {
      justifyContent: "center",
      alignItems: 'center'
    },
    name: {
      fontSize: "25px",
      padding: "10px",
      fontFamily: "Helvetica Neue",
    },
    heading: {
      fontSize: "23px",
    },
    imageBackground: {
      width: "100%",
      height: "500px",
    }
  })
  
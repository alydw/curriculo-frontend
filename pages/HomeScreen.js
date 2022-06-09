import * as React from 'react';
import { Heading, NativeBaseProvider, VStack, Flex, FlatList, Button } from 'native-base';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import { Divider } from "native-base";
import { useQuery} from "react-query";
import axios from "axios";
import { useState,useEffect   } from 'react';

export default function HomeScreen(props){

  

    const [apiClient, setExperiencia] = useState([]);
  
    const { isLoading, error, data ,isFetching} = useQuery( "datetime", () =>
    axios.get('http://localhost:8080/experiencia').then((res) =>setExperiencia(res.data)
    )  
  );
  
  
  
  let result = { 'nomes': [] }; 
  
  for (let i = 0; i<apiClient.length; i++ ) { 
    result.nomes.push(apiClient[i]);
  }
  
  
  
    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>An error has occurred: {error.message}</Text>;
  
  
    const DATA = [
      {
        id: '1',
        idade : apiClient.map((users) => users.idade),
        endereco: apiClient.map((users) => users.endereco)
      },
    ];
  
  
    const Item = ({ idade,endereco}) => (
      <View style={styles.container} >
        <Text>{isFetching ? "Updating..." : ""}</Text>
        <Text style={styles.cor}>{
        `Idade:\n${idade}
        Endereco:\n${endereco}`
        }</Text>
      </View>  
    );
  
    const renderItem = ({ item }) => (
      <Item
        idade={item.idade}
        endereco={item.endereco}
      />
    );

    function Head() {
      return <VStack alignItems="center">
      <Heading>Sobre mim</Heading>
      </VStack>
    }

    return (
      <View> 
      <ImageBackground source={require('../assets/fundo.jpg')} style={styles.imageBackground}>   
      <NativeBaseProvider>
      <Head></Head>
      <View style={styles.tela}>
      <Image style={styles.image}
      source={require('../assets/avatar.jpg')}/>
      <Text style={styles.name}>Dionísia Vitória</Text>
      <Divider orientation="horizontal" mx="3" />
      <Flex mx="3" direction="row" justify="space-evenly" h="60">
          <Heading style={styles.heading} py="5">Idade: 23 anos</Heading>
          <Divider orientation="vertical" mx="2" />
          <Heading style={styles.heading} py="5">Endereço: Rua Maruá, 125</Heading>
        </Flex>
        <Divider orientation="horizontal" mx="3" />
        <Heading style={styles.heading} py="2">E-mail: dionisia.v@gmail.com</Heading>
        <Divider orientation="horizontal" mx="3" />
      </View>
      <View>
                    <Text onLo style={styles.text}>Info</Text>
                    <FlatList
                    style={styles.text}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />  
                </View> 
      <Button title='Alterar dados' onPress={()=>navigation.navigate('HomeScreen')}/>
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
    container: {
      flex:1,
      flexDirection:'row',  
      justifyContent: 'center',
      textAlign:'center',
      width:'100%',
      opacity:0.8,
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
      fontSize: "15px",
    },
    imageBackground: {
      width: "100%",
      height: "500px",
    },
    text: {
      textAlign: "center",
      fontSize: "15px",
      fontFamily: "Helvetica Neue",
    }
  })

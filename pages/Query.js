import * as React from 'react';
import { StyleSheet, Text, View,Button, TextInput,ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import axios from "axios";
import { useMutation } from "react-query";


export default function Model(props){
  
  const [text, setText] = useState({
    idade :"",
    endereco : "",
  });

  const Salvar = async (data) => {
    const alterar = await axios.post("http://localhost:8080/experiencia", data)
    return alterar;
  }

  const {mutate} = useMutation(Salvar,{});
  
  return(
    <SafeAreaView>
    <ImageBackground source={require('../assets/fundo.jpg')} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <View>
            <Text  style={styles.title}>Alterar dados</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Idade" 
            onChangeText={(value) => setText({...text, idade:value})} value={text.idade}
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço" 
            onChangeText={(value) => setText({...text, endereco:value})} value={text.endereco}
          />
          <View style={styles.botao}>
            <View style={styles.botao2}>
              <Button  title='Alterar' color={'green'} onPress={()=> mutate(text)} />
            </View>
            <View style={styles.botao2}>
              <Button title='Voltar' color={'red'} onPress={()=>navigation.navigate('HomeScreen')} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      opacity:0.9,
      
    },
    input: {
      width:250,
      height: 40,
      margin: 10,
      borderWidth:1,
      padding: 10,
      backgroundColor:'white',
      borderRadius: 8
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    subcontainer:{
      alignItems: 'center',
      padding:'10%',
      opacity:0.9,
    },
    title:{
      color: 'white',
      fontSize:20,
      fontFamily: 'Helvetica Neue',
    },
    botao:{
      flexDirection:'row',
      padding:10
    },
    botao2:{
      padding:5,
      fontFamily: 'Helvetica Neue'
    }
  });
import * as React from 'react';
import { Heading, NativeBaseProvider, VStack, HStack, Box, Spacer, Text, Avatar } from 'native-base';
import { StyleSheet, View, ImageBackground, FlatList } from 'react-native';

export default function HomeScreen() {

    function Head() {
      return <VStack alignItems="center">
      <Heading>Extras</Heading>
      </VStack>
    }

    const Lista = () => {
        const data = [{
          recentText: "Durante período da faculdade, participei de uma residência de Sotfware, " + 
          "onde tive oportunidade de trabalhar junto com uma empresa, em desafios " +
          "que eram lançados ao longo dos semestres, podendo trabalhar em uma solução" +
          " junto com um grupo.",
        }, {
          recentText: "Participei de um projeto para dar aula de programação em escolas, " +
          "que durou alguns meses.",
        }, {
          recentText: "Realizei cursos na área de robótica",
        }];
        return <Box style={styles.box}>
            <FlatList data={data} renderItem={({
            item
          }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "gray.600"
          }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                  <HStack space={3} justifyContent="space-between">
                    <VStack>
                      <Text color="coolBlack.600" _dark={{
                  color: "warmGray.200"
                }}>
                        {item.recentText}
                      </Text>
                    </VStack>
                    <Spacer />
                  </HStack>
                </Box>} keyExtractor={item => item.id} />
          </Box>;
      };

    return (
      <View style={styles.container}> 
      <ImageBackground source={require('../assets/fundo.jpg')} style={styles.imageBackground}>   
      <NativeBaseProvider>
      <Head></Head>
      <Lista></Lista>
      </NativeBaseProvider> 
      </ImageBackground> 
      </View>
    );
  }

  const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        padding: "40px",
    },
    imageBackground: {
        width: "100%",
        height: "500px",
      }
  })
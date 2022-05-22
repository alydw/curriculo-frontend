import * as React from 'react';
import { Heading, NativeBaseProvider, VStack, Stack, HStack, Box, AspectRatio, Image,
 Center,} from 'native-base';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

  export default function DetailsScreen() {

    function Head() {
      return <VStack alignItems="center">
      <Heading>Experiências</Heading>
      </VStack>
    }

    const Experience = () => {
      return <Box alignItems="center" style={styles.box}>
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={require('../assets/microsoft.jpg')}
               alt="image" />
              </AspectRatio>
              <Center bg="violet.500" _dark={{
              bg: "violet.400"
            }} _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs"
            }} position="absolute" bottom="0" px="3" py="1.5">
                Microsoft
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Front-end, Intern
                </Heading>     
              </Stack>
              <Text fontWeight="400">
                Iniciei como estagiária na empresa Microsoft, onde passei 5 anos trabalhando
                na área de desenvolvimento front-end.
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }} fontWeight="400">
                    20/03/2005 - 15/12/2010
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>;
    }
    
    const Experience2 = () => {
      return <Box alignItems="center" style={styles.box2}>
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                uri: "https://www.playworks.org/northern-california/wp-content/uploads/sites/3/2020/06/true-wind-logo-1-e1592405583965.jpg"
              }} alt="image" />
              </AspectRatio>
              <Center bg="violet.500" _dark={{
              bg: "violet.400"
            }} _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs"
            }} position="absolute" bottom="0" px="3" py="1.5">
                TrueWind
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Data Analytics, Assoc
                </Heading>     
              </Stack>
              <Text fontWeight="400">
                Atualmente trabalho na empresa TrueWind como analista de dados, 
                utilizando a plataforma PowerBI.
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }} fontWeight="400">
                    05/02/2011 - Dias atuais
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>;
        };
    return (
      <View style={styles.container}> 
      <ImageBackground source={require('../assets/fundo.jpg')} style={styles.imageBackground}>
      <NativeBaseProvider>
      <Head></Head>
      <View style={styles.container}>
      <Experience></Experience>
      <Experience2></Experience2>
      </View>
      </NativeBaseProvider>
      </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    imageBackground: {
      width: "100%",
      height: "500px",
    },
    box: {
      padding: "10px",
      display: "inline-block",
    },
    container: {
      display: "inline-block",
    },
    box2: {
      padding: "10px",
      float: "right"
    }
    
  })
  
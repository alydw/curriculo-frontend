import * as React from 'react';
import { Heading, NativeBaseProvider, VStack } from 'native-base';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';

export default function App() {

  function Head() {
    return <VStack alignItems="center">
    <Heading>Currículo</Heading>
    </VStack>
  }
  return (
    <NavigationContainer>
    <NativeBaseProvider>
    <Head></Head>
    <Tabs></Tabs>
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


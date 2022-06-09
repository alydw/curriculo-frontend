import * as React from 'react';
import { Heading, NativeBaseProvider, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {

  function Head() {
    return <VStack alignItems="center">
    <Heading>Currículo</Heading>
    </VStack>
  }
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
    <NativeBaseProvider>
    <Head></Head>
    <Tabs></Tabs>
    </NativeBaseProvider>
    </NavigationContainer>
    </QueryClientProvider>
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


import React from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Example2 from './src/screens/Example2/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Example 1
    // <HomeScreen />

    // Example 2
    // <Example2 />

    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name='One' component={HomeScreen} />
          <Stack.Screen name='Two' component={Example2} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

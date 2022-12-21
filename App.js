import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import {
  Poppins_400Regular, 
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Rubik
} from '@expo-google-fonts/poppins';
import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black
} from '@expo-google-fonts/rubik'
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import { store } from './store';
import NewsScreen from './src/screens/NewsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Ionicons': require('./src/assets/fonts/Ionicons.ttf'),
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black

  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      
        <Provider store={ store }>
          <Stack.Navigator >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="News" component={NewsScreen} />
          </Stack.Navigator>
        </Provider>
      
    </NavigationContainer>
  );
}


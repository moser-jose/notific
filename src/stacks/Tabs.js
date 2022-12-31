import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@elevyg/react-native-ionicons';
import Home from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SearchScreen from '../screens/SearchScreen';
import ConfigScreen from '../screens/ConfigScreen';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home': 'home';
          } else if (route.name === 'Guardados') {
            iconName = focused ? 'bookmark' : 'bookmark';
          }
          else if (route.name === 'Pesquisar') {
            iconName = focused ? 'search' : 'search';
          }
          else if (route.name === 'Configuração') {
            iconName = focused ? 'settings' : 'settings';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown:false,
        tabBarActiveTintColor: '#e6622e',
        tabBarInactiveTintColor: 'gray',
      })}
      
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesquisar" component={SearchScreen} />
      <Tab.Screen name="Guardados" component={FavoritesScreen} />
      <Tab.Screen name="Configuração" component={ConfigScreen} />
    </Tab.Navigator>
  );
};

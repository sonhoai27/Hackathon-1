/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screen/Home'
import SearchScreen from './screen/Search'

const AppTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
}, {

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      initialRouteName: 'Home',
      activeTintColor: '#08f',
      inactiveTintColor: '#444',
      style: {
        backgroundColor: '#eee',
      }
    }
  });

const Routes = createAppContainer(AppTabNavigator)

const App = () => {
  return (
    <Routes />
  );
};

export default App;

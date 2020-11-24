import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import signUpScreen from './src/screens/signUpScreen';
import signInScreen from './src/screens/signInScreen';
import accountScreen from './src/screens/accountScreen';
import trackDetailScreen from './src/screens/trackDetailScreen';
import trackListScreen from './src/screens/trackListScreen';
import trackCreationScreen from './src/screens/trackCreationScreen';
import { Provider } from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
      signUp: signUpScreen,
      signIn: signInScreen
  }),

  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      trackList: trackListScreen,
      trackDetail: trackDetailScreen
    }),
    trackCreate: trackCreationScreen,
    account: accountScreen
  })
})
const App = createAppContainer(switchNavigator);
export default () => {
  return( <Provider>
    <App ref = {(navigator) =>[] }/>
  </Provider>);
}


import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import CreateAccountScreen from './src/components/CreateAccountScreen';
import MyBooksScreen from './src/components/MyBooksScreen';
import NewBookScreen from './src/components/NewBookScreen';
import ViewBookScreen from './src/components/ViewBookScreen';
import MenuScreen from './src/components/MenuScreen';

import { MenuIconButton } from './src/components/MenuIconButton';

import { Book } from './src/types';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  MyBooks: undefined;
  NewBook: undefined;
  ViewBook: { book: Book };
  Menu: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Books', headerLeft: () => <MenuIconButton /> }}
        />
        <RootStack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: 'Create Account' }}
        />
        <RootStack.Screen
          name="MyBooks"
          component={MyBooksScreen}
          options={{ title: 'My Books' }}
        />
        <RootStack.Screen
          name="NewBook"
          component={NewBookScreen}
          options={{ title: 'New Books' }}
        />
        <RootStack.Screen
          name="ViewBook"
          component={ViewBookScreen}
          options={{ title: 'View Books' }}
        />
        <RootStack.Screen name="Menu" component={MenuScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

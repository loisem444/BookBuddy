import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import CreateAccountScreen from './src/components/CreateAccountScreen';
import MyBooksScreen from './src/components/MyBooksScreen';
import NewBookScreen from './src/components/NewBookScreen';
import NewBookConfirmation from './src/components/NewBookConfirmation';
import ViewBookScreen from './src/components/ViewBookScreen';
import EditBookScreen from './src/components/EditBookScreen';
import EditBookConfirmation from './src/components/EditBookConfirmation';
import MenuScreen from './src/components/MenuScreen';

import { MenuIconButton } from './src/components/MenuIconButton';

import { Book } from './src/types';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  MyBooks: undefined;
  NewBook: undefined;
  NewBookConfirmation: undefined;
  EditBook: undefined;
  EditBookConfirmation: undefined;
  ViewBook: { book: Book , previousScreen : String };
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
          options={{ title: 'Listed Books', headerLeft: () => <MenuIconButton /> }}
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
          name="NewBookConfirmation"
          component={NewBookConfirmation}
          options={{ title: 'New Books Confirmation' }}
        />
        <RootStack.Screen
          name="ViewBook"
          component={ViewBookScreen}
          options={{ title: 'View Books' }}
        />
        <RootStack.Screen
          name="EditBook"
          component={EditBookScreen}
          options={{ title: 'Edit Book Details Screen'}}
        />
        <RootStack.Screen
          name="EditBookConfirmation"
          component={EditBookConfirmation}
          options={{ title: 'Edit BookConfirmation'}}
        />
        <RootStack.Screen name="Menu" component={MenuScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

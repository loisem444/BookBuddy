import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'EditBook'>;

const EditBookScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Edit book Details screen</Text>
    </View>
  );
};

export default EditBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

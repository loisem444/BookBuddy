import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { RootStackParamList } from '../../App';
import { books } from '../mockBooks';
import { Book } from '../types';
import colors from '../colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ItemProps = {
  item: Book;
  onPress: () => void;
};

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.coverImage }} style={styles.bookCoverImage} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const onPressItem = (item: Book) => {
    navigation.navigate('ViewBook', { book: item });
  };

  const renderItem = ({ item }: { item: Book }) => {
    return <Item item={item} onPress={() => onPressItem(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 16,
  },
  itemText: {
    color: colors.black,
    fontSize: 20,
    alignSelf: 'center',
    flex: 1,
  },
  bookCoverImage: {
    width: 50,
    height: 70,
    marginRight: 16,
  },
  separator: {
    height: 2,
    backgroundColor: colors.black,
  },
});

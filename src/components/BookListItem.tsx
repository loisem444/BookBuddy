import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

import { Book } from '../types';
import colors from '../colors';

type Props = {
  item: Book;
  onPress: () => void;
};

export const BookListItem = ({ item, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.coverImage }} style={styles.bookCoverImage} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
});

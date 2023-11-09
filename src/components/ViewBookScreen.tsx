import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button,Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { myBooks } from '../mockBooks';

interface Book {
  id: string;
  name: string;
  shortDescription: string;
  coverImage: string;
  authors: string;
  ISBN: string;
  Edition: string;
  price: string;
  contactEmail: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'ViewBook'>;

const ViewBookScreen: React.FC<Props> = ({ route, navigation }) => {

  const { book , previousScreen } = route.params;
  const [books, setBooks] = useState<Book[]>(myBooks);

  // Check if the previous screen is 'MyBookScreen'
  const isFromMyBooksScreen = previousScreen === 'MyBookScreen';
  console.log(isFromMyBooksScreen);

  // Function to handle delete action
  const handleDelete = (id: string) => {
    Alert.alert(
      'Confirm Action',
      'Are you sure you want to Delete?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancelled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
          const updatedBooks = books.filter(book => book.id !== id);
          setBooks(updatedBooks);
          navigation.replace('MyBooks');

          }
        },
      ],
      { cancelable: true }
    );
  };

  // Function to handle edit action
  const handleEdit = () => {
    navigation.replace('EditBook');

  };

  return (

    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: book.coverImage }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{book.name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.author}>ISBN: {book.ISBN}</Text>
        <View style={styles.separator} />
        <Text style={styles.author}>Edition: {book.Edition}</Text>
        <View style={styles.separator} />
        <Text style={styles.author}>Authors: {book.authors}</Text>
        <View style={styles.separator} />
        <Text style={styles.author}>price: {book.price}</Text>
        <View style={styles.separator} />
        <Text style={styles.author}>contactEmail: {book.contactEmail}</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>
          Description: {book.shortDescription}
        </Text>
      </View>

     {isFromMyBooksScreen && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(book.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>

  );
};

export default ViewBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom:20,
  },
  imageContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 15, 
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  detailsContainer: {
    // flex: 2,
    padding: 20,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 15, 
    marginTop:5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
  separator: {
    height: 2,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    marginTop:3
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginBottom:5,
    padding: 20,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 15,
  },
  deleteButton: {
    width: 125,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(238, 75, 43, 0.5)',
    margin: 10,
  },
  editButton: {
    width: 125,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(80, 200, 120, 0.5)',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

});


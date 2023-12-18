import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Button, Icon, Searchbar } from 'react-native-paper';
import React from 'react';

export default function SearchBox({
  enteredText,
  inputHandler,
  clearPressHandler,
}) {
  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.textInput}
        maxLength={16}
        autoCapitalize='characters'
        autoCorrect={false}
        value={enteredText}
        onChangeText={inputHandler}
        placeholder='Search'
        placeholderTextColor='black'
        keyboardAppearance='dark'
      /> */}
      <Searchbar
        placeholder='Search'
        placeholderTextColor={'gray'}
        value={enteredText}
        style={styles.textInput}
        onChangeText={inputHandler}
        keyboardAppearance='dark'
        autoCapitalize='characters'
        mode='bar'
        elevation={5}
        inputStyle={{ fontSize: 30, textDecorationStyle: 'solid' }}
        onClearIconPress={clearPressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  textInput: {
    height: 58,
    width: '100%',
    fontSize: 38,
    backgroundColor: '#eae0e0',
    color: 'whitesmoke',
    padding: 2,
    color: 'black',
    textAlign: 'center',
    marginTop: 4,
  },
  clearButton: {
    backgroundColor: '#c0c2d5',
    borderRadius: 4,
    marginLeft: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e1b1b',
  },
});

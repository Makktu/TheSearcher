import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  InputAccessoryView,
} from 'react-native';
import React from 'react';

export default function SearchBox({
  enteredText,
  inputHandler,
  clearPressHandler,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={16}
        autoCapitalize='characters'
        autoCorrect={false}
        value={enteredText}
        onChangeText={inputHandler}
        placeholder='Search'
        placeholderTextColor='black'
        keyboardAppearance='dark'
      />
      <Pressable onPress={clearPressHandler} style={styles.clearButton}>
        <View>
          <Text style={styles.clearText}>CLEAR</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  textInput: {
    height: 70,
    width: '76%',
    fontSize: 26,
    backgroundColor: '#eae0e0',
    color: 'whitesmoke',
    padding: 2,
    color: 'black',
    textAlign: 'center',
    borderRadius: 4,
  },
  clearButton: {
    width: '20%',
    height: 70,
    backgroundColor: '#5f6276',
    borderRadius: 4,
    marginLeft: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

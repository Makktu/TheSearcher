import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import { Keyboard } from 'react-native';

const locationData = require('./../../data/locations.json');

export default function SearchScreen() {
  const [keyboardShowing, setKeyboardShowing] = useState(false);

  Keyboard.addListener('keyboardDidHide', () => {
    console.log('showing');
    setKeyboardShowing(false);
  });
  Keyboard.addListener('keyboardDidShow', () => {
    console.log('hiding');
    setKeyboardShowing(true);
  });

  const inputHandler = () => {
    console.log('this');
  };
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior='padding' enabled>
      <View style={styles.container}>
        <View
          style={
            keyboardShowing
              ? styles.searchContainerWithKeyboard
              : styles.searchContainer
          }
        >
          <SearchBox inputHandler={inputHandler} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333f50',
    flexDirection: 'column',
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  searchContainerWithKeyboard: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  keyboard: {
    flex: 1,
  },
});

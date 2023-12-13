import { StyleSheet, KeyboardAvoidingView, View, Text } from 'react-native';
import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import OutcomeMessage from '../components/OutcomeMessage';
import DisplayResults from '../components/DisplayResults';
import { Keyboard } from 'react-native';
import searchData from '../../util/search-data';

export default function SearchScreen() {
  const [keyboardShowing, setKeyboardShowing] = useState(false);
  const [searching, setSearching] = useState(false);
  const [enteredText, setEnteredText] = useState('');
  const [results, setResults] = useState([]);
  const [outcomeMsg, setOutcomeMsg] = useState('');

  Keyboard.addListener('keyboardDidHide', () => {
    console.log('showing');
    setKeyboardShowing(false);
  });
  Keyboard.addListener('keyboardDidShow', () => {
    console.log('hiding');
    setKeyboardShowing(true);
  });

  const startSearching = (theText) => {
    if (!theText) {
      setResults([]);
      return;
    }
    const newResults = searchData(theText);
    if (newResults.length < 1 && theText.length > 2) {
      setOutcomeMsg('Nothing Found');
    } else {
      setOutcomeMsg('');
    }
    console.log(theText, newResults);
    setResults(newResults);
  };

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
    startSearching(enteredText);
  };

  const clearPressHandler = () => {
    // check that there is something to clear
    if (!enteredText) return;
    setEnteredText('');
    searchData('');
    setResults([]);
    setOutcomeMsg('');
  };

  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior='padding' enabled>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBox
            enteredText={enteredText}
            inputHandler={inputHandler}
            clearPressHandler={clearPressHandler}
          />
          {outcomeMsg && keyboardShowing ? (
            <OutcomeMessage>{outcomeMsg}</OutcomeMessage>
          ) : (
            <DisplayResults results={results} />
          )}
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
    top: 0,
    width: '100%',
  },
  searchContainerWithKeyboard: {
    position: 'absolute',
    top: 1,
    width: '100%',
  },
  keyboard: {
    flex: 1,
  },
});

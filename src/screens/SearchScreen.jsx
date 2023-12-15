import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import OutcomeMessage from '../components/OutcomeMessage';
import DisplayResults from '../components/DisplayResults';
import { Keyboard } from 'react-native';
import searchData from '../../util/search-data';
import LayoutEncompass from '../../util/LayoutEncompass';

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

    if (newResults == 'THE CREATOR') {
      setOutcomeMsg(newResults);
      return;
    }

    if (newResults.length < 1 && theText.length > 2) {
      setOutcomeMsg('Nothing Found');
    } else {
      setOutcomeMsg('');
    }
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
      <LayoutEncompass>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <SearchBox
              enteredText={enteredText}
              inputHandler={inputHandler}
              clearPressHandler={clearPressHandler}
            />
            {outcomeMsg ? (
              <OutcomeMessage>{outcomeMsg}</OutcomeMessage>
            ) : (
              <DisplayResults results={results} />
            )}
          </View>
        </View>
      </LayoutEncompass>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 50,
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

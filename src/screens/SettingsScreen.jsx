import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OutcomeMessage from '../components/OutcomeMessage';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <OutcomeMessage>There's nothing here yet...</OutcomeMessage>
      <Text style={styles.text}>
        The Searcher is an app for mobile and web. It is intended to be a
        user-friendly and intuitive to use.
      </Text>
      <Text style={styles.text}>
        It will enable the user to connect to any custom data set and perform an
        ad hoc, rapid search of it, with results displayed on the same screen.
      </Text>
      <Text style={styles.text}>Datasets loaded: UHCW Locations</Text>
      <Text style={styles.text}>5368 Objects</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333f50',
  },
  text: {
    fontSize: 16,
    color: 'white',
    padding: 20,
  },
});

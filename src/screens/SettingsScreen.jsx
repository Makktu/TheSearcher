import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OutcomeMessage from '../components/OutcomeMessage';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <OutcomeMessage>Nothing here yet...</OutcomeMessage>
      <Text style={styles.text}>TheSearcher is an app for mobile and web.</Text>
      <Text style={styles.text}>
        It will enable the user to connect to any custom data set and perform an
        ad hoc search with results displayed in realtime.
      </Text>
      <Text style={styles.text}>
        Users will be able to load data in any format.
      </Text>
      <Text style={styles.text}>
        Dataset loaded: UHCW Locations{'\n'}Type: JSON{'\n'}
        Searchable Objects: 5963
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333f50',
  },
  text: {
    fontSize: 22,
    color: 'white',
    padding: 10,
  },
});

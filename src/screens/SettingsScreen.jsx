import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OutcomeMessage from '../components/OutcomeMessage';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <OutcomeMessage>There's nothing here yet...</OutcomeMessage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333f50',
  },
});

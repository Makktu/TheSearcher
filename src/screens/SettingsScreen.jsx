import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333f50',
  },
});

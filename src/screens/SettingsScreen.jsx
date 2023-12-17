import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import OutcomeMessage from '../components/OutcomeMessage';

export default function SettingsScreen() {
  return (
    <ImageBackground
      source={require('./../../assets/img/Gears.png')}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <OutcomeMessage>Nothing here yet...</OutcomeMessage>
        <Text style={styles.text}>
          TheSearcher is an app for mobile and web.
        </Text>
        <Text style={styles.text}>
          It will enable the user to connect to any custom data set and perform
          an ad hoc search with results displayed in realtime.
        </Text>
        <Text style={styles.text}>
          Users will be able to load data in any format.
        </Text>
        <Text style={styles.text}>
          Dataset loaded: UHCW Locations{'\n'}Type: JSON{'\n'}
          Searchable Objects: 5963
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333f50',
    opacity: 0.8,
  },
  text: {
    fontSize: 22,
    color: 'white',
    padding: 10,
  },
});

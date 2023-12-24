import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import OutcomeMessage from '../components/OutcomeMessage';
import { Button, Icon, Searchbar } from 'react-native-paper';

export default function SettingsScreen() {
  return (
    <ImageBackground
      source={require('./../../assets/img/Gears.png')}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.container}>
        <OutcomeMessage>
          The Searcher is an app for mobile and web that searches any collection
          of data with results displayed in realtime as the user types.
        </OutcomeMessage>
        <Text style={styles.text}>
          Future versions will allow the loading of any data in any format from
          any source.
        </Text>
        <Text style={styles.text}>
          Current Dataset loaded:{'\n'}UHCW Locations{'\n'}
          {'\n'}Type: JSON{'\n'}
          {'\n'}
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

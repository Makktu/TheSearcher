import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function DisplayResults({ results }) {
  return (
    <View style={styles.displayArea}>
      {results ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item['Room Num']}
          renderItem={({ item }) => (
            <View
              style={
                results.length == 1 ? styles.singularStyle : styles.resultStyle
              }
            >
              <View>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Wing'].length > 14
                    ? item['Wing'].slice(0, 14)
                    : item['Wing']}
                </Text>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Department'].length > 18
                    ? item['Department'].slice(0, 18)
                    : item['Department']}
                </Text>
              </View>

              <View>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Description'].length > 12 && results.length !== 1
                    ? item['Description'].slice(0, 12)
                    : item['Description']}
                </Text>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Room Num']}
                </Text>
              </View>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    fontSize: 16,
    color: 'white',
    margin: 2,
    width: '100%',
    fontWeight: 'bold',
  },
  singularResult: {
    fontSize: 22,
    color: '#ffffff',
    margin: 2,
    width: '100%',
    fontWeight: 'bold',
  },
  displayArea: {
    flex: 1,
    padding: 10,
    // maxHeight: '90%',
  },
  resultStyle: {
    borderWidth: 2,
    borderColor: '#68757c',
    borderRadius: 10,
    marginVertical: 6,
    padding: 6,
    backgroundColor: '#23282c',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singularStyle: {
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 6,
    marginVertical: '5%',
    padding: 10,
    backgroundColor: '#343943',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

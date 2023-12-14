import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';

export default function LayoutEncompass({ children }) {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  console.log(windowHeight, windowWidth);
  return (
    <View
      style={{
        // and set size based on window
        height: windowHeight ?? '100vh',
        width: windowWidth ?? '100vw',

        // ensure parity between rn.web and rn.native regarding requiring a scrollview in order to have scrolling
        overflow: 'hidden',
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default trackCreationScreen = ({ navigation}) => {
  return (
    <View >
      <Text style={styles.textStyle}>Create Track</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

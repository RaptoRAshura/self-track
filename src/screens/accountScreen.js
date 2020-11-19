import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default accountScreen = ({ navigation}) => {
  return (
    <View >
      <Text style={styles.textStyle}>Accounts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});


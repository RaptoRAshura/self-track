import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default trackListScreen = ({ navigation}) => {
  return (
    <View >
      <Text style={styles.textStyle}>Track List</Text>
      <Button title="Go to Track Details" onPress = { () => navigation.navigate('trackDetail')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

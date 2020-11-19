import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default trackDetailScreen = ({ navigation}) => {
  return (
    <View >
      <Text style={styles.textStyle}>Track Detail</Text>
      <Button title="Go back to Track List" onPress = { () => navigation.navigate('trackList')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48,
  },
});

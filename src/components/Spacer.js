import { StyleSheet, View } from 'react-native';
import React from 'react';

export default  Spacer = ({ children }) => {
return <View style = { styles.space }>{ children }</View>
}
const styles = StyleSheet.create({
    space: {
        marginVertical: 10,
        marginHorizontal: 20
    }
}); 

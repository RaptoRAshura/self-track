import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default signUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style = { styles.container }>
      <Spacer />
      <Spacer>
        <Text h3 style={ styles.heading }>Sign Up For Trackers</Text>
      </Spacer>
      <Spacer />
      <Spacer>
        <Input label = "Email"
        autoCapitalize = "none"
        autoCorrect = { false }
        value = { email }
        onChangeText = { setEmail }/>
      </Spacer>
      <Spacer>
        <Input label = "Password"
        autoCapitalize = "none"
        autoCorrect = { false }
        secureTextEntry
        value = { password }
        onChangeText = { setPassword }/>
      </Spacer>
      { state.errorMessage ? <Text style = { styles.errorMessage }>{ state.errorMessage }</Text> : null }
      <Spacer>
        <Button 
          title = "Sign Up" 
          raised
          onPress = { () => signUp({ email, password }) }/>
      </Spacer>
      <Spacer>  
        <Button title = "Already have an account? Sign in!"  type = "clear" onPress = { () => navigation.navigate('signIn')}/>
      </Spacer>
    </View>
  );
};
signUpScreen.navigationOptions = () => {
  return { 
     headerShown: false
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  heading: {
    alignSelf: "center",
    marginBottom: 20
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 30
  }
});

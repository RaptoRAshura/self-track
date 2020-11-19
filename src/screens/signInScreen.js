import React, { useState, useContext }from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

export default signInScreen = ({ navigation}) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signIn } = useContext(AuthContext);
    return (
      <View style = { styles.container }>
        <Spacer />
        <Spacer>
          <Text h3 style={ styles.heading }>Sign In into Trackers</Text>
        </Spacer>
        <Spacer />
        <Spacer>
          <Input label="Email" 
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {email}
            onChangeText = {setEmail}
          />
        </Spacer>
        <Spacer>
          <Input label="Password"
              autoCapitalize = "none"
              autoCorrect = {false}
              secureTextEntry
              value = {password}
              onChangeText = {setPassword}
          />
        </Spacer>   
        <Spacer />
        <Spacer>
          <Button title="Sign In"/>
        </Spacer>
        <Spacer>  
          <Button title="Go to SignUp Screen" onPress = { () => navigation.navigate('signUp')}/>
        </Spacer>
      </View>
    );
  };
  signInScreen.navigationOptions = ()=> {
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
      alignSelf: "center"
    }
  });
  
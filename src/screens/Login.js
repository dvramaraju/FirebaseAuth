import React from 'react';
import {Styles} from '../Styles';
import {View, TextInput, TouchableOpacity, Text, Button} from 'react-native';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.inputBox}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={Styles.inputBox}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account yet? Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

export default Login;

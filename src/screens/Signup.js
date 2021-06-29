import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Styles} from '../Styles';
import Firebase from '../config/Firebase';

class Signup extends React.Component {
  handleSignUp = () => {
    const {email, password} = this.state;
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Profile'))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.inputBox}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          placeholder="Full Name"
        />
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
        <TouchableOpacity style={Styles.button} onPress={this.handleSignUp}>
          <Text style={Styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;

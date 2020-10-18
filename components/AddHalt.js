import React, { Component } from 'react';
import { StyleSheet, Button, Linking, View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const { setHalt } =  require("../database");

export default class AddHalt extends Component {

  state = {
    currentHalt: '',
  }

  handleHalt = (text) => {
    this.setState({ currentHalt: text })
  }

  validate = (currentHalt) => {
    if (!currentHalt) {
      alert('Please enter the halt')
    }
    else {
        this.setCurrentHalt(currentHalt)
    }
  }

  setCurrentHalt = (currentHalt) => {
    setHalt(currentHalt)
    {this.props.navigation.navigate('Home')}
  }

  render() {
  return (
        <View style={styles.container}>

          <Text style={styles.title}>Enter Current Halt</Text>

          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Halt"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleHalt}/>

          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.validate(this.state.currentHalt)
               }>
               <Text style = {styles.submitButtonText}> Add </Text>
          </TouchableOpacity>

          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        </View>
      );
  }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
    },
    input: {
      margin: 20,
      height: 40,
      width: 200,
      borderColor: '#7a42f4',
      borderWidth: 1,
      justifyContent: 'center'
   },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
    submitButtonText:{
        color: 'white'
    }
});
   
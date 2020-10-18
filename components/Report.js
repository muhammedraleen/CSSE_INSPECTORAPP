import React, { Component } from 'react';
import { StyleSheet, Button, Linking, View, Text } from 'react-native';
import axios from 'axios';

export default class Report extends Component {
  state = {
    currHalt: 'Galleface',

    customerDetails: [{
      name: 'MR',
      start: 'moratuwa',
      destination: 'kollupitiya',
      price: 50
    }]
  }
  handleSubmit = (event) => {
    
    const badCustomer = {
      currentHalt: "Galle Face",
      customerDetails: [{
        name: this.state.customerDetails.name,
        start: this.state.customerDetails.start,
        destination: this.state.customerDetails.destination,
        price: this.state.price,
      }]
    };

      axios.post(`http://localhost:8000/api/createBadCustomer`, { badCustomer })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  } 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fine Details</Text>
        <Button
        onPress={this.handleSubmit}
        title='Submit'
        />
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
  });
  
import React, { Component } from 'react';
import { StyleSheet, Button, Linking, View, Text, Slider, SafeAreaView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import CardView from 'react-native-cardview';

export default class Report extends Component {
  
  state = {
    value: 1,
    data: [
      { id: 1, addr: 'Hello' },
      { id: 2, addr: 'Hi, Nice to meet you' },
      { id: 3, addr: 'Hello, Nice to meet you too.' },
      { id: 4, addr: 'How are you?' }
    ]
  };

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }

  deleteData(id) {
    let filteredData = this.state.data.filter(item => {
      return item.id !== id;
    });
    this.setState({
      data: filteredData
    });
  }

  renderData(data) {
    if (data.length === 0) {
      return (
        <Text style={{ textAlign: 'center', padding: 10 }}>Data Empty</Text>
      );
    }
    return data.map(item => {
      return (
        <View
          key={item.id}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between'
          }}
        >
          <Text>{item.addr}</Text>
          <TouchableOpacity
            style={{ justifyContent: 'center' }}
            onPress={() => this.deleteData(item.id)}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  render() {
    const { data, value } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <CardView
            style={{
              backgroundColor: 'white'
            }}
            cardElevation={value}
            cardMaxElevation={value}
            cornerRadius={5}
            cornerOverlap={false}
          >
            <View style={styles.child}>
              <View style={styles.titleView}>
                <Text style={styles.title}>User Information</Text>
              </View>
              <View>{this.renderData(data)}</View>
            </View>
          </CardView>

          <Slider
            style={styles.sliderStyle}
            step={1}
            maximumValue={10}
            onValueChange={this.change.bind(this)}
            value={value}
          />

          <Text>{`cardElevation = ${value}`}</Text>
          <Text>{`cardMaxElevation = ${value}`}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    safeAreaView: {
      flex: 1
    },
    child: {
      width: 300
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: 'black'
    },
    titleView: {
      padding: 10,
      borderBottomColor: '#e3e3e3',
      borderBottomWidth: 1
    },
    sliderStyle: {
      width: 300,
      marginTop: 40
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  
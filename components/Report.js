import React, { Component } from 'react';
import { StyleSheet, 
          Button, 
          Platform, 
          View, 
          Text,  
          SafeAreaView, 
          ActivityIndicator} from 'react-native';
import ListView from "deprecated-react-native-listview";
import axios from 'axios';

export default class Report extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      //to disable which data is loading
      isLoading: true,
    };
  }

  async componentDidMount() {
    //calling Web Service just after screen is loaded
    return fetch('http://192.168.8.101:8000/api/badCustomers')
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    //Divider for the list item
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#080808' }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      //returning the loader view while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    } else {
      //returning the main view after data loaded successfully
      return (
        <View style={styles.MainContainer}>
            <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={rowData => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
               }}>
                <Text style={styles.textViewContainerHeading}>
                  {rowData.booking[0] + rowData.currentHalt}
                </Text>
                <Text style={styles.textViewContainer}>{rowData.body}</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    MainContainer: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 20 : 30,
      backgroundColor: '#ffffff',
      padding: 5,
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
    textViewContainerHeading: {
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 20,
      color: '#000000',
      fontWeight: 'bold',
    },
    textViewContainer: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  
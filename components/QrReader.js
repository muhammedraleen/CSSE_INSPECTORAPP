import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Button, Text } from 'react-native';

export default class Scan extends Component {

    state = {
        routes: [],
        bookingDetails: [],
    }
    
    render() {
        return(
            <View style={styles.scrollViewStyle}>
                <Button
                title='Generate'
                onPress={generateFine}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#99003d'
    },
});

function generateFine(QRDetails) {
    const routeId = "7a581e3a-9b5d-433f-8d5b-9e53074df2bd";
    
    let route = [];
    axios.get('http://192.168.8.101:8000/api/halts/'+routeId).then(res => {
        route.push(res.data);
        console.log("first",route.length);
    });

    

}

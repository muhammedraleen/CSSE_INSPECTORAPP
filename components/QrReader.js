import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, Button, Text, Dimensions, TouchableOpacity } from 'react-native';

import { BarCodeScanner, BarCodeScannerResult, Constants } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

const finderWidth= (number) = 280;
const finderHeight= (number) = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

export default class Scan extends Component { 

    state = {
        routes: [],
        bookingDetails: [],
        type: BarCodeScanner.Constants.Type.back,
        scanned: false
    }

    setType = (stype) => {
        this.setState({type: stype})
    }

    setScanned = (text) => {
        this.setState({scanned:text})
    }

    /**
     * @param {BarCodeScannerResult} scanningResult
     */

    handleBarCodeScanned = (scanningResult) => {
                if (!this.state.scanned) {
                    const {type, data, bounds: {origin} = {}} = scanningResult;
                    const {x, y} = origin;
                    if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
                        this.setScanned(true);
                        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
                    }
                }
    };
    
    render() {
        return(
            
            <View style={styles.scrollViewStyle}>
                <BarCodeScanner 
                onBarCodeScanned={this.handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.container]}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}>

                <View style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>

                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                        }}
                        onPress={() => {
                            this.setType(
                                type === BarCodeScanner.Constants.Type.back
                                    ? BarCodeScanner.Constants.Type.front
                                    : BarCodeScanner.Constants.Type.back
                            );
                        }}>
                        <Text style={{fontSize: 18, margin: 5, color: 'white'}}> Flip </Text>
                    </TouchableOpacity>

                </View>

                <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
                {this.state.scanned && <Button title="Scan Again" onPress={() => this.setScanned(false)}/>}
                </BarCodeScanner>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        backgroundColor: '#99003d'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

function generateFine(QRDetails) {
    const routeId = "7a581e3a-9b5d-433f-8d5b-9e53074df2bd";
    
    let route = [];
    axios.get('http://192.168.8.103:8000/api/halts/'+routeId).then(res => {
        route.push(res.data);
        console.log("first",route.length);
    });

    

}

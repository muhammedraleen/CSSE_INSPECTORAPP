import * as React from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, View, Button, Text } from 'react-native';

const { getHalt } =  require("../database");

export default function Home ({ route, navigation: { navigate } }) {

    const {user} = route.params;
    return (
      
      <View styles={styles.container}>

        <Text styles={styles.title}>
          Hi { user }
        </Text>

        <Button
          onPress={()=> navigate("AddHalt")}
          title="Enter Current Halt"
          styles={styles.button}
        />
        
        <Button
          disabled={getHalt()==false}
          onPress={()=> navigate("Scanner")}
          title="Scan Code"
          styles={styles.button}
        />

        <Button
          onPress={()=> navigate("Report")}
          title="Fined Customers"
          styles={styles.button}
        />

      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
      marginTop: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
});

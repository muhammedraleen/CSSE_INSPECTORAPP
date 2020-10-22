import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const { setUser } =  require("../database");

export default class Login extends Component {
    state={
        email:"",
        password:""
    }
    validate = (username, password) => {
        if(!username){
          alert('Please enter the username')
        } else if(!password){
          alert('please enter the password')
        } else {
          this.login(username,password)
        }
    }

    login = async (username, password) => {
      try{
          await fetch('http://192.168.8.101:8000/api/authenticate-inspector', {
              method: "POST",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ username,password }),
          })
          .then((res) => res.json())
          .then((response) => {
              console.log(response);
              if (!response.isError) {
                  alert(response.msg);
                  setUser(username);
                  {this.props.navigation.navigate('Home',{user: username})}
              } else {
                  alert(response.msg,'Please retry with correct credentials');
              }
          })
      } catch (error) {
          alert('Error when authenticating, Please try again later');
          console.log(error);
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
            <TextInput  
                style={styles.inputText}
                placeholder="Password..." 
                secureTextEntry
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}
          onPress={()=> this.validate(this.state.email,this.state.password)}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
});


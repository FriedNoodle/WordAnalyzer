/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text,TextInput, View, Button} from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      word:'',
      wordCount:'',
      vowelCount:0,
      consonantCount:0
    }
  }


  //Function for analyzing words into 2 category:vowels and consonants
  analyzeWord = () => {

    var vowelList = 'aeiouAEIOU';                   //list of vowel for string comparison
    var vcount = 0;
    var ccount = 0;

    let myString = this.state.word;     
    let wordLength = myString.length;               //number of chars in word
    let split = myString.split('');                 //split string into array

    this.setState({wordCount:wordLength}, ()=>{

      //Loop through split array
      for(var i=0;i<wordLength;i++){

        //Check for vowels
        if(vowelList.indexOf(split[i])!== -1){
          vcount++;
          this.setState({vowelCount:vcount});
        }
        
        //Check for consonants
        else {
          ccount++;
          this.setState({consonantCount:ccount});
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} placeholder='Word here'/>
        <Text></Text>
        <Button color="#4286f4" onPress={this.analyzeWord} title='Analyze'/>
        <Text>Word: {this.state.word}</Text>
        <Text>No of Vowels: {this.state.vowelCount}</Text>
        <Text>No of Consonant: {this.state.consonantCount}</Text>
        <Text>No of Characters: {this.state.wordCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

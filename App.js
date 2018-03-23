import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Weather from './Weather';
import { Font } from 'expo';
 

const API_KEY = "d524512601242877f76432108adc4274";


export default class App extends Component {
  state = {
    isLoaded: false,
    error: null, 
    temperature: null,
    name: null 
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error: error
      });   
    }
  );
  }
  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      });
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (     
      <View style={styles.container}>
        <StatusBar hidden = {true} />
    {isLoaded ? (<Weather weatherName={name} temp={Math.ceil(temperature - 273.15)}/>) : (
        <View style = {styles.loading}>
          <ActivityIndicator size="large" color="#ffffff"/>
          <Text>{"\n"}</Text>
          <Text style={styles.loadingText}>내가 날씨를 알아봐줄게!</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}  
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1, 
    backgroundColor: "#f4c3ab",
    justifyContent: "center",
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 24,
    color: "white",
  }
});

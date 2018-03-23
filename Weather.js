import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain:{
        colors:["#00C6FB", "#005BEA"],
        title: "밖에 비가오고 있어!",
        subtitle: "우산 꼭 챙기구\n춥지않게 겉옷챙겨가😊",
        icon: 'weather-pouring'
    },
    Clear:{
        colors:["#FEF253","#FF7300"],
        title: "밖에 날씨가 굉장히 맑고 좋다",
        subtitle: "날씨만큼이나 오늘 하루도 좋길바라💕",
        icon: 'weather-sunny'
    },
    Thunderstorm:{
        colors:["#00ECBC","#007ADF"],
        title: "밖에 천둥번개가 치고있어😟",
        subtitle:"우산챙겨서 조심해서 다니구\n나무나 전봇대 조심해!",
        icon: 'weather-lightning-rainy'
    },
    Clouds:{
        colors:["#D7D2CC","#304352"],
        title: "오늘은 구름낀 날씨야!",
        subtitle:"선선해서 좋긴한데,\n비가올수도 있으니 조그만 우산 챙겨🌂",
        icon: 'weather-cloudy'
    },
    Snow:{
        colors:["#7DE2FC","#B9B6E5"],
        title: "우와 밖에 눈이 오고 있어🌨",
        subtitle:"눈맞으면 감기걸리니까\n우산챙기구 따듯하게 입구나가😘",
        icon: 'weather-snowy'          
    },
    Drizzle:{
        colors:["#89F7FE","#66A6FF"],
        title: "밖에 이슬비가 내리구있어!",
        subtitle:"비안맞게 우산챙기구\n퇴근하고 오뎅탕에 소주한잔하실?🍶",
        icon: 'weather-rainy'
    },
    Haze:{
        colors:["#D7D2CC","#304352"],
        title: "오늘은 안개낀 날씨야",
        subtitle:"어둑어둑하니까 차조심하구\n센치하거나 그러면 나랑 통화해😍", 
        icon: 'weather-fog'      
    },
    Mist:{
        colors:["#D7D2CC","#304352"],
        title: "오늘은 안개낀 날씨야",
        subtitle:"어둑어둑하니까 차조심하구\n센치하거나 그러면 나랑 통화해😍", 
        icon: 'weather-fog'   
    }
};

function Weather({ weatherName, temp }){
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
          <View style={styles.upper}>
             <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
             <Text style={styles.temp}>{temp}˚</Text> 
          </View>
          <View style={styles.lower}>
             <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
             <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
          </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },    
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        coloㄹr: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 17,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})
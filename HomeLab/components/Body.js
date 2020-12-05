import React, {useState, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, Linking } from 'react-native';
import SSH from 'react-native-ssh';
// import {NetworkInfo} from 'react-native-network-info';

// set up states for commands




// var command = 'sensors';
const checkTemp = (config, command) => {
    console.log ("Trying to connect to host.........")
    SSH.execute(config, command).then(
        result => console.log(result),
        error =>  console.log('Error:', error), console.log("end sessions............")
      );
}

const checkStorage = (config, command) => {
    console.log ("Trying to connect to host.........")
    SSH.execute(config, command).then(
        result => console.log(result),
        error =>  console.log('Error:', error), console.log("end sessions............")
      );

}

const yamurl = "https://theyamcloud.com";
  
  //style--------------------------
const Body =({title}) => {
    var config = {user: 'mphan', host: '192.168.1.35', password: 'Songmay1!'};
    var command = "ifconfig"
    console.log(config, command)

    return (
        <View>
            {/* <OpenURLButton url={yamurl} > YamCloud Portal </OpenURLButton> */}

            <TouchableOpacity
                style = {styles.btnurl}
                onPress={ ()=>{ Linking.openURL(yamurl)}}>
                <Text style={styles.btnTxt}> YamCloud Portal </Text>
            </TouchableOpacity>
            <Text style = {styles.btnsmall}> If you're at home, turn on VPN before accessing the portal</Text>
            <TouchableOpacity 
                style ={styles.btn}
                onPress={checkStorage(config, "df -h --total")}>
                <Text style={styles.btnTxt}> Check Storage </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style ={styles.btnSto}
                onPress={checkTemp(config, "sensors")}>
                <Text style={styles.btnTxt}> Check Temperature</Text>
            </TouchableOpacity>



        </View>

    );
};

const styles = StyleSheet.create({
btn:{
    backgroundColor: 'teal',
    padding: 10,
    margin: 20,
},
btnurl:{
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
},

btnSto:{
    backgroundColor: 'green',
    padding: 10,
    margin: 20,
},
btnTxt:{
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
},
btnsmall:{
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
},

});

export default Body;
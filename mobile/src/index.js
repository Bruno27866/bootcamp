import React from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';

export default function App() {
    return (
    <>
    <StatusBar barStyle = "light-content" backgroundColor = "#7159c1"/>
    <View style = {styles.container}>
        <Text style = {styles.title}>Hello GoStack</Text>
    </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 'bold'
    }
});
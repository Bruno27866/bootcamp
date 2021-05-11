import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);
    return (
    <>
        <StatusBar barStyle = "light-content" backgroundColor = "#7159c1"/>

        <FlatList
        style = {styles.container}
        data = {projects}
        keyExtractor = {project => project.id}
        renderItem = {({ item : project }) =>(
            <Text style = {styles.project}>{project.title}</Text>
        )}
        />
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
    project: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 'bold'
    }
});
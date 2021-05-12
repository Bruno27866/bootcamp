import React, {useEffect, useState} from 'react';
import {
    SafeAreaView, 
    FlatList, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    StatusBar
} from 'react-native';
import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);
    async function handleAddProject(){
        const response = await api.post('projetcs',{
            title: `Novo projeto ${Date.now()}`,
            owner: 'Bruno Alencar'
        });
        const projetc = response.data;
        setProjects([...projects, project]);
    }
    return (
    <>
        <StatusBar barStyle = "light-content" backgroundColor = "#7159c1"/>
        <SafeAreaView style = {styles.container}> 
        <FlatList
                     data = {projects}
                     keyExtractor = {project => project.id}
                     renderItem = {({ item: project }) =>(
                     <Text style = {styles.project}>{project.title}</Text>
                )}
             />
             <TouchableOpacity 
             activeOpacity = {0.6} 
             style = {styles.button} 
             onPress = {handleAddProject}
             >
                 <Text style = {styles.buttonText}>Adicionar Projeto</Text>
             </TouchableOpacity>
        </SafeAreaView>
         </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#FFFFFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttoText: {
        fontWeight: 'bold',
        fontSize: 16,    
    },
});
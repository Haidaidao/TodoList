import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Task from './components/Task';
import stylesApp from './App.components.style'
import Form from './components/Form';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [taskList,setTaskList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getListFromStorage();
      setTaskList(result || []);
    };
  
    fetchData();
  },[])

  const saveListToStorage = async (list) => {
    try {
      const jsonString = JSON.stringify(list);
      await AsyncStorage.setItem('list', jsonString);
    } catch (e) {
      // Error saving data
      console.error(e);
    }
  };

  const getListFromStorage = async () => {
    try {
      const jsonString = await AsyncStorage.getItem('list');
      return jsonString != null ? JSON.parse(jsonString) : null;
    } catch (e) {
      // Error reading data
      console.error(e);
      return null;
    }
  };

  const clearListFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('list');
    } catch (e) {
      // Error clearing data
      console.error(e);
    }
  };
  

  const handleAddTask = async (task) => {
    const updatedTaskList = [...taskList, task];
    setTaskList(updatedTaskList);
    await saveListToStorage(updatedTaskList);
  }
  
  const handleDeleteTask = (index) => {
    Alert.alert('Thông báo', `Bạn có muốn xóa ${taskList[index]}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { 
        text: 'OK', 
        onPress: async () => {
          const updatedTaskList = [...taskList];
          updatedTaskList.splice(index, 1);
          setTaskList(updatedTaskList);
          await saveListToStorage(updatedTaskList);
        }
      },
    ])
  }
  

  return (
    <View style={stylesApp.container}>

      <View style={stylesApp.body}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color:'#00CCFF'}}>
          TODO LIST
        </Text>

        <ScrollView style={styles.items}>
          {taskList.map((item,index) => 
            {
              return <Task key={index} index={index+1} value={item} handleDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
          
        </ScrollView>
      </View>

      <Form onAddtask={handleAddTask}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
  
});

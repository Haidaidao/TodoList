import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Task = (props) => {
  
  return (
    <TouchableOpacity
      onPress={props.handleDeleteTask}>
        <View style={styles.item}>

            <View style={{backgroundColor: props.index%2==0? '#00CCFF' : '#00FF33' , borderRadius: 10}}>
              <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>
                  {props.index}
              </Text>
            </View>
            
            <Text style={{paddingLeft: 10}}>
                {props.value}
            </Text>
            
        </View>
    </TouchableOpacity>
  )
}

export default Task
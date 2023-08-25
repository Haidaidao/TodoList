import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView , Keyboard} from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'

const Form = (props) => {

    const [text,setText] = useState('')
    const inputRef = useRef(null)
    const handleAddTask = () => {

        props.onAddtask(text)
        
        setText('')
        if (inputRef.current && inputRef.current.clear) {
            Keyboard.dismiss()
            inputRef.current.clear();
        }
    }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.input}>
            <TextInput
                ref={inputRef}
                style={styles.textInput}
                placeholder="Your task"
                // value={text}
                onChangeText={text => setText(text)}
            />

            <View style={{justifyContent: 'center', alignItems: 'center', width: 50, height: 50, backgroundColor: '#00CCFF', borderRadius: 50, marginTop: 5}}>
                <TouchableOpacity
                onPress={ handleAddTask }>
                    <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>
                    +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Form
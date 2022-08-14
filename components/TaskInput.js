import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

function TaskInput(props){
    const [enteredTaskText, setEnteredTaskText] = useState('');
    function taskInputHandler(enteredText) {
        setEnteredTaskText(enteredText);
    };

    function addTaskHandler() {
        props.onAddTask(enteredTaskText);
        setEnteredTaskText('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Add task here' 
                    onChangeText={taskInputHandler}
                    value={enteredTaskText}
                    />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Task' onPress={addTaskHandler} color={'white'} /> 
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={'red'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#B2BEB5',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#305535',
        backgroundColor: 'white',
        color: '#305535',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
    },
    image:{
        width: 100,
        height: 100,
        margin: 20
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})
import { StyleSheet, View, Text, Pressable } from 'react-native';

function TaskItem(props) {
    return (
        <Pressable 
        onPress={props.onDeleteTask.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
        >
            <View style={styles.task}>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
        </Pressable>

    );
};

export default TaskItem;

const styles = StyleSheet.create({
    task: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#305535',
    },
    pressedItem: {
        opacity: 0.5,
    },
    taskText: {
        color: 'white'
    }
});
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todoTasks, setTodoTasks] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredTaskText) {
    setTodoTasks(currentTasks => [
      ...currentTasks, 
      {text: enteredTaskText, key: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteTaskHandler(id) {
    setTodoTasks(currentTasks => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  
  

  return (
    <View style={styles.appContainer}>
      <Button title='Add Task' 
      color="white" 
      onPress={startAddGoalHandler} 
      />
      <TaskInput 
      visible={modalIsVisible} 
      onAddTask={addTaskHandler}
      onCancel={endAddGoalHandler} 
      />
      <View style={styles.taskContainer}>
        <FlatList 
          data={todoTasks} 
          renderItem={(taskData) => {
            return (
            <TaskItem 
            text={taskData.item.text}
            id={taskData.item.id}
            onDeleteTask={deleteTaskHandler} 
            />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  taskContainer: {
    flex: 4
  }
});

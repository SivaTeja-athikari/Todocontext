import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GloablContext from './contextApi/GlobalContext';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

const Stack = createNativeStackNavigator();
export class App extends Component {
  state = {
    task: '',
    taskList: [],
    tempId: '',
  };
  addTask = (task: any) => {
    console.log(task);
    if (this.state.task !== '') {
      let todo = {
        id: Date.now(),
        task: this.state.task,
      };
      const list = [...this.state.taskList, todo];

      this.setState({taskList: list, task: ''});
    }
  };
  handleTask = (task: string) => {
    console.log(task);
    this.setState({task: task});
  };

  handleEditTask = (eachTodo: {id: string; task: string}) => {
    this.setState({tempId: eachTodo.id, task: eachTodo.task});
  };

  deleteTask = (taskId: any) => {
    this.setState(this.state.taskList.splice(taskId, 1));
  };
  render() {
    return (
      <GloablContext.Provider
        value={{
          task: this.state.task,
          taskList: this.state.taskList,
          addTask: this.addTask,
          handleTask: this.handleTask,
          deleteTask: this.deleteTask,
        }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
          </Stack.Navigator>
        </NavigationContainer>
      </GloablContext.Provider>
    );
  }
}

export default App;

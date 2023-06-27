import React from 'react';

const GloablContext = React.createContext({
  taskList: [],
  task: '',
  addTask: (task: any) => {},
  handleTask: (task: string) => {},
  deleteTask: (taskId: any) => {},
});

export default GloablContext;

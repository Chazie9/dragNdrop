import React from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './initial-data'
import Column from './column'


import React, { Component } from 'react';

class App extends Component {
  state = initialData
  render() {
    return this.state.columnOrder.map(columnId => {
      console.log('columnID', columnId)
      const column = this.state.columns[columnId]
      console.log('column', column)
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

      return <Column key={column.id} column={column} tasks={tasks} />
    })

    
  }
}

export default App;
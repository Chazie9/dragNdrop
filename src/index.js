import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import initialData from './initial-data'
import Column from './Column'
import  { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {
  
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if(!destination) {
      return;
    }

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return 
    }

    const column = this.state.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    }

    this.setState(newState)

    // this optimistically updated our UI without waiting for several confirmation. 
    // How you persist this change to your data store, will depend on your state management solution and server architecture.
    // A simple strategy for persisting changes would be to call an end point, after performing this optimistic update to let your server know that a reorder has occurred.
  }



  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          console.log('columnID', columnId)
          const column = this.state.columns[columnId]
          console.log('column', column)
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })}  
      </DragDropContext>
    )      
    
  }
}

ReactDOM.render(<App />,  document.getElementById('root'));



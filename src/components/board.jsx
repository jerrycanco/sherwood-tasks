import React from 'react';
import Column from './column';
import initialData from '../initial-data';

export default class Board extends React.Component {
    state = initialData;

    render() {
      return this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
        return <Column key={column.id} column={column} tasks={tasks} />;
      });
    }
  }
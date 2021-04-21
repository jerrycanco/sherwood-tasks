import React from 'react';
import Task from './task';

export default class Column extends React.Component {
    render() {
      return (
        <div class="ml-4 flex-shrink-0 flex flex-col bg-gray-100 rounded-md">
            <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">{this.props.column.title}</h3>
            <div class="flex-1 min-h-0 overflow-y-auto">
                <ul class="pt-1 pb-3 px-3">
                    {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
                </ul>
            </div>
        </div>
      );
    }
  }

import React from 'react';
import Task from './Task';

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
      if (nextProps.tasks === this.props.tasks) {
        return false;
      }
      return true;
    }
    render() {
      return this.props.tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ));
    }
  }

export default class TaskList extends React.Component {
    render() {
        return (
            // <div class={`ml-4 flex-shrink-0 flex flex-col ${this.props.backgroundColor} rounded-md`}>
            // <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">{this.props.column.title}</h3>
            //   <div class="flex-1 min-h-0 overflow-y-auto">
            <ul class="pt-1 pb-3 px-3">
                <InnerList tasks={this.props.tasks} />
            </ul>
        );
    }
}
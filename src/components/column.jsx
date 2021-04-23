import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskList from './TaskList';

export default class Column extends React.Component {
  render() {
    return (
      <Droppable droppableId={this.props.column.id}>
        {(provided, snapshot) => {
          const backgroundColor = (snapshot.isDraggingOver ? 'transition duration-200 ease-in bg-gray-200' : 'transition duration-200 ease-in bg-gray-100')

          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div class={`ml-4 flex-shrink-0 flex flex-col ${backgroundColor} rounded-md`}>
                <h3 class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium text-gray-900">{this.props.column.title}</h3>
                <div class="flex-1 min-h-0 overflow-y-auto">
                  <TaskList tasks={this.props.tasks} column={this.props.column} backgroundColor={backgroundColor} />
                  {provided.placeholder}
                </div>
              </div>
            </div>
          )
        }}
      </Droppable>
    );
  }
}



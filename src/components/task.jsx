import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskContainer from './TaskContainer';

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => {
                    const backgroundColor = ( snapshot.isDragging ? 'bg-green-200' : 'bg-white')

                    return (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <TaskContainer key={this.props.task.id} task={this.props.task} index={this.props.index} backgroundColor={backgroundColor} />
                    </div>
                    )
                }}
            </Draggable>
        );
    }
}


// export default class Task extends React.Component {
//     render() {
//       return (
//           <li class="mt-3">
//           <a href="#" class="block p-5 bg-white rounded-md shadow">
//           <div class="flex justify-between">
//               <p class="text-sm font-medium leading-snug pr-4 text-gray-900">
//                   {this.props.task.content}
//               </p>
//               <img
//               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
//               alt="avatar"
//               class="h-5 w-5 rounded-full"
//               />
//           </div>
//           <div class="flex justify-between mt-5">
//               <div class="text-sm text-gray-600 pr-4"><time datetime="2020-10-12">Sep 15</time></div>
//               <div>
//               <span class="inline-flex items-center leading-tight px-2 py-1 rounded-full bg-green-100">
//                   <svg class="h-2 w-2" viewBox="0 0 8 8" fill="#00bfa5">
//                   <circle cx="4" cy="4" r="3" />
//                   </svg>
//                   <span class="text-sm font-medium text-teal-500 rounded-full ml-1">Feature Request</span>
//               </span>
//               </div>
//           </div>
//           </a>
//           </li>
//       );
//     }
//   }
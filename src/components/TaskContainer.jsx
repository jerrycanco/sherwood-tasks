import React from 'react';
import TaskDetails from './TaskDetails';

export default class TaskContainer extends React.Component {
    render() {
        return (
            <li class="mt-3">
                <a href="#" class={`block p-5 rounded-md shadow ${this.props.backgroundColor}`}>
                    <div class="flex justify-between">
                        <p class="text-sm font-medium leading-snug pr-4 text-gray-900">
                            {this.props.task.title}
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                            alt="avatar"
                            class="h-5 w-5 rounded-full"
                        />
                    </div>
                    <TaskDetails tag={this.props.task.tag} />
                </a>
            </li>
        );
    }
}

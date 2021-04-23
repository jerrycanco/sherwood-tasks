import React from 'react';

var classNames = require('classnames');

export default class TaskDetails extends React.Component {
    render() {

        const backgroundColor = ( this.props.tag === 'Routine' ? 'bg-green-100' : this.props.tag === 'Priority' ? 'bg-yellow-200': 'bg-red-200')

        return (
            <div class="flex justify-between mt-5">
                <div class="text-sm text-gray-600 pr-4"><time datetime="2020-10-12">Sep 15</time></div>
                <div>
                    <span class={`inline-flex items-center leading-tight px-2 py-1 rounded-full ${backgroundColor}`}>
                        <span class="text-sm font-medium text-teal-500 rounded-full ml-1">{this.props.tag}</span>
                    </span>
                </div>
            </div>
        )
    }
}
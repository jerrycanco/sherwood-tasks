import React from 'react';

export default class Header extends React.Component {

    render() {
      return (
        <div class="flex-shrink-0 border-b-2 border-gray-200">
          <header class="px-6">
            <div class="flex justify-between items-center border-gray-200 py-3">
              <div class="flex-1 flex"></div>

              <div class="flex items-center">
                <button>
                  <svg class="text-gray-600" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.62 8.05a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9zM14.35 21.05a1.999 1.999 0 01-3.46 0"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button class="ml-6">
                  <img
                    class="h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                    alt="profile"
                  />
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between py-2">
              <div class="flex items-center">
                <h2 class="text-2xl font-semibold text-gray-900 leading-tight">All Tasks</h2>

                <div class="ml-6 flex flex-center">
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      alt="avatar1"
                    />
                  </span>
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                      alt="avatar2"
                    />
                  </span>
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144&q=80"
                      alt="avatar3"
                    />
                  </span>
                  <span class="-ml-2 rounded-full border-2 border-white">
                    <img
                      class="h-6 w-6 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1555435024-2c4d456b63be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80"
                      alt="avatar4"
                    />
                  </span>
                </div>
              </div>

              <div class="flex">
                <span class="p-1 inline-flex border bg-gray-200 rounded-md">
                  <button class="px-2 py-1 rounded">
                    <svg class="text-gray-600" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                  </button>
                  <button class="px-2 py-1 bg-white rounded shadow">
                    <svg class="text-gray-600" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        d="M12.933 3.555v18m0-18h7a2 2 0 012 2v14a2 2 0 01-2 2h-7v-18zm0 0h-7a2 2 0 00-2 2v14a2 2 0 002 2h7v-18z"
                      />
                    </svg>
                  </button>
                </span>
                <button
                  class="ml-3 flex items-center justify-between text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      d="M12.279 5.333v14M5.279 12.334h14"
                    />
                  </svg>
                  <span class="text-sm text-gray-200">New Task</span>
                </button>
              </div>
            </div>
          </header>
        </div>
      );
    }
  }
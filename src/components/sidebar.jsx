import React from 'react';
import logo from '../img/logo.svg'

export default class Sidebar extends React.Component {
    render() {
        
      return (
        <div
        class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        class="hidden lg:block w-64 bg-gray-100 border-r px-8 py-4 overflow-auto"
      >
        <img src={logo} alt="logo" width="45" />
        <nav class="mt-8">
          <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Tasks</h3>
          <div class="mt-2 -mx-3">
            <a href="#" class="flex justify-between items-center bg-gray-200 rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-900">All</span>
              <span class="text-sm text-gray-700 font-semibold">36 </span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Assigned to me</span>
              <span class="text-sm text-gray-600 font-semibold">2 </span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Created by me</span>
              <span class="text-sm text-gray-600 font-semibold">4 </span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Archived</span>
              <span class="text-sm text-gray-600 font-semibold"></span>
            </a>
          </div>

          <h3 class="mt-8 text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Teams</h3>
          <div class="mt-2 -mx-3">
          <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">CO</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">RXO</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">RSM</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">CC</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">S1</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">S2</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">S7</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Alpha</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Bravo</span>
            </a>
            <a href="#" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Charlie</span>
            </a>
            <a href="https://objcdc9/id:BQ22871788/document/versions/published" class="flex justify-between items-center rounded-lg px-3 py-2">
              <span class="text-sm font-medium text-gray-600">Delta</span>
            </a>
          </div>
          <button class="flex items-center text-sm font-medium text-gray-60 mt-2 hover:bg-gray-300 px-2 py-2 rounded">
            <svg class="text-gray-500" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.279 5.333v14M5.279 12.334h14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-sm text-gray-500 ml-2">Add Team</span>
          </button>
        </nav>
      </div>
      );
    }
  }
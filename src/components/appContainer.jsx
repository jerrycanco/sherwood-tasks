import React from 'react';
import Sidebar from './sidebar';
import Board from './board';
import Header from './header';

export default class AppContainer extends React.Component {
    render() {
      return (
        <div id="app" class="h-screen flex">
          <Sidebar></Sidebar>
          <div class="flex-1 min-w-0 flex flex-col bg-white">
            <Header></Header>
            <div class="flex-1 overflow-auto">
              <main class="p-3 h-full inline-flex">
                <Board></Board>
              </main>
            </div>
          </div>
        </div>
      );
    }
  }
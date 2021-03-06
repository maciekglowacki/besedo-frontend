import React from 'react';
import { MainView } from './components/MainView';
import { Topbar } from './components/Topbar';

import './tailwind.output.css';

function App() {
  return (
    <div className="flex flex-col h-screen font-mono bg-pink-50 ">
      <Topbar />
      <MainView  />
    </div>
  );
}

export default App;

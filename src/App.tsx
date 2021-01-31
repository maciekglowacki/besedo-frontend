import React from 'react';
import { Topbar } from './components/Topbar';
import { UserManagement } from './components/UserManagement';
import { UserTable } from './components/UserTable';
import './tailwind.output.css';

function App() {
  return (
    <>
      <Topbar />
      <UserManagement />
      <UserTable />
    </>
  );
}

export default App;

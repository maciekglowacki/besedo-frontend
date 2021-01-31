import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types';
import { UserManagement } from './UserManagement';
import { UserTable } from './UserTable';
export const MainView = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data: users } = await axios.get<Array<User>>('http://localhost:8181/users');
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <div className="flex-auto bg-pink-50">
      <UserManagement />
      <UserTable users={users} />
    </div>
  );
};

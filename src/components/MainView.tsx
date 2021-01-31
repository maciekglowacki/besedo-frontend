import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from '../types';
import { UserManagement } from './UserManagement';
import { UserTable } from './UserTable';

export const MainView = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const { data: users } = await axios.get<Array<User>>('http://localhost:8181/users');
      setUsers(users);
      setIsUsersLoading(false);
    };
    getUsers();
  }, []);

  return (
    <div className="flex-auto mt-32 bg-pink-50">
      {!isUsersLoading && (
        <>
          <UserManagement />
          <UserTable users={users} />
        </>
      )}
    </div>
  );
};

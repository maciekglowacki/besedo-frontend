import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from '../types';
import { UserManagement } from './UserManagement';
import { UserTable } from './UserTable';

export const MainView = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const showModal = () => setIsModalActive(true);
  const hideModal = () => setIsModalActive(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const { data: users } = await axios.get<Array<User>>('http://localhost:8181/users');
        setUsers(users);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="flex-auto mt-32 bg-pink-50">
      {isError && <div className="text-center">Users cannot be displayed...</div>}
      {isLoading ? (
        <div className="loader h-64 w-64 border-8 border-t-8 m-auto ease-linear rounded-full  border-gray-200 "></div>
      ) : (
        <>
          <UserManagement />
          <UserTable users={users} isModalActive={isModalActive} showModal={showModal} hideModal={hideModal} />
        </>
      )}
    </div>
  );
};

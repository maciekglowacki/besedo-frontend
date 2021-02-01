import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from '../types';
import { UserManagement } from './UserManagement';
import { UserTable } from './UserTable';

//could move data fetching logic to user context
export const MainView = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const showModal = () => setIsModalActive(true);
  const hideModal = () => setIsModalActive(false);

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

  const removeUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8181/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const addUser = async (user: User) => {
    try {
      console.log('adding user');
      await axios.post(`http://localhost:8181/users`, user);
    } catch (e) {
      console.log(e);
    }
  };

  const updateUser = async (user: User) => {
    try {
      await axios.put<User>(`http://localhost:8181/users/${user.id}`, user);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex-auto mt-32 bg-pink-50">
      {isError && <div className="text-center">Users cannot be displayed...</div>}
      {isLoading ? (
        <div className="loader h-64 w-64 border-8 border-t-8 m-auto ease-linear rounded-full  border-gray-200 "></div>
      ) : (
        <>
          <UserManagement showModal={showModal} />
          <UserTable
            users={users}
            isModalActive={isModalActive}
            showModal={showModal}
            hideModal={hideModal}
            removeUser={removeUser}
            addUser={addUser}
            updateUser={updateUser}
          />
        </>
      )}
    </div>
  );
};

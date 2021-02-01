import { useState } from 'react';
import { User } from '../types';
import { EditDetailsModal } from './EditDetailsModal';

type UserTableProps = {
  users: Array<User>;
  isModalActive: boolean;
  showModal: () => void;
  hideModal: () => void;
};
export const UserTable = ({ users, isModalActive, showModal, hideModal }: UserTableProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <div className="flex items-center justify-center mb-8">
      {users.length !== 0 && (
        <table className=" shadow-lg bg-white">
          <thead>
            <tr>
              <th className="bg-pink-200 border text-center px-16 py-6 ">name</th>
              <th className="bg-pink-200 border text-center px-16 py-6">picture</th>
              <th className="bg-pink-200 border text-center px-16 py-6">actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="border px-16 py-6 text-center">
                    {user.name.first} {user.name.last}
                  </td>
                  <td className="border px-16 py-6">
                    <img src={user.picture} alt="user" />
                  </td>
                  <td className="border px-16 py-6 text-center">
                    <button
                      className="py-2 px-4 bg-pink-400 text-white rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-pink-300 focus:ring-opacity-75"
                      data-id={user.id}
                      onClick={(e) => {
                        const target = e.target as HTMLButtonElement;
                        const id = target.dataset.id;
                        const currentUser = users.find((user) => user.id === id)!;
                        id && setCurrentUser(currentUser);
                        showModal();
                      }}
                    >
                      Edit user
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {isModalActive && <EditDetailsModal hideModal={hideModal} currentUser={currentUser} />}
    </div>
  );
};

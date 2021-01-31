import { User } from '../types';

type UserTableProps = {
  users: Array<User>;
};

export const UserTable = ({ users }: UserTableProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {users.length && (
        <table className=" shadow-lg bg-white">
          <thead>
            <tr>
              <th className="bg-pink-200 border text-center px-16 py-6 ">name</th>
              <th className="bg-pink-200 border text-center px-16 py-6">picture</th>
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
                    <img src={user.picture} alt="user-picture" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

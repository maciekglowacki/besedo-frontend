import { User } from '../types';

type UserTableProps = {
  users: Array<User>;
};

export const UserTable = ({ users }: UserTableProps) => {

  return (
    <table className=" shadow-lg bg-white">
      <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">name</th>
          <th className="bg-blue-100 border text-left px-8 py-4">picture</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          if (index < 4) {
            return (
              <tr key={user.id}>
                <td className="border px-8 py-4">
                  {user.name.first} {user.name.last}
                </td>
                <td className="border px-8 py-4">
                  <img src={user.picture} />
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

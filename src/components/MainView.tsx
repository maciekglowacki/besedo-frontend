import { UserManagement } from './UserManagement';
import { UserTable } from './UserTable';

export const MainView = () => {
  return (
    <div className="flex-auto bg-pink-50">
      <UserManagement />
      <UserTable />
    </div>
  );
};

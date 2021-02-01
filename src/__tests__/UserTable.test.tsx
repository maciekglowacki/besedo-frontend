import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserTable } from '../components/UserTable';

const mockUsers = [
  { id: 'e1913249-240e-4cb2-a2b6-9292171563c1', name: { first: 'lotta', last: 'kotila' }, picture: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { id: '9201070d-01b7-4259-afdf-865d68c499c0', name: { first: 'magnus', last: 'christensen' }, picture: 'https://randomuser.me/api/portraits/men/50.jpg' },
  { id: '19b20e0c-69bc-4a7e-bf6d-31dc5d51d1d5', name: { first: 'signe', last: 'petersen' }, picture: 'https://randomuser.me/api/portraits/women/75.jpg' },
  { id: 'a3c7eeda-6edf-4ece-9941-892d83c8aaa9', name: { first: 'sheryl', last: 'barrett' }, picture: 'https://randomuser.me/api/portraits/women/49.jpg' },
  { id: '631e28c3-15c0-484b-8e95-f2459f7aca59', name: { first: 'travis', last: 'stone' }, picture: 'https://randomuser.me/api/portraits/men/27.jpg' },
  { id: '3ef2415a-5b64-40ba-90ca-2fe303b98d68', name: { first: 'wilhelm', last: 'könig' }, picture: 'https://randomuser.me/api/portraits/men/79.jpg' },
  { id: 'd0f89387-7508-44c5-b9e9-3bc122b8d8ae', name: { first: 'maëlle', last: 'lopez' }, picture: 'https://randomuser.me/api/portraits/women/15.jpg' },
  { id: 'f10f146f-8174-4a4d-9176-40fefa251c51', name: { first: 'philip', last: 'young' }, picture: 'https://randomuser.me/api/portraits/men/25.jpg' },
  { id: '9cb44f4a-d439-4ed9-8835-6ac182337a3a', name: { first: 'henry', last: 'white' }, picture: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '092670ad-8723-42a5-86d4-a3736bd78efc', name: { first: 'carol', last: 'hamilton' }, picture: 'https://randomuser.me/api/portraits/women/31.jpg' },
];

test('loads and displays users', async () => {
  render(
    <UserTable
      users={mockUsers}
      isModalActive={false}
      showModal={() => {}}
      hideModal={() => {}}
      removeUser={() => {
        return Promise.resolve();
      }}
      addUser={() => {
        return Promise.resolve();
      }}
      updateUser={() => {
        return Promise.resolve();
      }}
    />,
  );

  await waitFor(() => screen.getByText(/name/));

  expect(screen.getByText(/name/)).toHaveTextContent('name');
});

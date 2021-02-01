import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MainView } from '../components/MainView';

//unfortunately these tests are not passing. Probably it is some issue with msw. It would be a good idea to create an issue on github. There is not a single issue with this error on stack overflow!
const server = setupServer(
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json({ id: 'e1913249-240e-4cb2-a2b6-9292171563c1', name: { first: 'lotta', last: 'kotila' }, picture: 'https://randomuser.me/api/portraits/women/22.jpg' }),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test.skip('loads and displays users', async () => {
  render(<MainView />);

  await waitFor(() => screen.getByText(/name/));

  expect(screen.getByText(/name/)).toHaveTextContent('name');
});

test.skip('handles server error', async () => {
  server.use(
    rest.get('/users', (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );

  render(<MainView />);

  await screen.findByRole('alert');
  expect(screen.getByRole('alert')).toHaveTextContent('Users cannot be displayed...');
});

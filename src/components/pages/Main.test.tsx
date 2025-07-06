// import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter, Outlet } from 'react-router-dom';
import '@testing-library/jest-dom';

// No need to mock Layout component for this test
// Still mock others if you want to isolate routing logic
jest.mock('../../components/organisms/Save', () => () => <div>Save Page</div>);
jest.mock('../../components/organisms/Update', () => () => <div>Update Page</div>);
jest.mock('../../components/organisms/Delete', () => () => <div>Delete Page</div>);
jest.mock('../../components/atoms/Error', () => () => <div>Error Page</div>);

const routes = [
  {
    path: '/',
    element: <div>Layout Page<Outlet /></div>,
    errorElement: <div>Error Page</div>,
    children: [
      { path: '/Save', element: <div>Save Page</div>, errorElement: <div>Error Page</div> },
      { path: '/Update', element: <div>Update Page</div>, errorElement: <div>Error Page</div> },
      { path: '/Delete', element: <div>Delete Page</div>, errorElement: <div>Error Page</div> },
    ],
  },
];

describe('App Routing', () => {
  it('renders the layout for the root path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Layout Page/i)).toBeInTheDocument();
  });

  it('renders Save page for /Save path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/Save'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Save Page/i)).toBeInTheDocument();
  });

  it('renders Update page for /Update path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/Update'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Update Page/i)).toBeInTheDocument();
  });

  it('renders Delete page for /Delete path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/Delete'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Delete Page/i)).toBeInTheDocument();
  });

  it('renders Error page for unknown path', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/NotFound'] });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Error Page/i)).toBeInTheDocument();
  });
});

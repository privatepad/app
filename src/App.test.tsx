import React, { Children } from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

function RouteredRender() {
  return (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
}

test('full app rendering/navigating', async () => {
  render(<RouteredRender />);
  
  const outlet = screen.getByTestId("outlet")
  expect(within(outlet).getByText(/Home/)).toBeInTheDocument()

  const nav = screen.getByTestId("nav")
  await userEvent.click(within(nav).getByText(/Pools/))
  expect(within(outlet).getByText(/Pools/)).toBeInTheDocument()

  await userEvent.click(within(nav).getByText(/Create Pool/))
  expect(within(outlet).getByText(/Create Pool/)).toBeInTheDocument()

  await userEvent.click(within(nav).getByText(/Admin/))
  expect(within(outlet).getByText(/Admin/)).toBeInTheDocument()

});
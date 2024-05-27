// Index from InitialPage Component
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InitialPage from '../../src/components/initialPage';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

test('renders greeting', () => {
  render(<InitialPage />);
  const greetingElement = screen.getByText(/This app shows energy consumption in the UK/i);
  expect(greetingElement).toBeInTheDocument();
});

test('clicking button and call handleClickInitApp to set isInitApp', () => {
    const { getByText } = render(
        <QueryClientProvider client={queryClient}>
          <InitialPage />
        </QueryClientProvider>
    );
    fireEvent.click(getByText('Click to init App'));
    expect(isInitApp).toBe(true);
    expect(handleClickInitApp).toHaveBeenCalled();
});
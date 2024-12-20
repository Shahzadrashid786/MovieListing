import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInput from "./SearchInput.tsx";

test('renders Movies Container component', () => {
  render(<SearchInput />);
  const inputElement = screen.queryByPlaceholderText(/Type to search.../i);
  expect(inputElement).toBeNull();
});
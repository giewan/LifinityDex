// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LifinityDex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LifinityDex/i);
    expect(titleElement).toBeInTheDocument();
});

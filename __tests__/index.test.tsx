import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
    test('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /welcome hello 222 ! to next\.js!/i,
        });

        expect(heading).toBeInTheDocument;
    });
});

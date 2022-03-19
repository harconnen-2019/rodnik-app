import { render, screen } from '@testing-library/react';

import Title from './index';

describe('Компонент Title', function () {
    test('Отобразить компонент', () => {
        //Arrange
        const children = 'Вложенный элемент';

        //Act
        render(<Title>{children}</Title>);
        const title = screen.getByText(/Вложенный элемент/i);

        //Assert
        expect(title).toBeInTheDocument();
    });
});

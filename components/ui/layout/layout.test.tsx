import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('Компонент Layout', function () {
    test('Отобразить компонент', () => {
        //Arrange
        const children = 'Вложенный элемент';

        //Act
        render(<Layout>{children}</Layout>);
        const layout = screen.getByText(/Вложенный элемент/i);

        //Assert
        expect(layout).toBeInTheDocument();
    });
});

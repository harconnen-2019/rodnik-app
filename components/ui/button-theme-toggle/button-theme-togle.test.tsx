import { render, screen } from '@testing-library/react';
import ButtonThemeToggle from './index';

describe('Компонент ButtonThemeToggle', function () {
    test('Отобразить компонент', () => {
        //Arrange
        const theme = 'light';
        const setTheme = () => {};

        //Act
        render(<ButtonThemeToggle theme={theme} setTheme={setTheme} />);
        const item = screen.getByTitle(/изменить тему сайта/i);

        //Assert
        expect(item).toBeInTheDocument();
    });
});

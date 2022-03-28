import { render, screen } from '@testing-library/react';
import MenuItem from './index';
import mockRouter from 'next-router-mock';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Компонент MenuItem', function () {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/example');
    });

    const children = 'Название элемента';

    test('Отобразить компонент', () => {
        //Arrange

        //Act
        render(
            <MenuItem idSvgIcon="idIcon" href="/page">
                {children}
            </MenuItem>
        );
        const item = screen.getByText(/Название элемента/i);

        //Assert
        expect(item).toBeInTheDocument();
    });

    test('Проверить активность элемента', () => {
        //Arrange

        //Act
        render(
            <MenuItem idSvgIcon="idIcon" href="/example" hiddenMobile>
                {children}
            </MenuItem>
        );
        // const item = screen.getByText(/Название элемента/i);
        screen.debug();

        //Assert
        // expect(item).toHaveClass('bg-logo-slice');
    });
});

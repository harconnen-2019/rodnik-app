import { FC } from 'react';

type AppProps = {
    readonly name: string;
};

const App: FC<AppProps> = ({ name }) => {
    return <>{name}</>;
};

export default App;

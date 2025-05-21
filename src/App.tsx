import { TaskContexProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';

import './styles/theme.css';
import './styles/global.css';

export function App() {

    // Sempre que eu usar useState, não vou usar atribuição diretamente
    // const [numero, setNumero] = useState(() => {
    //   console.log('Lazy initialization');
    //   return 0;
    // });
    // setNumero(prevState => prevState + 1);

    return (
        <TaskContexProvider>
            <MessagesContainer>
                <MainRouter />
            </MessagesContainer>
        </TaskContexProvider>
    );
}
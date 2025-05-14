import { Home } from './pages/Home';
import { TaskContexProvider } from './contexts/TaskContext/TaskContextProvider';

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
            <Home />
        </TaskContexProvider>
    );
}
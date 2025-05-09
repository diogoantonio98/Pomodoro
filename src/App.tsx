import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
import { Container } from './components/Conatiner';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';



export function App() {

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>
        </>
    );
}
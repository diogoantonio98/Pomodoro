import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
import { Container } from './components/Conatiner';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';



export function App() {

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Heading>Menu</Heading>
            </Container>
        </>
    );
}
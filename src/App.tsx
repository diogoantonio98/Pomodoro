import { Heading } from './components/Heading';
import { PlayCircleIcon, StopCircleIcon, TimerIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';



export function App() {

    // Sempre que eu usar useState, não vou usar atribuição diretamente
    // const [numero, setNumero] = useState(() => {
    //   console.log('Lazy initialization');
    //   return 0;
    // });
    // setNumero(prevState => prevState + 1);


    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action=''>
                    <div className='formRow'>
                        <DefaultInput
                            labelText='task'
                            id='meuInput'
                            type='text'
                            placeholder='Digite algo'
                        />
                    </div>

                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>

                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}
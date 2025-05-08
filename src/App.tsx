import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';


export function App() {

    return (
        <>
            <Heading>
                Olá mund 1
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Sit placeat ducimus ad
                deserunt aperiam, assumenda nemo sapiente,
                eligendi architecto nesciunt minima quasi
                ipsam perspiciatis in quisquam consequatur
                quibusdam quae dolore.</p>
        </>
    );
}
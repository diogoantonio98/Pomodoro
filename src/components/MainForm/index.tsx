import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef, useState } from "react";

export function MainForm() {
    // const [taskName, setTaskName] = useState('');
    const taskNameInput = useRef<HTMLInputElement>(null);

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action=''>
            <div className='formRow'>
                <DefaultInput
                    labelText='task'
                    id='meuInput'
                    type='text'
                    placeholder='Digite algo'
                    // value={taskName}
                    // onChange={(e) => setTaskName(e.target.value)}
                    ref={taskNameInput}
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
    );
}
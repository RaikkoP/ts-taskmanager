import './Input.css'
import toggle from '../../assets/toggle.svg';
import React from 'react';
import ToDo from '../../class/ToDo';

//Props datatypes
interface AppProps {
    data: ToDo[],
    setData: React.Dispatch<React.SetStateAction<ToDo[]>>
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Input({ data, setData, open, setOpen }: AppProps) {

    const [input, setInput] = React.useState("");
    const changeOpenStatus = () => setOpen(!open);

    //This handles the data changing during writing
    const dataChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInput(event.currentTarget.value);
    }

    //This send the data that we've made to the App component
    const sendData = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInput(event.currentTarget.value);
        setData([...data, new ToDo(input)]);
        setInput("");
    }

    return (
        <div className="inputField">
            <button onClick={() => changeOpenStatus()} className="toggleButton"><img className="toggleImage" src={toggle} alt='Toggle Button' /></button>
            <input type="text" value={input} onChange={(event) => dataChange(event)} placeholder="What needs to be done?"
                onKeyDown={(event) => {
                    //When enter key is pressed we send the data and update it for the last time
                    if (event.key === "Enter") {
                        sendData(event);
                        if (!open) {
                            changeOpenStatus();
                        }
                    }
                }}>
            </input>
        </div>
    )
}
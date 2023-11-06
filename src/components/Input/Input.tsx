import './Input.css'
import toggle from '../../assets/toggle.svg';
import React from 'react';

type AppProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function Input({ open, setOpen }: AppProps) {

    const changeOpenStatus = () => setOpen(!open);

    return (
        <div className="inputField">
            <button onClick={() => changeOpenStatus()} className="toggleButton"><img className="toggleImage" src={toggle} alt='Toggle Button' /></button>
            <input type="text" placeholder="What needs to be done?"></input>
        </div>
    )
}
import React from 'react';
import './Header.css';

export default function Header() {

    const [activeSoftwareIndex, setActiveSoftwareIndex] = React.useState(0);
    const usedSoftware = ["ReactJS", "TypeScript"];

    const changeActiveSoftware = () => activeSoftwareIndex == 0 ? setActiveSoftwareIndex(1) : setActiveSoftwareIndex(0);

    React.useEffect(() => {
        setTimeout(changeActiveSoftware, 5000)
    })

    return (
        <>
            <div>
                <h1 className='title'>todos</h1>
                <p className='software'>Software used: {usedSoftware[activeSoftwareIndex]}</p>
            </div>
        </>
    )
}
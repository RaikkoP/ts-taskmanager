import './Tasks.css'
import check from '../../assets/check.svg';
import ToDo from '../../class/ToDo';
import React from 'react';


interface dataProps {
    data: ToDo[];
}

const Task: React.FC<dataProps> = ({ data }) => {
    const [isClicked, setIsClicked] = React.useState(false);


    React.useEffect(() => {
        setIsClicked(false);
    },[isClicked])

    return (
        <>
            {
                data.map((data, index) => (
                    data.status === 'active' ? (
                        <div className="taskContainer" key={index}>
                            <button onClick={() => {data.ifClicked(); setIsClicked(true)}} className="checkButton"></button>
                            <h2 className="taskName">{data.task}</h2>
                        </div>
                    ) : (
                        <div className="taskContainer" key={index}>
                            <button onClick={() => {data.ifClicked(); setIsClicked(true)}} className="checkButton" style={{ borderColor:'rgb(73, 187, 164)'}}><img className='checkMark' src={check} alt="CheckMark" /></button>
                            <h2 className="taskName" style={{ textDecorationLine:'line-through', color:'rgb(73, 187, 164)'}}>{data.task}</h2>
                        </div>
                    )
                ))
            }
        </>
    )
}

export default Task;

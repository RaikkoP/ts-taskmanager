import './Tasks.css'
import check from '../../assets/check.svg';
import ToDo from '../../class/ToDo';
import React from 'react';

//Props dataypes
interface dataProps {
    data: ToDo[],
    filter: string;

}

const Task: React.FC<dataProps> = ({ data, filter }) => {
    const [isClicked, setIsClicked] = React.useState(false);



    //Helps rerender when a task is marked as completed
    React.useEffect(() => {
        setIsClicked(false);
    }, [isClicked])

    //Return has long filter statements filtering what data should be shown when
    //Main difference is that completed tasks have different css styling.
    return (
        <>
            {filter == 'all' ? (
                data.map((data, index) => (
                    data.status === 'active' ? (
                        <div className="taskContainer" key={index}>
                            <button onClick={() => { data.status = 'complete'; setIsClicked(true) }} className="checkButton"></button>
                            <h2 className="taskName">{data.task}</h2>
                        </div>
                    ) : (
                        <div className="taskContainer" key={index}>
                            <button onClick={() => { data.status = 'active'; setIsClicked(true) }} className="checkButton" style={{ borderColor: 'rgb(73, 187, 164)' }}><img className='checkMark' src={check} alt="CheckMark" /></button>
                            <h2 className="taskName" style={{ textDecorationLine: 'line-through', color: 'rgb(73, 187, 164)' }}>{data.task}</h2>
                        </div>
                    )
                ))
            ) : filter == 'complete' ? (
                data.map((data, index) => (
                    data.status === 'complete' ? (
                        <div className="taskContainer" key={index}>
                            <button onClick={() => { data.status = 'active'; setIsClicked(true) }} className="checkButton" style={{ borderColor: 'rgb(73, 187, 164)' }}><img className='checkMark' src={check} alt="CheckMark" /></button>
                            <h2 className="taskName" style={{ textDecorationLine: 'line-through', color: 'rgb(73, 187, 164)' }}>{data.task}</h2>
                        </div>
                    ) : (
                        <></>
                    )
                ))
            ) : filter == 'active' ? (
                data.map((data, index) => (
                    data.status === 'active' ? (
                        <div className="taskContainer" key={index}>
                            <button onClick={() => { data.status = 'complete'; setIsClicked(true) }} className="checkButton"></button>
                            <h2 className="taskName">{data.task}</h2>
                        </div>
                    ) : (
                        <></>
                    )
                ))
            ) : (
                <div></div>
            )
            }
        </>
    )
}

export default Task;

import './Tasks.css'
import check from '../../assets/check.svg';

interface dataProps {
    data: {
        task: string,
        status: string
    }[]
}

const Task: React.FC<dataProps> = ({ data }) => {


    return (
        <>
            {
                data.map((data, index) => (
                    data.status === 'active' ? (
                        <div className="taskContainer" key={index}>
                            <button className="checkButton"></button>
                            <h2 className="taskName">{data.task}</h2>
                        </div>
                    ) : (
                        <div className="taskContainer" key={index}>
                            <button className="checkButton" style={{ borderColor:'rgb(73, 187, 164)'}}><img className='checkMark' src={check} alt="CheckMark" /></button>
                            <h2 className="taskName" style={{ textDecorationLine:'line-through', color:'rgb(73, 187, 164)'}}>{data.task}</h2>
                        </div>
                    )
                ))
            }
        </>
    )
}

export default Task;

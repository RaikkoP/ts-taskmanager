
interface dataProps {
    data: {
        task: string,
        status: string
    }[]
}

//TODO: Implement .map for data, add styling for data


const Task: React.FC<dataProps> = ({ data }) => {

    return(
        <h1>{data[0].task}</h1>
    )
}

export default Task;
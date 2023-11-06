
interface dataProps {
    data: {
        task: string,
        status: string
    }[]
}

const Task: React.FC<dataProps> = ({ data }) => {

    return(
        <h1>{data[0].task}</h1>
    )
}

export default Task;
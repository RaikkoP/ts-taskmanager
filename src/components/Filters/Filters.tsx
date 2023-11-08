import './Filters.css';
import ToDo from '../../class/ToDo';

//Define Types of props passed to filter component
interface FilterProps {
    data: ToDo[],
    open: boolean,
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    setData: React.Dispatch<React.SetStateAction<ToDo[]>>
}


const Filter = ({ data, open, filter, setFilter, setData }: FilterProps) => {

    //Hangles filter being changed by the select HTML element
    const onChangeFilter = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setFilter(event.currentTarget.value);
    }

    //When delete completed button is pressed this code deletes the selected tasks
    const deleteCompleted = () => {
        const incompleteTasks = data.filter(task => task.status !== 'complete');
        setData(incompleteTasks);
    }

    return (
        <>
            {
                //We check if the tasklist is open or not, if it is we display the tasks if not we display empty fragment
                open ? (
                    <div className='filterContainer'>
                        <p className='taskAmount'>Amount Of Task In List: {data.length}</p>
                        <form className='filters'>
                            <label htmlFor='filter'>Filter:</label>
                            <select onChange={(event) => onChangeFilter(event)} value={filter}>
                                <option value="all">All</option>
                                <option value="complete">Complete</option>
                                <option value="active">Active</option>
                            </select>
                        </form>
                        <button onClick={() => deleteCompleted()}>Clear Completed</button>
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    )
}


export default Filter;
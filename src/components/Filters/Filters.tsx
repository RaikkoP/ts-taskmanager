import './Filters.css';

interface FilterProps {
    data: {
        task: string,
        status: string
    }[],
    open: boolean,
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
}


const Filter = ({ data, open, filter, setFilter }: FilterProps) => {
    //All, Active, Complete, Clear Completed

    const onChangeFilter = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setFilter(event.currentTarget.value);
    }

    return (
        <>
        {
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
                <button>Clear Completed</button>
            </div>
            ) : (
                <></>
            )
        }
    </>
    )  
}


export default Filter;
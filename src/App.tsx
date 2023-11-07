import './App.css'
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Tasks from './components/Tasks/Tasks';
import ToDo from './class/ToDo';
import React from 'react';
import Filter from './components/Filters/Filters';

  const App: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const [mainBox, setMainBox] = React.useState(50);
  const [data, setData] = React.useState([new ToDo("test"), new ToDo("test2")]);
  const [filter, setFilter] = React.useState("all");

  React.useEffect(() => {
    console.log("Render")
    console.log(data);
    console.log(filter);
    if(open) {
      setMainBox(65);
    } else if (!open){
      setMainBox(12);
    }
  },[open, data, filter]);

  //TODO: ADD FILTERS, ADD LOCALSTORAGE, START BACKEND
  return (
    <>
      <Header />
      <div className='toDoContainer'>
        <div className='mainBox' style={{ height:mainBox + '%'}}>
          <Filter data={data} open={open} filter={filter} setFilter={setFilter}/>
          <Input data={data} setData={setData} open={open} setOpen={setOpen}/>
          {
            open ? (
              <Tasks data={data} filter={filter} />
            ) : (
              <></>
            )
          }
        </div>
        <div className='mediumBox' style={{ height:mainBox + 1 + '%'}}></div>
        <div className='smallBox' style={{ height:mainBox + 2 + '%'}}></div>
      </div>
    </>
  )
}

export default App;
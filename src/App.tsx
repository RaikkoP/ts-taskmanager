import './App.css'
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Tasks from './components/Tasks/Tasks';
import ToDo from './class/ToDo';
import React from 'react';

  const App: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const [mainBox, setMainBox] = React.useState(50);
  const [data, setData] = React.useState([new ToDo("test"), new ToDo("test2")]);

  React.useEffect(() => {
    console.log("Render")
    console.log(data);
    if(open) {
      setMainBox(65);
    } else if (!open){
      setMainBox(12);
    }
  },[open, data]);

  return (
    <>
      <Header />
      <div className='toDoContainer'>
        <div className='mainBox' style={{ height:mainBox + '%'}}>
          <Input data={data} setData={setData} open={open} setOpen={setOpen}/>
          {
            open ? (
              <Tasks data={data} />
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
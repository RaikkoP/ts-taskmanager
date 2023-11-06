import './App.css'
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Tasks from './components/Tasks/Tasks';
import React from 'react';

  const App: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const [mainBox, setMainBox] = React.useState(40);

  const data = [
    {
      task: "build projects",
      status: "active"
    },
    {
      task: "code some more",
      status: "active"
    }
  ];

  React.useEffect(() => {
    console.log("Render")
    if(open) {
      setMainBox(40);
    } else if (!open){
      setMainBox(12);
    }
  },[open]);


  return (
    <>
      <Header />
      <div className='toDoContainer'>
        <div className='mainBox' style={{ height:mainBox + '%'}}>
          <Input open={open} setOpen={setOpen}/>
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
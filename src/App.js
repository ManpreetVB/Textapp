import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Header from './components/Header';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Routes} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(" ");

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
    type:type
    })
    
    setTimeout(() => {
      setAlert('');
    }, 1500);

  }

  const toggleMode = () =>{
    if (mode==='light')
      {
        setMode ( 'dark')
        document.body.style.backgroundColor='gray';
        showAlert("Dark mode has been enabled","success");
      }
  else
  {
    setMode  ('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
}
  return (
    <>
    <Router>
<Header title="TextUtils " mode ={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className={`container ${mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}></div>
<div className='container'>
<Routes>
          <Route path="/about" element={<About mode={mode}/>} >
           
          </Route>
          
          <Route path="/" element={<TextForm showAlert={showAlert} heading="My Text" mode={mode} />} />
          
        </Routes>
        </div>
    </Router>
   
   


    </>
  );
}

export default App;

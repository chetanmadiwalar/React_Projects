import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextAnalyse from './components/TextAnalyse';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
function App() {
 const [mode,setMode]=useState('light')
 const [alert,setAlert]=useState(null)

  function showAlert(message,type){
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#001739';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }

  return (
    <div>
      {/* <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} /> */}
      {/* <TextAnalyse mode={mode} showAlert={showAlert} />
      <About/> */}
       <BrowserRouter>
       <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextAnalyse
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

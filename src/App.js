import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import React, { useState } from "react";
// Importing React router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  document.title = "Best Text Editor";
  const bodyClassChange = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-white');
  }

  const themeSelection = (cls) => {
    bodyClassChange();
    document.body.classList.add(`bg-${cls}`);
    setBtnColor("primary");
    showAlert("success", `${cls} Mode has been Enabled`);
    setMode('light');

    setTextColor('light')
    if (cls==='dark'){
      document.body.classList.remove('bg-dark');
      setMode("dark");
      document.body.style.backgroundColor = "#050019";
      setTextColor("light");
      setDarkModeTextColor("light");
      showAlert("success", "Dark Mode has been Enabled");
    }
    else if(cls==='white'){
      document.body.classList.remove('bg-white');
      setMode("light");
      setDarkModeTextColor("dark");
      document.body.style.backgroundColor = "white";
      setTextColor("dark");
      showAlert("success", "Light Mode has been Enabled");
    }
  }

  const [btnColor, setBtnColor] = useState("primary");
  const [bgColor, setBgColor] = useState("light");
  const [darkModeTextColor, setDarkModeTextColor] = useState("dark");
  // Show Alert function here
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [textColor, setTextColor] = useState("dark");

  return (
    <>
      <BrowserRouter>
        <Navbar
          darkModeTextColor={darkModeTextColor}
          link="https://www.google.com/"
          setMode={setMode}
          mode={mode}
          themeSelection={themeSelection}
        />
        <Alert alert={alert} />
      
        {/* <About/> */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode} textColor={textColor}/>}>
          </Route>
          <Route exact path="/" element={<Form
          heading="Tools: "
          btnColor={btnColor}
          bgColor={bgColor}
          showAlert={showAlert}
          mode={mode}
          textColor={textColor}
        />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

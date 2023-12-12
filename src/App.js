import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");

  const [alert, setAlert]=useState(null);


  const showAlert=(msg,type)=>{
    setAlert(
      {
        msg:msg,
        type:type
      }
    )
  }
  const [theme, setTheme] = useState({
    backgroundColor: "black",
    color: "white",
  });

  const changeTheme = () => {

    setInterval(()=>document.title="Install now",2000)
    if (mode === "light") {
      setTheme({
       
        backgroundColor: "black",
        color: "white",
      });

      setMode("dark");
      document.body.style.backgroundColor="#d3d3d3";
      document.body.style.color="#fff"
      showAlert("dark mode has been enabled","success");
      document.title="dark Mode:"

    } else {
      setTheme({
        backgroundColor: "white",
        color: "black",
      });
      // document.body.style.backgroundColor="#d3d3d3";
      document.body.style.color="#000";
      setMode("light");
      showAlert("light mode has been enabled","success");
      document.title="Light Mode:"
      
    }
  };
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={changeTheme} />
      <Alert alert={alert}/>
      <Form />
      {/* <About/> */}


      {/* <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />}>
         
        </Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#090b40";
      document.body.style.color = "white";
      showAlert(" Dark mode enabled ", "success");
      document.title = "Text-Util-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Light mode enabled ", "success");
    }
  };

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* This are props */}
      <Router>
      <Navbar
        title="TextUtils1"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Textform
              heading="Enter the text to analyse"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}
export default App;
//class-->className
//for-->htmlFor
//tabIndex
